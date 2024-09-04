import { Avatar } from "@ark-ui/react";

function App() {
  return (
    <>
      <Avatar.Root>
        <Avatar.Fallback>PA</Avatar.Fallback>
        <Avatar.Image src="https://i.pravatar.cc/300" alt="avatar" />
      </Avatar.Root>
    </>
  );
}

export default App;
