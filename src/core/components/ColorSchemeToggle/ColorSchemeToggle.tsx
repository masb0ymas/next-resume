import {
  ActionIcon,
  Group,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";
import { CSSProperties } from "react";

interface ColorSchemeToggleProps {
  styleGroup: CSSProperties;
}

export function ColorSchemeToggle({
  styleGroup,
}: Partial<ColorSchemeToggleProps>) {
  const theme = useMantineTheme();
  const { colorScheme, setColorScheme } = useMantineColorScheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(24), height: rem(24) }}
      stroke={1.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(24), height: rem(24) }}
      stroke={1.5}
      color={theme.colors.blue[6]}
    />
  );

  return (
    <Group justify="center" mt="xl" style={styleGroup}>
      <ActionIcon
        onClick={() => {
          let changeTheme = colorScheme;

          if (colorScheme === "dark") {
            changeTheme = "light";
          } else {
            changeTheme = "dark";
          }

          setColorScheme(changeTheme);
        }}
        radius="lg"
        size={48}
        variant="light"
      >
        {colorScheme === "dark" ? sunIcon : moonIcon}
      </ActionIcon>
    </Group>
  );
}
