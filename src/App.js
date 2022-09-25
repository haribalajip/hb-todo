import './App.css';
import PendingItems from './PendingItems/PendingItems';
import { Provider } from 'react-redux';
import { store } from './store/index'
import AddItem from './AddItem/AddItem';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header>To do</header>
        <AddItem></AddItem>
        <PendingItems></PendingItems>
      </div>
    </Provider>
  );
}

export default App;
