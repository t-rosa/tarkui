import * as React from "react";
import {
  Menu as ArkMenu,
  MenuRootProvider,
  MenuRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";

export function Menu(props: MenuRootProviderProps) {
  return <MenuRootProvider {...props} />;
}

const Root = React.forwardRef<HTMLDivElement, ArkMenu.RootProps>((props) => (
  <ArkMenu.Root {...props} />
));

Root.displayName = "Root";

const Arrow = React.forwardRef<HTMLDivElement, ArkMenu.ArrowProps>(
  (props, ref) => (
    <ArkMenu.Arrow ref={ref} className={clsx(props.className)} {...props} />
  )
);

Arrow.displayName = "Arrow";

const ArrowTip = React.forwardRef<HTMLDivElement, ArkMenu.ArrowTipProps>(
  (props, ref) => (
    <ArkMenu.ArrowTip ref={ref} className={clsx(props.className)} {...props} />
  )
);

ArrowTip.displayName = "ArrowTip";

const CheckboxItem = React.forwardRef<
  HTMLDivElement,
  ArkMenu.CheckboxItemProps
>((props, ref) => (
  <ArkMenu.CheckboxItem
    ref={ref}
    className={clsx(props.className)}
    {...props}
  />
));

CheckboxItem.displayName = "CheckboxItem";

const Content = React.forwardRef<HTMLDivElement, ArkMenu.ContentProps>(
  (props, ref) => (
    <ArkMenu.Content ref={ref} className={clsx(props.className)} {...props} />
  )
);

Content.displayName = "Content";

const ContextTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkMenu.ContextTriggerProps
>((props, ref) => (
  <ArkMenu.ContextTrigger
    ref={ref}
    className={clsx(props.className)}
    {...props}
  />
));

ContextTrigger.displayName = "ContextTrigger";

const Indicator = React.forwardRef<HTMLDivElement, ArkMenu.IndicatorProps>(
  (props, ref) => (
    <ArkMenu.Indicator ref={ref} className={clsx(props.className)} {...props} />
  )
);

Indicator.displayName = "Indicator";

const ItemGroupLabel = React.forwardRef<
  HTMLDivElement,
  ArkMenu.ItemGroupLabelProps
>((props, ref) => (
  <ArkMenu.ItemGroupLabel
    ref={ref}
    className={clsx(props.className)}
    {...props}
  />
));

ItemGroupLabel.displayName = "ItemGroupLabel";

const ItemGroup = React.forwardRef<HTMLDivElement, ArkMenu.ItemGroupProps>(
  (props, ref) => (
    <ArkMenu.ItemGroup ref={ref} className={clsx(props.className)} {...props} />
  )
);

ItemGroup.displayName = "ItemGroup";

const ItemIndicator = React.forwardRef<
  HTMLDivElement,
  ArkMenu.ItemIndicatorProps
>((props, ref) => (
  <ArkMenu.ItemIndicator
    ref={ref}
    className={clsx(props.className)}
    {...props}
  />
));

ItemIndicator.displayName = "ItemIndicator";

const Item = React.forwardRef<HTMLDivElement, ArkMenu.ItemProps>(
  (props, ref) => (
    <ArkMenu.Item ref={ref} className={clsx(props.className)} {...props} />
  )
);

Item.displayName = "Item";

const ItemText = React.forwardRef<HTMLDivElement, ArkMenu.ItemTextProps>(
  (props, ref) => (
    <ArkMenu.ItemText ref={ref} className={clsx(props.className)} {...props} />
  )
);

ItemText.displayName = "ItemText";

const Positioner = React.forwardRef<HTMLDivElement, ArkMenu.PositionerProps>(
  (props, ref) => (
    <ArkMenu.Positioner
      ref={ref}
      className={clsx(props.className)}
      {...props}
    />
  )
);

Positioner.displayName = "Positioner";

const RadioItemGroup = React.forwardRef<
  HTMLDivElement,
  ArkMenu.RadioItemGroupProps
>((props, ref) => (
  <ArkMenu.RadioItemGroup
    ref={ref}
    className={clsx(props.className)}
    {...props}
  />
));

RadioItemGroup.displayName = "RadioItemGroup";

const RadioItem = React.forwardRef<HTMLDivElement, ArkMenu.RadioItemProps>(
  (props, ref) => (
    <ArkMenu.RadioItem ref={ref} className={clsx(props.className)} {...props} />
  )
);

RadioItem.displayName = "RadioItem";

const Separator = React.forwardRef<HTMLHRElement, ArkMenu.SeparatorProps>(
  (props, ref) => (
    <ArkMenu.Separator ref={ref} className={clsx(props.className)} {...props} />
  )
);

Separator.displayName = "Separator";

const TriggerItem = React.forwardRef<HTMLDivElement, ArkMenu.TriggerItemProps>(
  (props, ref) => (
    <ArkMenu.TriggerItem
      ref={ref}
      className={clsx(props.className)}
      {...props}
    />
  )
);

TriggerItem.displayName = "TriggerItem";

const Trigger = React.forwardRef<HTMLButtonElement, ArkMenu.TriggerProps>(
  (props, ref) => (
    <ArkMenu.Trigger ref={ref} className={clsx(props.className)} {...props} />
  )
);

Trigger.displayName = "Trigger";

Menu.Root = Root;
Menu.Arrow = Arrow;
Menu.ArrowTip = ArrowTip;
Menu.CheckboxItem = CheckboxItem;
Menu.Content = Content;
Menu.ContextTrigger = ContextTrigger;
Menu.Indicator = Indicator;
Menu.ItemGroupLabel = ItemGroupLabel;
Menu.ItemGroup = ItemGroup;
Menu.ItemIndicator = ItemIndicator;
Menu.Item = Item;
Menu.ItemText = ItemText;
Menu.Positioner = Positioner;
Menu.RadioItemGroup = RadioItemGroup;
Menu.RadioItem = RadioItem;
Menu.Separator = Separator;
Menu.TriggerItem = TriggerItem;
Menu.Trigger = Trigger;
