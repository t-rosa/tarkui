import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "./accordion";

export function AccordionExample() {
  return (
    <Accordion.Root defaultValue={["React"]}>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
