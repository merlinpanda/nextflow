import { ActionIcon, HoverCard, Stack } from "@mantine/core";
import { IconBellRingingFilled } from '@tabler/icons-react';
import MessageCard, { MessageCardProps } from "./MessageCard";

const mockdata: MessageCardProps[] = [
  {
    code: "xxxx1",
    type: "TIKTOK",
    app: "慧心小和尚",
    time: "10分钟以前",
    intro: "今日新增粉丝数量: 1202人，收获点赞数量: 12k，收获收藏：10k"
  },
  {
    code: "xxxx2",
    type: "WECHAT",
    app: "慧心小和尚",
    time: "10分钟以前",
    intro: "今日新增粉丝数量: 1202人，收获点赞数量: 12k，收获收藏：10k"
  }
];

export default function NotificationCard () {
  return (
    <>
      <HoverCard width={300} position="bottom" withArrow withinPortal shadow="sm">
        <HoverCard.Target>
          <ActionIcon size="lg" variant="light" radius="xl">
            <IconBellRingingFilled size="1rem" />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <div>
            <Stack spacing="xs">
              { 
                mockdata && mockdata.map((message) => {
                  return (
                    <MessageCard {...message} key={message.code} />
                  )
                })
              }
            </Stack>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}