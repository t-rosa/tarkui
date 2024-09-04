import { Checkbox } from "@ark-ui/react";
import { CheckIcon, MinusIcon } from "lucide-react";

function App() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <Checkbox.Root>
        <Checkbox.Control>
          <Checkbox.Indicator>
            <CheckIcon />
          </Checkbox.Indicator>
          <Checkbox.Indicator indeterminate>
            <MinusIcon />
          </Checkbox.Indicator>
        </Checkbox.Control>
        <Checkbox.Label>Checkbox</Checkbox.Label>
        <Checkbox.HiddenInput />
      </Checkbox.Root>
    </div>
  );
}

export default App;
