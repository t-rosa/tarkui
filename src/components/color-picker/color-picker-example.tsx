import { ArrowUpDownIcon, CheckIcon, PipetteIcon } from "lucide-react";
import { ColorPicker } from "./color-picker";

export function ColorPickerExample() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41">
      <ColorPicker.Label className="font-medium text-sm">
        Color
      </ColorPicker.Label>
      <ColorPicker.Control>
        <ColorPicker.ChannelInput
          channel="hex"
          className="border h-9 px-3 rounded-md"
        />
        <ColorPicker.ChannelInput
          channel="alpha"
          className="border h-9 px-3 rounded-md w-fit"
        />
        {/* <ColorPicker.ValueText className="border h-9 px-3 rounded-md" /> */}
        <ColorPicker.Trigger className="grid overflow-hidden place-items-center size-8 border rounded-sm">
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ValueSwatch className="size-6 rounded-sm" />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content className="border rounded-sm p-4 bg-background space-y-3">
          <div className="flex gap-3">
            <ColorPicker.FormatTrigger className="border rounded-md hover:bg-muted p-3 ">
              <ArrowUpDownIcon className="size-4" />
            </ColorPicker.FormatTrigger>
            <ColorPicker.FormatSelect className="border rounded-md flex-1 cursor-pointer outline-none" />
          </div>
          <ColorPicker.Area className="w-full h-44 rounded-md overflow-hidden border">
            <ColorPicker.AreaBackground className="size-full" />
            <ColorPicker.AreaThumb className="size-3 rounded-full border-2 border-background" />
          </ColorPicker.Area>
          <div className="grid gap-3 grid-cols-[auto_1fr]">
            <ColorPicker.EyeDropperTrigger className="border row-[1/3] p-2 rounded-md hover:bg-muted">
              <PipetteIcon />
            </ColorPicker.EyeDropperTrigger>
            <ColorPicker.ChannelSlider
              channel="hue"
              className="h-4 border rounded-md"
            >
              <ColorPicker.ChannelSliderTrack className="size-full rounded-md" />
              <ColorPicker.ChannelSliderThumb className="rounded-full size-6 -translate-x-1/2 -translate-y-1/2 border-2 border-background outline-none" />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider
              channel="alpha"
              className="h-4 border rounded-md"
            >
              <ColorPicker.TransparencyGrid />
              <ColorPicker.ChannelSliderTrack className="size-full rounded-md" />
              <ColorPicker.ChannelSliderThumb className="rounded-full size-6 -translate-x-1/2 -translate-y-1/2 border-2 border-background outline-none" />
            </ColorPicker.ChannelSlider>
          </div>
          <ColorPicker.View
            format="rgba"
            className="grid grid-cols-2 gap-3 max-w-60"
          >
            <ColorPicker.ChannelInput
              channel="hex"
              className="border h-9 px-3 rounded-md"
            />
            <ColorPicker.ChannelInput
              channel="alpha"
              className="border h-9 px-3 rounded-md"
            />
          </ColorPicker.View>
          <ColorPicker.SwatchGroup className="grid grid-cols-[repeat(6,1fr)]">
            <ColorPicker.SwatchTrigger
              value="red"
              className="size-7 border rounded-md"
            >
              <ColorPicker.Swatch value="red" className="size-full rounded-md">
                <ColorPicker.SwatchIndicator>
                  <CheckIcon />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="blue" className="size-7 border">
              <ColorPicker.Swatch value="blue">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="green" className="size-7 border">
              <ColorPicker.Swatch value="green">
                <ColorPicker.SwatchIndicator>✓</ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
}
