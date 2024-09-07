import {
  ColorPicker as ArkColorPicker,
  ColorPickerRootProvider,
  ColorPickerRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";
import * as React from "react";

export function ColorPicker(props: ColorPickerRootProviderProps) {
  return <ColorPickerRootProvider {...props} />;
}

const Root = React.forwardRef<HTMLDivElement, ArkColorPicker.RootProps>(
  (props, ref) => (
    <ArkColorPicker.Root
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Root.displayName = "Root";

const Trigger = React.forwardRef<
  HTMLButtonElement,
  ArkColorPicker.TriggerProps
>((props, ref) => (
  <ArkColorPicker.Trigger
    ref={ref}
    className={clsx([
      "grid overflow-hidden place-items-center size-8 border rounded-sm",
      props.className,
    ])}
    {...props}
  />
));

Trigger.displayName = "Trigger";

const ChannelInput = React.forwardRef<
  HTMLInputElement,
  ArkColorPicker.ChannelInputProps
>((props, ref) => (
  <ArkColorPicker.ChannelInput
    ref={ref}
    className={clsx(["border px-3 rounded-md max-w-24", props.className])}
    {...props}
  />
));

ChannelInput.displayName = "ChannelInput";

const AreaBackground = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.AreaBackgroundProps
>((props, ref) => (
  <ArkColorPicker.AreaBackground
    ref={ref}
    className={clsx(["size-full", props.className])}
    {...props}
  />
));

AreaBackground.displayName = "AreaBackground";

const Area = React.forwardRef<HTMLDivElement, ArkColorPicker.AreaProps>(
  (props, ref) => (
    <ArkColorPicker.Area
      ref={ref}
      className={clsx([
        "w-full h-44 rounded-md overflow-hidden border",
        props.className,
      ])}
      {...props}
    />
  )
);

Area.displayName = "Area";

const AreaThumb = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.AreaThumbProps
>((props, ref) => (
  <ArkColorPicker.AreaThumb
    ref={ref}
    className={clsx([
      "size-3 rounded-full border-2 border-background",
      props.className,
    ])}
    {...props}
  />
));

AreaThumb.displayName = "AreaThumb";

const ChannelSliderLabel = React.forwardRef<
  HTMLLabelElement,
  ArkColorPicker.ChannelSliderLabelProps
>((props, ref) => (
  <ArkColorPicker.ChannelSliderLabel
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

ChannelSliderLabel.displayName = "ChannelSliderLabel";

const ChannelSlider = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.ChannelSliderProps
>((props, ref) => (
  <ArkColorPicker.ChannelSlider
    ref={ref}
    className={clsx(["min-h-4 border rounded-md", props.className])}
    {...props}
  />
));

ChannelSlider.displayName = "ChannelSlider";

const ChannelSliderThumb = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.ChannelSliderThumbProps
>((props, ref) => (
  <ArkColorPicker.ChannelSliderThumb
    ref={ref}
    className={clsx([
      "rounded-full size-6 -translate-x-1/2 -translate-y-1/2 border-2 border-background outline-none",
      props.className,
    ])}
    {...props}
  />
));

ChannelSliderThumb.displayName = "ChannelSliderThumb";

const ChannelSliderTrack = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.ChannelSliderTrackProps
>((props, ref) => (
  <ArkColorPicker.ChannelSliderTrack
    ref={ref}
    className={clsx(["size-full rounded-md", props.className])}
    {...props}
  />
));

ChannelSliderTrack.displayName = "ChannelSliderTrack";

const ChannelSliderValueText = React.forwardRef<
  HTMLSpanElement,
  ArkColorPicker.ChannelSliderValueTextProps
>((props, ref) => (
  <ArkColorPicker.ChannelSliderValueText
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

ChannelSliderValueText.displayName = "ChannelSliderValueText";

const Content = React.forwardRef<HTMLDivElement, ArkColorPicker.ContentProps>(
  (props, ref) => (
    <ArkColorPicker.Content
      ref={ref}
      className={clsx([
        "border rounded-sm p-4 bg-background space-y-3",
        props.className,
      ])}
      {...props}
    />
  )
);

Content.displayName = "Content";

const Control = React.forwardRef<HTMLDivElement, ArkColorPicker.ControlProps>(
  (props, ref) => (
    <ArkColorPicker.Control
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

Control.displayName = "Control";

const EyeDropperTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkColorPicker.EyeDropperTriggerProps
>((props, ref) => (
  <ArkColorPicker.EyeDropperTrigger
    ref={ref}
    className={clsx([
      "border p-2 rounded-md",
      "hover:bg-muted",
      props.className,
    ])}
    {...props}
  />
));

EyeDropperTrigger.displayName = "EyeDropperTrigger";

const FormatSelect = React.forwardRef<
  HTMLSelectElement,
  ArkColorPicker.FormatSelectProps
>((props, ref) => (
  <ArkColorPicker.FormatSelect
    ref={ref}
    className={clsx([
      "w-full border py-2 px-1 rounded-md cursor-pointer outline-none",
      props.className,
    ])}
    {...props}
  />
));

FormatSelect.displayName = "FormatSelect";

const FormatTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkColorPicker.FormatTriggerProps
>((props, ref) => (
  <ArkColorPicker.FormatTrigger
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

FormatTrigger.displayName = "FormatTrigger";

const Label = React.forwardRef<HTMLLabelElement, ArkColorPicker.LabelProps>(
  (props, ref) => (
    <ArkColorPicker.Label
      ref={ref}
      className={clsx(["font-medium text-sm", props.className])}
      {...props}
    />
  )
);

Label.displayName = "Label";

const Positioner = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.PositionerProps
>((props, ref) => (
  <ArkColorPicker.Positioner
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

Positioner.displayName = "Positioner";

const SwatchGroup = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.SwatchGroupProps
>((props, ref) => (
  <ArkColorPicker.SwatchGroup
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

SwatchGroup.displayName = "SwatchGroup";

const SwatchIndicator = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.SwatchIndicatorProps
>((props, ref) => (
  <ArkColorPicker.SwatchIndicator
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

SwatchIndicator.displayName = "SwatchIndicator";

const Swatch = React.forwardRef<HTMLDivElement, ArkColorPicker.SwatchProps>(
  (props, ref) => (
    <ArkColorPicker.Swatch
      ref={ref}
      className={clsx(["size-full rounded-md", props.className])}
      {...props}
    />
  )
);

Swatch.displayName = "Swatch";

const SwatchTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkColorPicker.SwatchTriggerProps
>((props, ref) => (
  <ArkColorPicker.SwatchTrigger
    ref={ref}
    className={clsx(["size-7 border roundmd", props.className])}
    {...props}
  />
));

SwatchTrigger.displayName = "SwatchTrigger";

const TransparencyGrid = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.TransparencyGridProps
>((props, ref) => (
  <ArkColorPicker.TransparencyGrid
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

TransparencyGrid.displayName = "TransparencyGrid";

const ValueSwatch = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.ValueSwatchProps
>((props, ref) => (
  <ArkColorPicker.ValueSwatch
    ref={ref}
    className={clsx(["size-6 rounded-sm", props.className])}
    {...props}
  />
));

ValueSwatch.displayName = "ValueSwatch";

const View = React.forwardRef<HTMLDivElement, ArkColorPicker.ViewProps>(
  (props, ref) => (
    <ArkColorPicker.View
      ref={ref}
      className={clsx(["", props.className])}
      {...props}
    />
  )
);

View.displayName = "View";

const ValueText = React.forwardRef<
  HTMLDivElement,
  ArkColorPicker.ValueTextProps
>((props, ref) => (
  <ArkColorPicker.ValueText
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

ValueText.displayName = "ValueText";

const HiddenInput = React.forwardRef<
  HTMLInputElement,
  ArkColorPicker.HiddenInputProps
>((props, ref) => (
  <ArkColorPicker.HiddenInput
    ref={ref}
    className={clsx(["", props.className])}
    {...props}
  />
));

HiddenInput.displayName = "HiddenInput";

ColorPicker.Root = Root;
ColorPicker.Content = Content;
ColorPicker.Control = Control;
ColorPicker.EyeDropperTrigger = EyeDropperTrigger;
ColorPicker.FormatSelect = FormatSelect;
ColorPicker.FormatTrigger = FormatTrigger;
ColorPicker.Label = Label;
ColorPicker.Positioner = Positioner;
ColorPicker.SwatchGroup = SwatchGroup;
ColorPicker.SwatchIndicator = SwatchIndicator;
ColorPicker.Swatch = Swatch;
ColorPicker.SwatchTrigger = SwatchTrigger;
ColorPicker.TransparencyGrid = TransparencyGrid;
ColorPicker.ValueSwatch = ValueSwatch;
ColorPicker.ValueText = ValueText;
ColorPicker.View = View;
ColorPicker.AreaBackground = AreaBackground;
ColorPicker.Area = Area;
ColorPicker.AreaThumb = AreaThumb;
ColorPicker.ChannelSliderLabel = ChannelSliderLabel;
ColorPicker.ChannelSliderThumb = ChannelSliderThumb;
ColorPicker.ChannelSliderTrack = ChannelSliderTrack;
ColorPicker.ChannelSliderValueText = ChannelSliderValueText;
ColorPicker.Trigger = Trigger;
ColorPicker.ChannelInput = ChannelInput;
ColorPicker.ChannelSlider = ChannelSlider;
ColorPicker.HiddenInput = HiddenInput;
