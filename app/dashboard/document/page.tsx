"use client";

import { Box, Card, Group, Select, Stack } from "@mantine/core";
import AddDocument from "./components/AddDocument";
import DocumentTable from "./components/DocumentTable";
import useSWR from "swr";
import { fetcher } from "@/lib/useRequest";
import { useEffect, useState } from "react";

export default function Page() {
  const { data, error, isLoading } = useSWR("/apis/languages", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    if (data) {
      const langs = data.data.map((lan: any) => {
        return {
          label: lan.name_zh,
          value: lan.id,
        };
      });

      setLanguages(langs);
    }
  }, [data]);

  return (
    <>
      <Card>
        <Stack>
          <Box>
            <Group>
              <AddDocument />
              <Select
                size="xs"
                searchable
                placeholder="Language"
                data={languages}
              />
            </Group>
          </Box>
          <Box>
            <DocumentTable />
          </Box>
        </Stack>
      </Card>
    </>
  );
}
