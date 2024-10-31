import Button from './Button';
import styles from './App.module.css'

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>어서와 리액트는 처음이지?</h1>
      <Button text={'계속'} />
    </div>
  );
}

export default App;
