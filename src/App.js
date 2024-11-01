import { useEffect, useState } from 'react';

function Hello() {


  // useEffect(function () {
  //   console.log('안녕~ :)');
  //   return function () {
  //     console.log('잘가~ :<');
  //   }
  // }, [])

  useEffect(() => {
    console.log('안녕~ :)');
    return () => console.log('잘가~ :<')
  }, [])

  return <h1>안냥~</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(prev => !prev)

  return (
    <div className="App">
      <button onClick={onClick}>{showing ? '숨김' : '보기'}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
