import { useEffect, useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [keyword, setKeyword] = useState('')
  const onClick = () => setCounter(prev => prev + 1)
  const onChange = (e) => setKeyword(e.target.value)

  useEffect(() => {
    console.log('한번만 동작함')
  }, []);

  useEffect(() => {
    if (keyword !== '' && keyword.length > 5) {
      console.log('keyword가 변할때만 동작함')
    }
  }, [keyword])

  useEffect(() => {
    console.log('counter가 변할때만 동작함');
  }, [counter])

  useEffect(() => {
    console.log('counter와 keyword가 변할때 동작함');
  }, [keyword, counter])

  return (
    <div className="App">
      <input
        type='text'
        placeholder='검색은 여기서...'
        onChange={onChange}
        value={keyword} />
      <h1>{counter}</h1>
      <button onClick={onClick}>클릭하세요</button>
    </div>
  );
}

export default App;
