import clsx from "clsx";
import * as React from "react";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return (
    <input
      type={props.type}
      className={clsx(
        "flex w-full rounded-md border border-input bg-background px-3 py-1.5 text-sm ring-offset-background",
        "placeholder:text-muted-foreground",
        "focus-visible:ring-2",
        "focus-visible:ring-ring",
        "focus-visible:outline-none",
        "focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed ",
        "disabled:opacity-50",
        props.className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
