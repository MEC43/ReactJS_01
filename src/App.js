import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then(response => response.json())
      .then(json => {
        setCoins(json)
        setLoading(false)
      });
  }, [])

  return (
    <div className="App">
      <h1>코인!! {loading ? "" : `(${coins.length})`}</h1>
      {loading
        ? <strong>로딩중...</strong>
        : <select>
          {coins.map((item) => {
            return <option key={item.id}>{item.name} ({item.symbol}) : ${item.quotes.USD.price} USD</option>
          })}
        </select>}
    </div>
  );
}

export default App;
