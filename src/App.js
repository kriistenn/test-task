import './App.css';
import Slider from "./pages/Slider";
import {store} from "./store/index";
import {Provider} from "react-redux";
function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <Slider/>
        </div>
      </Provider>
  );
}

export default App;
