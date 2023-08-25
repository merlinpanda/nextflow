"use client";

import { Box, Card, Group, Select, Stack } from "@mantine/core";
import AddDocument from "./components/AddDocument";
import DocumentGroupTable from "./components/DocumentGroupTable";

export default function Page() {
  return (
    <>
      <Card>
        <Stack>
          <Box>
            <Group>
              <AddDocument />
            </Group>
          </Box>
          <Box>
            <DocumentGroupTable />
          </Box>
        </Stack>
      </Card>
    </>
  );
}
