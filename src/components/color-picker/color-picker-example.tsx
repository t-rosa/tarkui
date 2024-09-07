import { CheckIcon, PipetteIcon } from "lucide-react";
import { ColorPicker } from "./color-picker";

export function ColorPickerExample() {
  return (
    <ColorPicker.Root defaultValue="#eb5e41">
      <ColorPicker.Label>Color</ColorPicker.Label>
      <ColorPicker.Control className="flex gap-3">
        <ColorPicker.ChannelInput channel="hex" />
        <ColorPicker.Trigger>
          <ColorPicker.TransparencyGrid />
          <ColorPicker.ValueSwatch />
        </ColorPicker.Trigger>
      </ColorPicker.Control>
      <ColorPicker.Positioner>
        <ColorPicker.Content>
          <ColorPicker.FormatSelect />
          <ColorPicker.Area>
            <ColorPicker.AreaBackground />
            <ColorPicker.AreaThumb />
          </ColorPicker.Area>
          <div className="grid gap-3 grid-cols-[auto_1fr]">
            <ColorPicker.EyeDropperTrigger className="row-[1/3]">
              <PipetteIcon />
            </ColorPicker.EyeDropperTrigger>
            <ColorPicker.ChannelSlider channel="hue">
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
            <ColorPicker.ChannelSlider channel="alpha">
              <ColorPicker.TransparencyGrid />
              <ColorPicker.ChannelSliderTrack />
              <ColorPicker.ChannelSliderThumb />
            </ColorPicker.ChannelSlider>
          </div>
          <ColorPicker.View
            format="rgba"
            className="grid grid-cols-2 gap-3 max-w-60"
          >
            <ColorPicker.ChannelInput channel="hex" />
            <ColorPicker.ChannelInput channel="alpha" />
          </ColorPicker.View>
          <ColorPicker.View
            format="hsla"
            className="grid grid-cols-2 gap-3 max-w-60"
          >
            <ColorPicker.ChannelInput channel="hue" />
            <ColorPicker.ChannelInput channel="saturation" />
            <ColorPicker.ChannelInput channel="lightness" />
            <ColorPicker.ChannelInput channel="alpha" />
          </ColorPicker.View>
          <ColorPicker.View
            format="hsba"
            className="grid grid-cols-2 gap-3 max-w-60"
          >
            <ColorPicker.ChannelInput channel="hue" />
            <ColorPicker.ChannelInput channel="saturation" />
            <ColorPicker.ChannelInput channel="brightness" />
            <ColorPicker.ChannelInput channel="alpha" />
          </ColorPicker.View>
          <ColorPicker.SwatchGroup className="grid grid-cols-[repeat(6,1fr)]">
            <ColorPicker.SwatchTrigger
              value="red"
              className="size-7 border rounded-md"
            >
              <ColorPicker.Swatch value="red">
                <ColorPicker.SwatchIndicator>
                  <CheckIcon className="size-full p-1" />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="blue">
              <ColorPicker.Swatch value="blue">
                <ColorPicker.SwatchIndicator>
                  <CheckIcon className="size-full p-1" />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
            <ColorPicker.SwatchTrigger value="green">
              <ColorPicker.Swatch value="green">
                <ColorPicker.SwatchIndicator>
                  <CheckIcon className="size-full p-1" />
                </ColorPicker.SwatchIndicator>
              </ColorPicker.Swatch>
            </ColorPicker.SwatchTrigger>
          </ColorPicker.SwatchGroup>
        </ColorPicker.Content>
      </ColorPicker.Positioner>
      <ColorPicker.HiddenInput />
    </ColorPicker.Root>
  );
}
