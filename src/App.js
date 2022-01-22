import "./App.css";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <div className="title">
        <h1>. . . . . . . . . . . . . . . . . . .</h1>
        <br />
        <h1>match mistery boxes</h1>
        <h1>. . . . . . . . . . . . . . . . . . .</h1>
      </div>
      <div className="body">
        <Grid />
      </div>
    </div>
  );
}

export default App;
