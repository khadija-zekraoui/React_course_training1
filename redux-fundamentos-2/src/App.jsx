import Pokemones from "./components/Pokemones";
import {Provider} from 'react-redux'
import generateStore from './redux/store'

function App() {

  const store = generateStore()

  return (
    
    //Allow components to read store.js and pokeDucks.js
    <Provider store={store}> 
    <div className="container mt-5">
      <Pokemones />
    </div>
    </Provider>
  );
}

export default App;
