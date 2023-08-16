import { useDisclosure } from "@mantine/hooks";
import { useForm } from "@mantine/form";
import {
  Modal,
  Button,
  Select,
  Stack,
  TextInput,
  NumberInput,
  useMantineTheme,
  Group,
  Checkbox,
  Textarea,
  Loader,
} from "@mantine/core";
import { IconDirection, IconLoader2, IconPlus } from "@tabler/icons-react";
import useSWR from "swr";
import { fetcher } from "@/lib/useRequest";
import { CategoryItem } from "@/components/Interfaces";
import { useEffect, useState } from "react";

export default function AddCategory() {
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();
  const [categories, setCategories] = useState([]);
  const { data, error, isLoading } = useSWR("/apis/categories_all", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const form = useForm({
    initialValues: {
      pid: 0,
      title: "",
      type: "",
      altitude: 0,
      intro: "",
    },
  });

  useEffect(() => {
    const cates = data?.data.map((item: CategoryItem) => {
      return {
        value: item.id,
        label: item.title,
      };
    });
    setCategories(cates);
  }, [data]);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="添加分类"
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.dark[2],
          opacity: 0.65,
          blur: 3,
        }}
        size="lg"
      >
        <form>
          <Stack>
            <Select
              label="父级分类"
              placeholder="请选择父级分类"
              searchable
              data={categories}
              withinPortal
              rightSection={
                isLoading ? <Loader size="xs" /> : <IconDirection size="1rem" />
              }
              {...form.getInputProps("pid")}
            />
            <TextInput
              label="名称"
              placeholder="请输入名称"
              {...form.getInputProps("title")}
            />
            <Select
              label="类型"
              placeholder="请选择类型"
              searchable
              data={[
                { value: "LANGUAGE", label: "开发语言" },
                { value: "THEORY", label: "理论" },
                { value: "PACKAGE", label: "包" },
                { value: "STANDARD", label: "标准" },
                { value: "LICENSE", label: "证书" },
                { value: "SOFTWARE", label: "软件" },
              ]}
              {...form.getInputProps("type")}
              withinPortal
            />
            <Textarea
              label="简介"
              placeholder="请输入简介"
              {...form.getInputProps("intro")}
            />
            <NumberInput
              label="高度"
              placeholder="请输入高度"
              min={0}
              {...form.getInputProps("altitude")}
            />
            <Group position="right">
              <Group>
                <Button color="gray" onClick={close} variant="light">
                  取消
                </Button>
                <Button>创建</Button>
              </Group>
            </Group>
          </Stack>
        </form>
      </Modal>

      <Button
        onClick={open}
        size="xs"
        variant="light"
        leftIcon={<IconPlus size="1rem" />}
      >
        添加分类
      </Button>
    </>
  );
}
