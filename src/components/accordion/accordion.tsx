import * as React from "react";
import { Accordion as ArkAccordion } from "@ark-ui/react";
import clsx from "clsx";

export function Accordion(props: React.PropsWithChildren) {
  return props.children;
}

const Root = React.forwardRef<HTMLDivElement, ArkAccordion.RootProps>(
  (props, ref) => (
    <ArkAccordion.Root
      ref={ref}
      className={clsx([props.className])}
      {...props}
    />
  )
);

Root.displayName = "Root";

const Item = React.forwardRef<HTMLDivElement, ArkAccordion.ItemProps>(
  (props, ref) => (
    <ArkAccordion.Item
      ref={ref}
      className={clsx(["border-b grid", props.className])}
      {...props}
    />
  )
);

Item.displayName = "Item";

const ItemContent = React.forwardRef<
  HTMLDivElement,
  ArkAccordion.ItemContentProps
>((props, ref) => (
  <ArkAccordion.ItemContent
    ref={ref}
    className={clsx([
      "overflow-hidden text-sm",
      "data-[state=open]:animate-accordion-down",
      "data-[state=closed]:animate-accordion-up",
      props.className,
    ])}
    {...props}
  />
));

ItemContent.displayName = "ItemContent";

const ItemTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkAccordion.ItemTriggerProps
>((props, ref) => (
  <ArkAccordion.ItemTrigger
    ref={ref}
    className={clsx([
      "flex items-center hover:underline justify-between py-4 text-sm font-medium",
      props.className,
    ])}
    {...props}
  />
));

ItemTrigger.displayName = "ItemTrigger";

const ItemIndicator = React.forwardRef<
  HTMLDivElement,
  ArkAccordion.ItemIndicatorProps
>((props, ref) => (
  <ArkAccordion.ItemIndicator
    ref={ref}
    className={clsx([
      "duration-200 text-muted-foreground",
      "data-[state=open]:rotate-180",
      "[&>svg]:size-4",
      props.className,
    ])}
    {...props}
  />
));

ItemIndicator.displayName = "ItemIndicator";

Accordion.Root = Root;
Accordion.Item = Item;
Accordion.ItemTrigger = ItemTrigger;
Accordion.ItemContent = ItemContent;
Accordion.ItemIndicator = ItemIndicator;
