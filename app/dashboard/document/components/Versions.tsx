import { fetcher } from "@/lib/useRequest";
import { ActionIcon, Box, Drawer, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconVersionsFilled } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { DocumentVersion } from "@/components/Interfaces";
import useSWR from "swr";

export default function Versions({ code }: { code: string }) {
  const { data, error, isLoading } = useSWR(
    "/apis/document/" + code + "/versions",
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [versions, setVersions] = useState<DocumentVersion[]>([]);

  useEffect(() => {
    const vers = data?.data;
    setVersions(vers);
  }, [data]);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="编辑文档"
        position="right"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.dark[2],
          opacity: 0.65,
          blur: 3,
        }}
      >
        {versions &&
          versions.map((version, index) => {
            return <Box key={index}>{version.version_name}</Box>;
          })}
      </Drawer>

      <ActionIcon radius="xl" onClick={open} size="xs" variant="light">
        <IconVersionsFilled size="1rem" />
      </ActionIcon>
    </>
  );
}
