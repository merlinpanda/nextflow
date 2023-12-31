"use client";

import { Box, Card, Stack } from "@mantine/core";
import AddCategory from "./components/AddCategory";
import CategoryTable from "./components/CategoryTable";

export default function Page() {
  return (
    <>
      <Card>
        <Stack>
          <Box>
            <AddCategory />
          </Box>
          <Box>
            <CategoryTable />
          </Box>
        </Stack>
      </Card>
    </>
  );
}
