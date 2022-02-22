import "./App.css";
import AddBook from "./components/AddBook";
import DisplayBooks from "./components/DisplayBooks";
import RichText from "./components/RichText";

function App() {
  return (
    <div className="App">
      <DisplayBooks />
      <AddBook />
      <RichText />
    </div>
  );
}

export default App;
