import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>up</Button>
      <p>{count}</p>
      <Button onClick={() => setCount((count) => count - 1)}>down</Button>
    </>
  );
}

export default App;
