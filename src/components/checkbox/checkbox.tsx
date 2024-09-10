import * as React from "react";
import {
  Checkbox as ArkCheckbox,
  CheckboxRootProvider,
  CheckboxRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";

export function Checkbox(props: CheckboxRootProviderProps) {
  return <CheckboxRootProvider {...props} />;
}

const Root = React.forwardRef<HTMLLabelElement, ArkCheckbox.RootProps>(
  (props, ref) => (
    <ArkCheckbox.Root
      ref={ref}
      className={clsx([
        "group flex items-center gap-2 ",
        "disabled:opacity-50 ",
        "disabled:cursor-not-allowed",
        props.className,
      ])}
      {...props}
    />
  )
);

Root.displayName = "Root";

const Control = React.forwardRef<HTMLDivElement, ArkCheckbox.ControlProps>(
  (props, ref) => (
    <ArkCheckbox.Control
      ref={ref}
      className={clsx([
        "border size-4 rounded grid place-items-center",
        "hover:cursor-pointer",
        "group-data-[focus]:ring-1",
        "group-data-[focus]:ring-ring",
        "group-data-[focus]:ring-offset-2",
        "group-data-[focus]:ring-offset-background",
        "data-[state=checked]:text-primary-foreground",
        "data-[state=checked]:bg-primary",
        "data-[state=indeterminate]:text-primary-foreground",
        "data-[state=indeterminate]:bg-primary",
        props.className,
      ])}
      {...props}
    />
  )
);

Control.displayName = "Control";

const Group = React.forwardRef<HTMLDivElement, ArkCheckbox.GroupProps>(
  (props, ref) => (
    <ArkCheckbox.Group
      ref={ref}
      className={clsx([props.className])}
      {...props}
    />
  )
);

Group.displayName = "Group";

const Indicator = React.forwardRef<HTMLDivElement, ArkCheckbox.IndicatorProps>(
  (props, ref) => (
    <ArkCheckbox.Indicator
      ref={ref}
      className={clsx(["text-current", "[&>svg]:size-3", props.className])}
      {...props}
    />
  )
);

Indicator.displayName = "Indicator";

const Label = React.forwardRef<HTMLSpanElement, ArkCheckbox.LabelProps>(
  (props, ref) => (
    <ArkCheckbox.Label
      ref={ref}
      className={clsx(["text-sm font-semibold", props.className])}
      {...props}
    />
  )
);

Label.displayName = "Label";

const HiddenInput = React.forwardRef<
  HTMLInputElement,
  ArkCheckbox.HiddenInputProps
>((props, ref) => <ArkCheckbox.HiddenInput ref={ref} {...props} />);

Label.displayName = "HiddenInput";

Checkbox.Root = Root;
Checkbox.Control = Control;
Checkbox.Group = Group;
Checkbox.Indicator = Indicator;
Checkbox.Label = Label;
Checkbox.HiddenInput = HiddenInput;
