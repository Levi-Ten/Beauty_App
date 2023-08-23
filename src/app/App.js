import ApiContext from "../api/ApiContext";
import Home from "../pages/Home";

function App() {
  return (
    <div className="App">
      <ApiContext>
        <Home/>

      </ApiContext>
    </div>
  );
}

export default App;
