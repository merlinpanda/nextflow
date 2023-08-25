import { useDisclosure } from "@mantine/hooks";
import {
  Button,
  Drawer,
  Group,
  Radio,
  Select,
  Stack,
  Stepper,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useForm } from "@mantine/form";
import React, { useState } from "react";

interface StepProps {
  onFinished: () => void;
}

const BaseInfo = ({ onFinished }: StepProps) => {
  const form = useForm({
    initialValues: {
      title: "",
    },
  });

  return (
    <>
      <form>
        <Stack>
          <TextInput
            label="文档标题"
            placeholder="请输入文档标题"
            withAsterisk
            {...form.getInputProps("title")}
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
    </>
  );
};

export default function AddDocument() {
  const [active, setActive] = useState(0);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="添加文档"
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
        <Stepper active={active} size="xs" breakpoint="sm">
          <Stepper.Step label="基本信息" description="Base info">
            <BaseInfo onFinished={() => setActive(active + 1)} />
          </Stepper.Step>
          <Stepper.Step label="版本列表" description="Versions"></Stepper.Step>
          <Stepper.Step
            label="默认支持语言"
            description="Languages"
          ></Stepper.Step>
        </Stepper>
      </Drawer>

      <Button
        onClick={open}
        size="xs"
        variant="light"
        leftIcon={<IconPlus size="1rem" />}
      >
        添加文档
      </Button>
    </>
  );
}
