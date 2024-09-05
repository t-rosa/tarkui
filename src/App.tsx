import { Avatar } from "./components/avatar/avatar";

function App() {
  return (
    <div className="min-h-dvh grid place-items-center">
      <Avatar.Root>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
      </Avatar.Root>
    </div>
  );
}

export default App;
