import { Portal } from "@ark-ui/react";
import { Combobox } from "./combobox";
import { ChevronsUpDownIcon } from "lucide-react";

export function ComboboxExample() {
  const items = [{ a: "a", b: 1 }];

  return (
    <Combobox.Root
      items={items}
      lazyMount
      unmountOnExit
      itemToString={(item) => item.a}
      itemToValue={(item) => item.a}
    >
      <Combobox.Label>Framework</Combobox.Label>
      <Combobox.Control>
        <Combobox.Input />
        <Combobox.Trigger>
          <ChevronsUpDownIcon />
        </Combobox.Trigger>
        <Combobox.ClearTrigger>Clear</Combobox.ClearTrigger>
      </Combobox.Control>
      <Portal>
        <Combobox.Positioner>
          <Combobox.Content>
            <Combobox.ItemGroup>
              <Combobox.ItemGroupLabel>Frameworks</Combobox.ItemGroupLabel>
              {items.map((item) => (
                <Combobox.Item key={item.a} item={item}>
                  <Combobox.ItemText>{item.b}</Combobox.ItemText>
                  <Combobox.ItemIndicator>✓</Combobox.ItemIndicator>
                </Combobox.Item>
              ))}
            </Combobox.ItemGroup>
          </Combobox.Content>
        </Combobox.Positioner>
      </Portal>
    </Combobox.Root>
  );
}
