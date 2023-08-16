import { Group, Paper, Text, createStyles, rem } from "@mantine/core";
import { IconArrowDownRight, IconArrowUp } from "@tabler/icons-react";
import React from "react";

const useStyles = createStyles((theme) => ({
  root: {
    padding: `calc(${theme.spacing.xl} * 1.5)`,
  },

  value: {
    fontSize: rem(24),
    fontWeight: 700,
    lineHeight: 1,
  },

  diff: {
    lineHeight: 1,
    display: "flex",
    alignItems: "center",
  },

  icon: {
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[3]
        : theme.colors.gray[4],
  },

  title: {
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export default function StatisticCard({
  title,
  description,
  value,
  icon: Icon,
  diff,
}: {
  title: string;
  description: string;
  value: number;
  icon: React.FC<any>;
  diff: number;
}) {
  const { classes } = useStyles();
  const DiffIcon = diff > 0 ? IconArrowUp : IconArrowDownRight;
  return (
    <>
      <Paper withBorder p="md" radius="md" key={title}>
        <Group position="apart">
          <Text size="xs" color="dimmed" className={classes.title}>
            {title}
          </Text>
          <Icon className={classes.icon} size="1.4rem" stroke={1.5} />
        </Group>

        <Group align="flex-end" spacing="xs" mt={25}>
          <Text className={classes.value}>{value}</Text>
          <Text
            color={diff > 0 ? "teal" : "red"}
            fz="sm"
            fw={500}
            className={classes.diff}
          >
            <span>{diff}%</span>
            <DiffIcon size="1rem" stroke={1.5} />
          </Text>
        </Group>

        <Text fz="xs" c="dimmed" mt={7}>
          {description}
        </Text>
      </Paper>
    </>
  );
}
