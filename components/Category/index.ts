import { MantineNumberSize, MantineSize } from "@mantine/core";
import { CategoryItem } from "../Interfaces";

export interface Props {
  category?: CategoryItem;
  size?: MantineSize;
  radius?: MantineNumberSize;
}
