import { Avatar, Box, HoverCard, ThemeIcon } from "@mantine/core";
import { Props } from ".";
import { IconTag } from "@tabler/icons-react";
import UploadThumb from "../Upload/UploadThumb";

interface CategoryIconProps extends Props {
  canUploadThumb?: boolean;
  showHoverCard?: boolean;
}

const CategoryAction = ({ category, size, radius }: CategoryIconProps) => {
  return (
    <>
      {category && category?.thumb ? (
        <Avatar size={size} radius={radius} src={category.thumb}></Avatar>
      ) : (
        <ThemeIcon radius={radius} size={size} variant="filled" color="gray">
          <IconTag size="1rem" stroke={1.5} />
        </ThemeIcon>
      )}
    </>
  );
};

export default function CategoryIcon({
  category,
  size,
  radius,
  canUploadThumb,
  showHoverCard,
}: CategoryIconProps) {
  return (
    <>
      <HoverCard disabled={!showHoverCard}>
        <HoverCard.Target>
          <Box>
            {canUploadThumb ? (
              <UploadThumb title="上传封面">
                <CategoryAction
                  category={category}
                  size={size}
                  radius={radius}
                />
              </UploadThumb>
            ) : (
              <CategoryAction category={category} size={size} radius={radius} />
            )}
          </Box>
        </HoverCard.Target>
        <HoverCard.Dropdown>a</HoverCard.Dropdown>
      </HoverCard>
    </>
  );
}
