import "./App.css";
import AddBook from "./components/AddBook";
import DisplayBooks from "./components/DisplayBooks";

function App() {
  return (
    <div className="App">
      <DisplayBooks />
      <AddBook />
    </div>
  );
}

export default App;
