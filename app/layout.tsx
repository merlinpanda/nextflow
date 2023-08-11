"use client";

import { MantineProvider } from "@mantine/core";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          withCSSVariables
          theme={{
            primaryColor: "blue",
            colorScheme: "dark"
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
