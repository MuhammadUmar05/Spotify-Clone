import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import { usePlayerContext } from "./context/PlayerContext";

function App() {
  const { audioRef, track } = usePlayerContext();
  return (
    <>
      <div className="h-screen bg-black text-white">
        <div className="h-[90%] flex ">
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
}

export default App;
