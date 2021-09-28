import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      button: any;
      h1: any;
      p: any;
    }
  }
}

const App = () => {
  const [count, setCount] = (React as any).useState(0);

  return (
    <>
      <h1>Hello Deno React Client Side Render!</h1>
      <button onClick={() => setCount(count + 1)}>Added Counter</button>
      <p>You clicked {count} times</p>
    </>
  );
};

export default App;