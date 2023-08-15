"use client";

import { Box, Button, Card, Stack, Table } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import AddCategory from "./components/AddCategory";

export default function Page() {
  return (
    <>
      <Card>
        <Stack>
          <Box>
            <AddCategory />
          </Box>
          <Table striped highlightOnHover withBorder withColumnBorders>
            <thead>
              <tr>
                <th style={{ width: "64px" }}>ID</th>
                <th style={{ width: "64px" }}>唯一名称</th>
                <th style={{ width: "124px" }}>分类</th>
                <th style={{ width: "104px" }}>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>  
            </tbody>
          </Table>
        </Stack>
      </Card>
    </>
  );
}
