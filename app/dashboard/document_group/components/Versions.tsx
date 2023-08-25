import { fetcher } from "@/lib/useRequest";
import {
  ActionIcon,
  Drawer,
  useMantineTheme,
  Table,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRight, IconVersionsFilled } from "@tabler/icons-react";
import { useState } from "react";
import { DocumentVersion } from "@/components/Interfaces";
import { preload } from "swr";

export default function Versions({ code }: { code: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [versions, setVersions] = useState<DocumentVersion[]>([]);

  const openAndLoad = () => {
    open();
    preload("/apis/document_group/" + code + "/versions", fetcher).then(
      (value) => {
        setVersions(value.data);
      },
    );
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="文档版本"
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
        <Table withBorder withColumnBorders>
          <thead>
            <tr>
              <th>版本</th>
              <th>版本号</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {versions &&
              versions.map((version, index) => {
                return (
                  <tr key={index}>
                    <td>{version.version_name}</td>
                    <td>{version.version_number}</td>
                    <td>
                      <ActionIcon>
                        <IconArrowRight size="1rem" />
                      </ActionIcon>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </Drawer>

      <Tooltip label="版本" position="top" withArrow>
        <ActionIcon radius="xl" onClick={openAndLoad} size="xs" variant="light">
          <IconVersionsFilled size="1rem" />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
