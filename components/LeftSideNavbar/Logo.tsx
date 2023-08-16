import { Flex, createStyles } from "@mantine/core";
import { IconBrandOpenai } from "@tabler/icons-react";
import { LeftSideNormalInterface } from "../Interfaces";

const useStyles = createStyles((theme) => ({
  box: {
    borderBottom:
      theme.colorScheme === "dark"
        ? `1px solid ${theme.colors.dark[5]}`
        : `1px solid ${theme.colors.gray[2]}`,
    position: "sticky",
    zIndex: 99,
  },
}));

export default function Logo({ collapse }: LeftSideNormalInterface) {
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.box}>
        <Flex align="center" justify="center" h={60}>
          <IconBrandOpenai size="1.4rem" />
        </Flex>
      </div>
    </>
  );
}
