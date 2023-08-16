"use client";

import { Box, Card, Stack } from "@mantine/core";
import AddDocument from "./components/AddDocument";
import DocumentTable from "./components/DocumentTable";

export default function Page() {
  return (
    <>
      <Card>
        <Stack>
          <Box>
            <AddDocument />
          </Box>
          <Box>
            <DocumentTable />
          </Box>
        </Stack>
      </Card>
    </>
  );
}
