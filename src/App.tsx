import { Accordion } from "@ark-ui/react";
import { ChevronDownIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <Accordion.Root collapsible className="w-full">
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
    </div>
  );
}

export default App;
