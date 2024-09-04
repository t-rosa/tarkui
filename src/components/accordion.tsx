import { Accordion } from "@ark-ui/react";
import { ChevronDownIcon } from "lucide-react";

export function AccordionExample() {
  return (
    <Accordion.Root collapsible>
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item}>
          <Accordion.ItemTrigger>
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent>
            <div className="pb-3 pt-0">
              {item} is a JavaScript library for building user interfaces.
            </div>
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
