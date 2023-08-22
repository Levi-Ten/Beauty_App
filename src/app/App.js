import Api from "../api/Api";
import ApiContext from "../api/ApiContext";

function App() {
  return (
    <div className="App">
      <ApiContext>
        <Api/>
      </ApiContext>
    </div>
  );
}

export default App;
