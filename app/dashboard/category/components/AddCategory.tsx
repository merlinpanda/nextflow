import { useDisclosure } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { Modal, Button, Select, Stack, TextInput, NumberInput, useMantineTheme, Group, Checkbox } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';

export default function AddCategory() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const form = useForm({
    initialValues: {
      pid: 0,
      name: "",
      title: "",
      sort: 0,
      publish: true
    }
  })

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="添加分类"
        overlayProps={{
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <form>
          <Stack>
            <Select
              label="父级分类"
              placeholder="请选择父级分类"
              searchable
              data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
              {...form.getInputProps('pid')}
            />
            <TextInput
              label="唯一名称(英文)"
              placeholder='请输入唯一名称(英文)'
              {...form.getInputProps('name')}
            />
            <TextInput
              label="名称"
              placeholder='请输入名称'
              {...form.getInputProps('title')}
            />
            <NumberInput
              label="排序"
              placeholder="请输入排序"
              {...form.getInputProps('sort')}
            />
            
            <Group position="apart">
              <Checkbox
                label="是否发布？"
                defaultChecked
              />
              <Group>
                <Button color="gray" onClick={close} variant="light">取消</Button>
                <Button>创建</Button>
              </Group>
            </Group>
          </Stack>
          
        </form>
      </Modal>

      <Button onClick={open} size="xs" variant="light" leftIcon={<IconPlus size="1rem" />}>添加分类</Button>
    </>
  )
}