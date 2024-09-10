import { XIcon } from "lucide-react";
import { Dialog } from "./dialog";
import { Portal } from "@ark-ui/react";
import { Button } from "../button/button";

export function DialogExample() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button variant="outline">Open</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Title>Dialog Title</Dialog.Title>
            <Dialog.Description>Dialog Description</Dialog.Description>
            <Dialog.CloseTrigger>
              <XIcon />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
