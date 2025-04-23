import { useState } from 'react';

function Home() {
  // State for storing data
  const [count, setCount] = useState(0);
  
  // Event handler function
  const handleClick = () => {
    setCount(count + 1);
  };
  
  return (
    <div>
      <h1>Home</h1>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Home;