import { CheckIcon } from "lucide-react";
import { Checkbox } from "./components/checkbox/checkbox";

function App() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <Checkbox.Root>
        <Checkbox.Label>Checkbox</Checkbox.Label>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </div>
  );
}

export default App;
