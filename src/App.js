import { useEffect, useState } from 'react';

function App() {
  const [toDo, setToDo] = useState('');
  const [toDos, setToDos] = useState([]);

  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault()
    if (toDo === '') {
      return;
    }
    setToDo('')
    setToDos(currentArr => {
      return [toDo, ...currentArr]
    })
  }

  console.log(toDos);


  return (
    <div className="App">
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type='text' placeholder='할 일을 작성하세요.' />
        <button>할 일 추가</button>
      </form>
      <ul>
        {toDos.map((item, idx) => <li key={idx}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
