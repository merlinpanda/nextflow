import { DocumentItem } from "@/components/Interfaces";
import {
  Table,
  LoadingOverlay,
  ThemeIcon,
  Switch,
  Anchor,
  ActionIcon,
  Group,
} from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "@/lib/useRequest";
import {
  IconBrandGithub,
  IconChecks,
  IconInfoCircle,
  IconLock,
  IconLockOpen,
  IconMinus,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import EditDocument from "./EditDocument";

export default function DocumentTable() {
  const { data, error, isLoading } = useSWR("/apis/documents", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return (
    <>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "64px" }}>ID</th>
            <th style={{ width: "64px" }}>CODE</th>
            <th>文档</th>
            <th style={{ width: "84px" }}>语言</th>
            <th style={{ width: "64px" }}>官网</th>
            <th style={{ width: "64px" }}>完成</th>
            <th style={{ width: "64px" }}>发布</th>
            <th style={{ width: "64px" }}>开放</th>
            <th style={{ width: "64px" }}>编辑</th>
            <th style={{ width: "64px" }}>Github</th>
            <th style={{ width: "224px" }}>时间</th>
            <th style={{ width: "104px" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((item: DocumentItem, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.title}</td>
                  <td>{item?.language?.name_zh}</td>
                  <td>
                    <Anchor href={item.origin_url} target="_blank">
                      <ThemeIcon size="xs" radius="xl" color="blue">
                        <IconWorld size="0.8rem" stroke={2.5} />
                      </ThemeIcon>
                    </Anchor>
                  </td>
                  <td>
                    {item.finished ? (
                      <ThemeIcon radius="xl" size="xs" color="green">
                        <IconChecks size="1rem" />
                      </ThemeIcon>
                    ) : (
                      <ThemeIcon radius="xl" size="xs" color="gray">
                        <IconMinus size="1rem" />
                      </ThemeIcon>
                    )}
                  </td>
                  <td>
                    {item.is_published ? (
                      <ThemeIcon radius="xl" size="xs" color="green">
                        <IconChecks size="1rem" />
                      </ThemeIcon>
                    ) : (
                      <ThemeIcon radius="xl" size="xs" color="gray">
                        <IconMinus size="1rem" />
                      </ThemeIcon>
                    )}
                  </td>
                  <td>
                    <Switch
                      checked={item.property === "PUBLIC"}
                      readOnly
                      size="xs"
                      color="green"
                      onLabel={<IconLockOpen size="0.8rem" stroke={2.5} />}
                      offLabel={<IconLock size="0.8rem" stroke={2.5} />}
                    />
                  </td>
                  <td>
                    <Switch
                      checked={item.open_edit === "Y"}
                      readOnly
                      size="xs"
                      color="green"
                      onLabel={<IconLockOpen size="0.8rem" stroke={2.5} />}
                      offLabel={<IconLock size="0.8rem" stroke={2.5} />}
                    />
                  </td>
                  <td>
                    <Anchor href={item.github} target="_blank">
                      <ThemeIcon size="xs" radius="xl" color="dark">
                        <IconBrandGithub size="0.8rem" stroke={2.5} />
                      </ThemeIcon>
                    </Anchor>
                  </td>
                  <td>{item.created_at}</td>
                  <td>
                    <Group spacing="xs">
                      <ActionIcon
                        component={Link}
                        href={"/dashboard/document/" + item.code}
                        size="xs"
                        radius="xl"
                        variant="light"
                      >
                        <IconInfoCircle size="1rem" />
                      </ActionIcon>
                      <EditDocument code={item.code} />
                    </Group>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
