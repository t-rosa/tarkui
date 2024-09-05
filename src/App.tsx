import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "./components/accordion/accordion";

function App() {
  return (
    <div className="min-h-dvh grid place-items-center">
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
    </div>
  );
}

export default App;
