import { ActionIcon, HoverCard, Stack } from "@mantine/core";
import { IconMailFilled } from "@tabler/icons-react";
import MessageCard, { MessageCardProps } from "./MessageCard";

const mockdata: MessageCardProps[] = [
  {
    code: "xxxx1",
    type: "TIKTOK",
    app: "慧心小和尚",
    time: "10分钟以前",
    intro: "今日新增粉丝数量: 1202人，收获点赞数量: 12k，收获收藏：10k",
  },
  {
    code: "xxxx2",
    type: "WECHAT",
    app: "慧心小和尚",
    time: "10分钟以前",
    intro: "今日新增粉丝数量: 1202人，收获点赞数量: 12k，收获收藏：10k",
  },
];

export default function MailHoverAction() {
  return (
    <>
      <HoverCard
        width={300}
        position="bottom"
        withArrow
        withinPortal
        shadow="sm"
      >
        <HoverCard.Target>
          <ActionIcon
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[6]
                  : theme.colors.gray[0],
              color:
                theme.colorScheme === "dark"
                  ? theme.colors.gray[0]
                  : theme.colors.dark[3],
            })}
          >
            <IconMailFilled size="1.2rem" />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <div>
            <Stack spacing="xs">
              {mockdata &&
                mockdata.map((message) => {
                  return <MessageCard {...message} key={message.code} />;
                })}
            </Stack>
          </div>
        </HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}
