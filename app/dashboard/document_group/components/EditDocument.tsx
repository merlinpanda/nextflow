import { useDisclosure } from "@mantine/hooks";
import {
  ActionIcon,
  Drawer,
  Group,
  Radio,
  Select,
  Stack,
  TextInput,
  Textarea,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";
import { IconEdit } from "@tabler/icons-react";
import { useForm } from "@mantine/form";

export default function EditDocument({ code }: { code: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      title: "",
      pid: 0,
    },
  });

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
        <form>
          <Stack>
            <TextInput
              label="文档标题"
              placeholder="请输入文档标题"
              withAsterisk
              {...form.getInputProps("title")}
            />
            <Select
              label="父级文档"
              placeholder="请选择父级文档"
              data={[{ label: "无", value: "0" }]}
              defaultValue="0"
              {...form.getInputProps("pid")}
            />
            <Select
              label="语言"
              placeholder="请选择语言"
              withAsterisk
              data={[]}
              {...form.getInputProps("title")}
            />
            <TextInput
              label="官网地址"
              placeholder="请输入官网地址"
              {...form.getInputProps("origin_url")}
            />
            <TextInput
              label="Github地址"
              placeholder="请输入Github地址"
              {...form.getInputProps("github")}
            />
            <Textarea label="README" placeholder="README" />
            <Radio.Group label="是否允许共同编辑" withAsterisk>
              <Group mt="xs">
                <Radio value="Y" label="允许" />
                <Radio value="N" label="不允许" />
              </Group>
            </Radio.Group>
          </Stack>
        </form>
      </Drawer>

      <Tooltip label="编辑" position="top" withArrow>
        <ActionIcon radius="xl" onClick={open} size="xs" variant="light">
          <IconEdit size="1rem" />
        </ActionIcon>
      </Tooltip>
    </>
  );
}
