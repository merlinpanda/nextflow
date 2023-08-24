"use client";

import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconX } from "@tabler/icons-react";
import { useState } from "react";
import { SWRConfig } from "swr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");

  const toggleScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <html lang="en">
      <body>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleScheme}
        >
          <SWRConfig
            value={{
              onError: (error, key) => {
                if (error.status != 404) {
                  notifications.show({
                    title: "Error",
                    message: error.message,
                    color: "red",
                    icon: <IconX size="1.1rem" />,
                  });
                }
              },
            }}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              withCSSVariables
              theme={{
                primaryColor: "blue",
                colorScheme: colorScheme,
              }}
            >
              {children}
            </MantineProvider>
          </SWRConfig>
        </ColorSchemeProvider>
      </body>
    </html>
  );
}
