"use client";

import { createStyles, Flex } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  preview: {
    display: "flex",
    flexGrow: 1,
    height: "100vh",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
    backgroundImage: `url("https://www.bing.com/th?id=OHR.BodieNC_ROW3179695505_1920x1080.webp&qlt=50")`,
  },
  box: {
    flex: "none",
    background: theme.white,
    width: "30%",
  },
  screen: {
    height: "100vh",
  },
}));

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { classes } = useStyles();

  return (
    <>
      <Flex direction="row">
        <div className={classes.preview}></div>
        <div className={classes.box}>
          <Flex className={classes.screen} align="center" justify="center">
            {children}
          </Flex>
        </div>
      </Flex>
    </>
  );
}
