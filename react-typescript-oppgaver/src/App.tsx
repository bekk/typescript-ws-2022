import "./App.css";
import { BekkKantina, Grid, WindowSize } from "./Oppgaver";
function App() {
  return (
    <div className="App">
      <BekkKantina todaysFood="Kylling og ris" todaysVariant="Meat" />
      <WindowSize />
      <Grid title="Grid av rutor">
        <div className="box">Ruta 1</div>
        <div className="box">Ruta 2</div>
        <div className="box">Ruta 3</div>
        <div className="box">Ruta 4</div>
      </Grid>
    </div>
  );
}
export default App;
