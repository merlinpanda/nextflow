import { DocumentGroupItem, DocumentItem } from "@/components/Interfaces";
import {
  Table,
  LoadingOverlay,
  ThemeIcon,
  Switch,
  Anchor,
  ActionIcon,
  Group,
  Badge,
  CopyButton,
  Tooltip,
} from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "@/lib/useRequest";
import {
  IconBrandGithub,
  IconCheck,
  IconChecks,
  IconCopy,
  IconInfoCircle,
  IconLanguage,
  IconLock,
  IconLockOpen,
  IconMinus,
  IconWorld,
} from "@tabler/icons-react";
import Link from "next/link";
import EditDocument from "./EditDocument";
import Versions from "./Versions";
import LanguagesTable from "./LanguagesTable";
import CategoryLabel from "@/components/Category/CategoryLabel";

export default function DocumentGroupTable() {
  const { data, error, isLoading } = useSWR("/apis/document_groups", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return (
    <>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "44px" }}>ID</th>
            <th style={{ width: "64px" }}>CODE</th>
            <th>文档</th>
            <th style={{ width: "64px" }}>语言</th>
            <th style={{ width: "64px" }}>分类</th>
            <th style={{ width: "64px" }}>官网</th>
            <th style={{ width: "64px" }}>Github</th>
            <th style={{ width: "164px" }}>时间</th>
            <th style={{ width: "124px" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((item: DocumentGroupItem, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <CopyButton value={item.code} timeout={2000}>
                      {({ copied, copy }) => (
                        <Tooltip label={item.code} withArrow position="top">
                          <ActionIcon
                            variant="transparent"
                            size="xs"
                            radius="xl"
                            color={copied ? "teal" : "gray"}
                            onClick={copy}
                          >
                            {copied ? (
                              <IconCheck size="1rem" />
                            ) : (
                              <IconCopy size="1rem" />
                            )}
                          </ActionIcon>
                        </Tooltip>
                      )}
                    </CopyButton>
                  </td>
                  <td>{item.title}</td>
                  <td>{item.default_language?.iso_code}</td>
                  <td>
                    <CategoryLabel category={item.category} size="xs" />
                  </td>
                  <td>
                    {item.web_url ? (
                      <Anchor href={item.web_url} target="_blank">
                        <ThemeIcon size="xs" radius="xl" color="blue">
                          <IconWorld size="0.8rem" stroke={2.5} />
                        </ThemeIcon>
                      </Anchor>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>
                    {item.github ? (
                      <Anchor href={item.github} target="_blank">
                        <ThemeIcon size="xs" radius="xl" color="dark">
                          <IconBrandGithub size="0.8rem" stroke={2.5} />
                        </ThemeIcon>
                      </Anchor>
                    ) : (
                      "-"
                    )}
                  </td>
                  <td>{item.created_at}</td>
                  <td>
                    <Group spacing="xs">
                      <Tooltip label="详情" position="top" withArrow>
                        <ActionIcon
                          component={Link}
                          href={"/dashboard/document_group/" + item.code}
                          size="xs"
                          radius="xl"
                          variant="light"
                        >
                          <IconInfoCircle size="1rem" />
                        </ActionIcon>
                      </Tooltip>
                      <EditDocument code={item.code} />
                      <Versions code={item.code} />
                      <LanguagesTable code={item.code} />
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
