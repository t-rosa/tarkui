import { Menu } from "./menu";

export function MenuExample() {
  return (
    <Menu.Root>
      <Menu.Trigger>
        Open menu <Menu.Indicator>➡️</Menu.Indicator>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          <Menu.Item value="react">React</Menu.Item>
          <Menu.Item value="solid">Solid</Menu.Item>
          <Menu.Item value="vue">Vue</Menu.Item>
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
}
