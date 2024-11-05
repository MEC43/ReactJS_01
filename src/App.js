import Home from './routes/Home';
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path='/home' element={<Home />} />
    </Switch>
  )
}

export default App;
