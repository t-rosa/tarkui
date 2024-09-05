import {
  Combobox as ArkCombobox,
  ComboboxCollectionItem,
  ComboboxRootProvider,
  ComboboxRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";
import * as React from "react";

export function Combobox(
  props: ComboboxRootProviderProps<ComboboxCollectionItem>
) {
  return <ComboboxRootProvider {...props} />;
}

const RootInner = <T extends ComboboxCollectionItem>(
  props: ArkCombobox.RootProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) => (
  <ArkCombobox.Root
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
);

const Root = React.forwardRef(RootInner) as <T extends ComboboxCollectionItem>(
  props: ArkCombobox.RootProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
  }
) => ReturnType<typeof RootInner>;

const ClearTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkCombobox.ClearTriggerProps
>((props, ref) => (
  <ArkCombobox.ClearTrigger
    ref={ref}
    className={clsx([
      "text-muted-foreground border h-9 rounded-md px-3",
      "hover:bg-muted",
      "[&>svg]:size-4",
      props.className,
    ])}
    {...props}
  />
));

ClearTrigger.displayName = "ClearTrigger";

const Content = React.forwardRef<HTMLDivElement, ArkCombobox.ContentProps>(
  (props, ref) => (
    <ArkCombobox.Content
      ref={ref}
      className={clsx(["text-sm border rounded-md p-1", props.className])}
      {...props}
    />
  )
);

Content.displayName = "Content";

const Control = React.forwardRef<HTMLDivElement, ArkCombobox.ControlProps>(
  (props, ref) => (
    <ArkCombobox.Control
      ref={ref}
      className={clsx(["flex items-center gap-1", props.className])}
      {...props}
    />
  )
);

Control.displayName = "Control";

const Input = React.forwardRef<HTMLInputElement, ArkCombobox.InputProps>(
  (props, ref) => (
    <ArkCombobox.Input
      ref={ref}
      className={clsx(["h-9 px-3 border rounded-md", props.className])}
      {...props}
    />
  )
);

Input.displayName = "Input";

const ItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  ArkCombobox.ItemGroupLabelProps
>((props, ref) => (
  <ArkCombobox.ItemGroupLabel
    ref={ref}
    className={clsx(["border-b p-3 mb-1 font-medium", props.className])}
    {...props}
  />
));

ItemGroupLabel.displayName = "ItemGroupLabel";

const ItemGroup = React.forwardRef<HTMLDivElement, ArkCombobox.ItemGroupProps>(
  (props, ref) => (
    <ArkCombobox.ItemGroup
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

ItemGroup.displayName = "ItemGroup";

const ItemIndicator = React.forwardRef<
  HTMLDivElement,
  ArkCombobox.ItemIndicatorProps
>((props, ref) => (
  <ArkCombobox.ItemIndicator
    ref={ref}
    className={clsx(["[&>svg]:size-4", props.className])}
    {...props}
  />
));

ItemIndicator.displayName = "ItemIndicator";

const Item = React.forwardRef<HTMLDivElement, ArkCombobox.ItemProps>(
  (props, ref) => (
    <ArkCombobox.Item
      ref={ref}
      className={clsx([
        "h-9 flex justify-between items-center rounded-md p-2",
        "hover:bg-muted",
        props.className,
      ])}
      {...props}
    />
  )
);

Item.displayName = "Item";

const ItemText = React.forwardRef<HTMLDivElement, ArkCombobox.ItemTextProps>(
  (props, ref) => (
    <ArkCombobox.ItemText
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

ItemText.displayName = "ItemText";

const Label = React.forwardRef<HTMLLabelElement, ArkCombobox.LabelProps>(
  (props, ref) => (
    <ArkCombobox.Label
      ref={ref}
      className={clsx(["font-medium text-sm", props.className])}
      {...props}
    />
  )
);

Label.displayName = "Label";

const List = React.forwardRef<HTMLDivElement, ArkCombobox.ListProps>(
  (props, ref) => (
    <ArkCombobox.List
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

List.displayName = "List";

const Trigger = React.forwardRef<HTMLButtonElement, ArkCombobox.TriggerProps>(
  (props, ref) => (
    <ArkCombobox.Trigger
      ref={ref}
      className={clsx([
        "text-muted-foreground h-9 px-3 -ml-11",
        "[&>svg]:size-4",
        props.className,
      ])}
      {...props}
    />
  )
);

Trigger.displayName = "Trigger";

const Positioner = React.forwardRef<
  HTMLDivElement,
  ArkCombobox.PositionerProps
>((props, ref) => (
  <ArkCombobox.Positioner
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

Positioner.displayName = "Positioner";

Combobox.Root = Root;
Combobox.ClearTrigger = ClearTrigger;
Combobox.Content = Content;
Combobox.Control = Control;
Combobox.Input = Input;
Combobox.ItemGroupLabel = ItemGroupLabel;
Combobox.ItemGroup = ItemGroup;
Combobox.ItemIndicator = ItemIndicator;
Combobox.Item = Item;
Combobox.ItemText = ItemText;
Combobox.Label = Label;
Combobox.List = List;
Combobox.Positioner = Positioner;
Combobox.Trigger = Trigger;
