import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const onClick = () => {
    setCounter(prev => prev + 1)
  }

  console.log('계속 동작됨')
  useEffect(() => {
    console.log('CALL THE API')
  }, []);


  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭하세요</button>
    </div>
  );
}

export default App;
