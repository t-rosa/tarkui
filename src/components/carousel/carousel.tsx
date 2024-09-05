import * as React from "react";
import {
  Carousel as ArkCarousel,
  CarouselRootProvider,
  CarouselRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";

export function Carousel(props: CarouselRootProviderProps) {
  return <CarouselRootProvider {...props} />;
}

const Root = React.forwardRef<HTMLDivElement, ArkCarousel.RootProps>(
  (props, ref) => (
    <ArkCarousel.Root
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Root.displayName = "Root";

const Control = React.forwardRef<HTMLDivElement, ArkCarousel.ControlProps>(
  (props, ref) => (
    <ArkCarousel.Control
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Control.displayName = "Control";

const IndicatorGroup = React.forwardRef<
  HTMLImageElement,
  ArkCarousel.IndicatorGroupProps
>((props, ref) => (
  <ArkCarousel.IndicatorGroup
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

IndicatorGroup.displayName = "IndicatorGroup";

const Indicator = React.forwardRef<
  HTMLButtonElement,
  ArkCarousel.IndicatorProps
>((props, ref) => (
  <ArkCarousel.Indicator
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

Indicator.displayName = "Indicator";

const ItemGroup = React.forwardRef<HTMLDivElement, ArkCarousel.ItemGroupProps>(
  (props, ref) => (
    <ArkCarousel.ItemGroup
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

ItemGroup.displayName = "ItemGroup";

const Item = React.forwardRef<HTMLDivElement, ArkCarousel.ItemProps>(
  (props, ref) => (
    <ArkCarousel.Item
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Item.displayName = "Item";

const NextTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkCarousel.NextTriggerProps
>((props, ref) => (
  <ArkCarousel.NextTrigger
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

NextTrigger.displayName = "NextTrigger";

const PrevTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkCarousel.NextTriggerProps
>((props, ref) => (
  <ArkCarousel.PrevTrigger
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

PrevTrigger.displayName = "PrevTrigger";

const Viewport = React.forwardRef<HTMLDivElement, ArkCarousel.ViewportProps>(
  (props, ref) => (
    <ArkCarousel.Viewport
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Viewport.displayName = "Viewport";

Carousel.Root = Root;
Carousel.Control = Control;
Carousel.PrevTrigger = PrevTrigger;
Carousel.NextTrigger = NextTrigger;
Carousel.IndicatorGroup = IndicatorGroup;
Carousel.Indicator = Indicator;
Carousel.Viewport = Viewport;
Carousel.ItemGroup = ItemGroup;
Carousel.Item = Item;
