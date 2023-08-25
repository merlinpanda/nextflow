import {
  Badge,
  MantineNumberSize,
  MantineSize,
  useMantineTheme,
} from "@mantine/core";
import { CategoryItem } from "../Interfaces";
import { Props } from ".";

export default function CategoryLabel(props: Props) {
  return (
    <>
      <Badge
        tt="revert"
        fw={500}
        size={props.size}
        radius={props.radius}
        color=""
      >
        {props.category?.title}
      </Badge>
    </>
  );
}
