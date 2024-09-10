import { AccordionExample } from "./components/accordion/accordion-example";
import { AvatarExample } from "./components/avatar/avatar-example";
import { Button } from "./components/button/button";
import { CheckboxExample } from "./components/checkbox/checkbox-example";
import { ColorPickerExample } from "./components/color-picker/color-picker-example";
import { DialogExample } from "./components/dialog/dialog-example";
import { Input } from "./components/input/input";

function App() {
  return (
    <div className="p-12 max-w-xl">
      <CheckboxExample />
      <Button>Open</Button>
      <DialogExample />
      <AvatarExample />
      <AccordionExample />
      <ColorPickerExample />
      <Input placeholder="test" />
    </div>
  );
}

export default App;
