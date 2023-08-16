import { CategoryItem } from "@/components/Interfaces";
import { Table, LoadingOverlay } from "@mantine/core";
import useSWR from "swr";
import { fetcher } from "@/lib/useRequest";

export default function CategoryTable() {
  const { data, error, isLoading } = useSWR("/apis/categories", fetcher, {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  return (
    <>
      <LoadingOverlay visible={isLoading} overlayBlur={2} />
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th style={{ width: "64px" }}>ID</th>
            <th style={{ width: "64px" }}>CODE</th>
            <th>名称</th>
            <th style={{ width: "124px" }}>类型</th>
            <th style={{ width: "224px" }}>创建时间</th>
            <th style={{ width: "104px" }}>操作</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.data.map((item: CategoryItem, index: number) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.code}</td>
                  <td>{item.title}</td>
                  <td>{item.type_text}</td>
                  <td>{item.created_at}</td>
                  <td></td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
}
