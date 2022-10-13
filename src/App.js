import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
