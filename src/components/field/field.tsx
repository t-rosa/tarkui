import { Field } from "@ark-ui/react";

export function FieldExample() {
  return (
    <Field.Root>
      <Field.Label>Label</Field.Label>
      <Field.Textarea />
      <Field.HelperText>Some additional Info</Field.HelperText>
      <Field.ErrorText>Error Info</Field.ErrorText>
    </Field.Root>
  );
}
