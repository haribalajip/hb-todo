import './App.css';
import PendingItems from './components/PendingItems/PendingItems';
import { Provider } from 'react-redux';
import { store } from './store/index'
import AddItem from './components/AddItem/AddItem';

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
