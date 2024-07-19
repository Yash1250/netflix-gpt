/** @format */

import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myStore from "./utils/myStore";

function App() {
  return (
    <Provider store={myStore}>
      <Body />
    </Provider>
  );
}

export default App;
