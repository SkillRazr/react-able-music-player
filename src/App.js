import "./App.css";
import MusicPlayer from "./Components/MusicPlayer";
import MusicPlayerWithPlayList from "./Components/MusicPlayerWithPlayList";

function App() {
  return (
    <div className="App">
      <header className="App-header1" style={{ marginTop: "200px" }}>
        React Music Player (AblePlayer)
      </header>
      {/* <MusicPlayer /> */}
      <MusicPlayerWithPlayList />
    </div>
  );
}

export default App;
