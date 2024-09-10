import * as React from "react";
import {
  Dialog as ArkDialog,
  DialogRootProvider,
  DialogRootProviderProps,
} from "@ark-ui/react";
import clsx from "clsx";

export function Dialog(props: DialogRootProviderProps) {
  return <DialogRootProvider {...props} />;
}

const Root = (props: React.PropsWithChildren) => <ArkDialog.Root {...props} />;

const Backdrop = React.forwardRef<HTMLDivElement, ArkDialog.BackdropProps>(
  (props, ref) => (
    <ArkDialog.Backdrop
      ref={ref}
      className={clsx([
        "fixed inset-0 z-50 backdrop-blur-sm bg-black/80",
        "data-[state=open]:animate-in ",
        "data-[state=open]:fade-in-0",
        "data-[state=close]:animate-out ",
        "data-[state=close]:fade-out-0",
        props.className,
      ])}
      {...props}
    />
  )
);

Backdrop.displayName = "Backdrop";

const CloseTrigger = React.forwardRef<
  HTMLButtonElement,
  ArkDialog.CloseTriggerProps
>((props, ref) => (
  <ArkDialog.CloseTrigger
    ref={ref}
    className={clsx([
      "text-muted-foreground absolute top-4 right-4 size-4",
      "[&>svg]:size-4",
      props.className,
    ])}
    {...props}
  />
));

CloseTrigger.displayName = "CloseTrigger";

const Content = React.forwardRef<HTMLDivElement, ArkDialog.ContentProps>(
  (props, ref) => (
    <ArkDialog.Content
      ref={ref}
      className={clsx([
        "relative p-6 border bg-background max-w-lg w-full rounded-md",
        "data-[state=open]:animate-in",
        "data-[state=open]:fade-in-0",
        "data-[state=open]:zoom-in-95",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=closed]:zoom-out-95",
        props.className,
      ])}
      {...props}
    />
  )
);

Content.displayName = "Content";

const Description = React.forwardRef<
  HTMLDivElement,
  ArkDialog.DescriptionProps
>((props, ref) => (
  <ArkDialog.Description
    ref={ref}
    className={clsx(["text-muted-foreground text-sm", props.className])}
    {...props}
  />
));

Description.displayName = "Description";

const Positioner = React.forwardRef<
  HTMLInputElement,
  ArkDialog.PositionerProps
>((props, ref) => (
  <ArkDialog.Positioner
    ref={ref}
    className={clsx([
      "flex items-center justify-center fixed inset-1 overflow-auto z-50",
      props.className,
    ])}
    {...props}
  />
));

Positioner.displayName = "Positioner";

const Title = React.forwardRef<HTMLInputElement, ArkDialog.TitleProps>(
  (props, ref) => (
    <ArkDialog.Title
      ref={ref}
      className={clsx(["font-semibold text-lg", props.className])}
      {...props}
    />
  )
);

Title.displayName = "Title";

const Trigger = React.forwardRef<HTMLButtonElement, ArkDialog.TriggerProps>(
  (props, ref) => (
    <ArkDialog.Trigger ref={ref} className={clsx(props.className)} {...props} />
  )
);

Trigger.displayName = "Trigger";

Dialog.Root = Root;
Dialog.Backdrop = Backdrop;
Dialog.CloseTrigger = CloseTrigger;
Dialog.Content = Content;
Dialog.Description = Description;
Dialog.Positioner = Positioner;
Dialog.Title = Title;
Dialog.Trigger = Trigger;
