import { DocumentLanguage } from "@/components/Interfaces";
import { fetcher } from "@/lib/useRequest";
import { ActionIcon, Drawer, Table, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowRight, IconLanguage } from "@tabler/icons-react";
import { useState } from "react";
import { preload } from "swr";

export default function LanguagesTable({ code }: { code: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [languages, setVersions] = useState<DocumentLanguage[]>([]);

  const openAndLoad = () => {
    open();
    preload("/apis/document/" + code + "/languages", fetcher).then((value) => {
      setVersions(value?.data || []);
    });
  };

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="文档语言"
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
              <th>整理进度</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {languages &&
              languages.map((language, index) => {
                return (
                  <tr key={index}>
                    <td>{language.name}</td>
                    <td>20%</td>
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

      <ActionIcon radius="xl" onClick={openAndLoad} size="xs" variant="light">
        <IconLanguage size="1rem" />
      </ActionIcon>
    </>
  );
}
