import { DocumentItem } from "@/components/Interfaces";
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
            <th style={{ width: "44px" }}>ID</th>
            <th style={{ width: "64px" }}>CODE</th>
            <th>文档</th>
            <th style={{ width: "64px" }}>官网</th>
            <th style={{ width: "64px" }}>开放</th>
            <th style={{ width: "64px" }}>编辑</th>
            <th style={{ width: "64px" }}>Github</th>
            <th style={{ width: "164px" }}>时间</th>
            <th style={{ width: "124px" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((item: DocumentItem, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <Badge
                      size="xs"
                      color="gray"
                      tt="revert"
                      fw={400}
                      pr={1}
                      rightSection={
                        <CopyButton value={item.code} timeout={2000}>
                          {({ copied, copy }) => (
                            <Tooltip
                              label={copied ? "Copied" : "Copy"}
                              withArrow
                              position="right"
                            >
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
                      }
                    >
                      {item.code}
                    </Badge>
                  </td>
                  <td>{item.title}</td>
                  <td>
                    <Anchor href={item.origin_url} target="_blank">
                      <ThemeIcon size="xs" radius="xl" color="blue">
                        <IconWorld size="0.8rem" stroke={2.5} />
                      </ThemeIcon>
                    </Anchor>
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
