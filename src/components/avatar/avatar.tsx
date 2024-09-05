import * as React from "react";
import { Avatar as ArkAvatar } from "@ark-ui/react";
import clsx from "clsx";

export function Avatar(props: React.PropsWithChildren) {
  return props.children;
}

const Root = React.forwardRef<HTMLDivElement, ArkAvatar.RootProps>(
  (props, ref) => (
    <ArkAvatar.Root
      ref={ref}
      className={clsx([
        "size-10 rounded-full overflow-hidden",
        props.className,
      ])}
      {...props}
    />
  )
);

Root.displayName = "Root";

const Fallback = React.forwardRef<HTMLSpanElement, ArkAvatar.FallbackProps>(
  (props, ref) => (
    <ArkAvatar.Fallback
      ref={ref}
      className={clsx([
        "grid place-items-center size-full bg-muted border rounded-full",
        "data-[state=hidden]:hidden",
        props.className,
      ])}
      {...props}
    />
  )
);

Fallback.displayName = "Fallback";

const Image = React.forwardRef<HTMLImageElement, ArkAvatar.ImageProps>(
  (props, ref) => (
    <ArkAvatar.Image
      ref={ref}
      className={clsx(["rounded-full", props.className])}
      {...props}
    />
  )
);

Image.displayName = "Image";

Avatar.Root = Root;
Avatar.Fallback = Fallback;
Avatar.Image = Image;
