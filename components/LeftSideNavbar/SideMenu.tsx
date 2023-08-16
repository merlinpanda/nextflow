import {
  NavLink,
  createStyles,
  Tooltip,
  rem,
  UnstyledButton,
  HoverCard,
  Title,
  Box,
  Stack,
} from "@mantine/core";
import {
  IconDashboard,
  IconDeviceDesktopAnalytics,
  IconCalendarStats,
  IconUser,
  IconFingerprint,
  IconSettings,
} from "@tabler/icons-react";
import { LeftSideNormalInterface } from "../Interfaces";
import Link from "next/link";

interface NavbarLinkBaseProps {
  label: string;
  active?: boolean;
  href?: string;
  onClick?(): void;
}

interface NavbarLinkProps extends NavbarLinkBaseProps {
  icon: React.FC<any>;
  children?: NavbarLinkBaseProps[];
}

const mockdata: NavbarLinkProps[] = [
  {
    icon: IconDashboard,
    label: "Dashboard",
    href: "",
  },
  {
    icon: IconDeviceDesktopAnalytics,
    label: "Analytics",
    children: [
      {
        label: "Data Analysis",
        href: "",
      },
      {
        label: "Multi-D Analysis",
        href: "",
      },
    ],
  },
  {
    icon: IconCalendarStats,
    label: "Releases",
  },
  {
    icon: IconUser,
    label: "Account",
  },
  {
    icon: IconFingerprint,
    label: "Security",
  },
  {
    icon: IconSettings,
    label: "Settings",
  },
];

const useStyles = createStyles((theme) => ({
  iconlink: {
    width: rem(40),
    height: rem(40),
    borderRadius: theme.radius.xl,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.colorScheme === "dark" ? theme.white : theme.colors.dark[6],
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      color: theme.white,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1,
      ),
    },
  },
  iconlink_active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.15,
      ),
    },
  },
  collapseMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function NavbarLink(props: NavbarLinkProps & LeftSideNormalInterface) {
  return (
    <>
      {props.collapse ? (
        <CollapsedNavbarLink {...props} />
      ) : (
        <NotCollapseNavbarLink {...props} />
      )}
    </>
  );
}

function CollapsedNavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  href,
  children,
}: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <>
      {href ? (
        <HoverCard shadow="sm" position="right" withArrow withinPortal>
          <HoverCard.Target>
            <UnstyledButton
              component={Link}
              href={href}
              className={cx(classes.iconlink, {
                [classes.iconlink_active]: active,
              })}
            >
              <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Stack spacing="xs">
              <Title order={6}>{label}</Title>
              {children && (
                <Box>
                  {children.map((item, index) => {
                    return <RenderChildrenNavs key={index} {...item} />;
                  })}
                </Box>
              )}
            </Stack>
          </HoverCard.Dropdown>
        </HoverCard>
      ) : (
        <HoverCard shadow="sm" position="right" withArrow withinPortal>
          <HoverCard.Target>
            <UnstyledButton
              onClick={onClick}
              className={cx(classes.iconlink, {
                [classes.iconlink_active]: active,
              })}
            >
              <Icon size="1.2rem" stroke={1.5} />
            </UnstyledButton>
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <Stack spacing="xs">
              <Title order={6}>{label}</Title>
              {children && (
                <Box>
                  {children.map((item, index) => {
                    return <RenderChildrenNavs key={index} {...item} />;
                  })}
                </Box>
              )}
            </Stack>
          </HoverCard.Dropdown>
        </HoverCard>
      )}
    </>
  );
}

function RenderChildrenNavs({
  label,
  href,
  onClick,
  active,
}: NavbarLinkBaseProps) {
  return (
    <>
      {href ? (
        <NavLink label={label} component={Link} href={href} />
      ) : (
        <NavLink label={label} onClick={onClick} />
      )}
    </>
  );
}

function NotCollapseNavbarLink({
  icon: Icon,
  label,
  active,
  onClick,
  href,
  children,
}: NavbarLinkProps) {
  return (
    <>
      {href ? (
        <NavLink
          label={label}
          component={Link}
          href={href}
          icon={<Icon size="1rem" stroke={1.5} />}
        >
          {children &&
            children.map((item, index) => {
              return <RenderChildrenNavs key={index} {...item} />;
            })}
        </NavLink>
      ) : (
        <NavLink
          label={label}
          onClick={onClick}
          icon={<Icon size="1rem" stroke={1.5} />}
        >
          {children &&
            children.map((item, index) => {
              return <RenderChildrenNavs key={index} {...item} />;
            })}
        </NavLink>
      )}
    </>
  );
}

export default function SideMenu({ collapse }: LeftSideNormalInterface) {
  const { classes, cx } = useStyles();

  return (
    <>
      <div className={cx({ [classes.collapseMenu]: collapse })}>
        {mockdata &&
          mockdata.map((item, index) => {
            return <NavbarLink {...item} collapse={collapse} key={index} />;
          })}
      </div>
    </>
  );
}
