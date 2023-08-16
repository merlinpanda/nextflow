"use client";

import StatisticCard from "@/components/Statistics/StatisticCard";
import {
  ActionIcon,
  Avatar,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Table,
  ThemeIcon,
} from "@mantine/core";
import {
  IconBellDollar,
  IconCheck,
  IconChecks,
  IconCloudUpload,
  IconCrossFilled,
  IconEye,
  IconLanguage,
  IconLink,
  IconMessage2,
  IconMinus,
  IconStarFilled,
  IconTrash,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";

const elements = [
  {
    code: "ADOPTERS",
    title: "Adopters, We are Begging You to Listen.",
    topic: "adoption",
    user: {
      avatar:
        "https://miro.medium.com/v2/resize:fill:40:40/2*Qe_1WTpD_kVMeZMnAJGsCw.jpeg",
      nickname: "Melissa Corrigan",
    },
    translate: false,
    status: "PENDING",
    created_at: "2023-08-18 12:11",
  },
];

export default function Page() {
  const rows = elements.map((element) => (
    <tr key={element.code}>
      <td>{element.code}</td>
      <td>{element.title}</td>
      <td>{element.topic}</td>
      <td style={{ textAlign: "center" }}>
        <Avatar src={element.user.avatar} size="xs" radius="xl"></Avatar>
      </td>
      <td style={{ textAlign: "center" }}>
        {element.translate ? (
          <ThemeIcon color="green" size="xs" radius="xl">
            <IconCheck size="1rem" />
          </ThemeIcon>
        ) : (
          <ThemeIcon color="gray" size="xs" radius="xl">
            <IconMinus size="1rem" />
          </ThemeIcon>
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        {element.status === "PUBLISHED" ? (
          <ThemeIcon color="green" size="xs" radius="xl">
            <IconChecks size="1rem" />
          </ThemeIcon>
        ) : (
          <ThemeIcon color="gray" size="xs" radius="xl">
            <IconMinus size="1rem" />
          </ThemeIcon>
        )}
      </td>
      <td style={{ textAlign: "center" }}>
        <Link href="https://bing.com" target="_blank">
          <ThemeIcon size="xs" radius="xl">
            <IconLink size="1rem" />
          </ThemeIcon>
        </Link>
      </td>
      <td width={140}>{element.created_at}</td>
      <td width="140">
        <Group spacing="xs">
          <ActionIcon size="sm" color="green" variant="light">
            <IconCloudUpload size="1rem" />
          </ActionIcon>
          <ActionIcon size="sm" color="blue" variant="light">
            <IconLanguage size="1rem" />
          </ActionIcon>
          <ActionIcon size="sm" color="red" variant="light">
            <IconTrash size="1rem" />
          </ActionIcon>
        </Group>
      </td>
    </tr>
  ));

  return (
    <>
      <Card>
        <Stack>
          <SimpleGrid cols={4}>
            <StatisticCard
              title="KCards"
              description="Compared to previous month"
              value={13456}
              icon={IconBellDollar}
              diff={34}
            />
            <StatisticCard
              title="Comments"
              description="Compared to previous month"
              value={4125}
              icon={IconMessage2}
              diff={-13}
            />
            <StatisticCard
              title="Star"
              description="Compared to previous month"
              value={745}
              icon={IconStarFilled}
              diff={18}
            />
            <StatisticCard
              title="Page Views"
              description="Compared to previous month"
              value={745}
              icon={IconEye}
              diff={-30}
            />
          </SimpleGrid>
          <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th style={{ width: "64px" }}>唯一编码</th>
                <th>标题</th>
                <th style={{ width: "124px" }}>分类</th>
                <th style={{ width: "64px" }}>用户</th>
                <th style={{ width: "94px" }}>是否已翻译</th>
                <th style={{ width: "64px" }}>状态</th>
                <th style={{ width: "64px" }}>原文</th>
                <th>创建时间</th>
                <th style={{ width: "104px" }}>操作</th>
              </tr>
            </thead>
            <tbody>{rows}</tbody>
          </Table>
        </Stack>
      </Card>
    </>
  );
}
