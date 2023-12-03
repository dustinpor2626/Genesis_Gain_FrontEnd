import logo from "./logo.svg";
import "./App.css";
import bgvideo from "./asset/bgvideo.mp4";
import walletButton from "./component/WalletButton";

const butt = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };
};

function App() {
  return (
    <div className="App">
      <video src={bgvideo} autoPlay loop />

      <div className="content">
        <h1>G E N E S I S G A I N</h1>
      </div>

      <walletButton onClick={butt.handleClick} text="Click me" />
    </div>
  );
}

export default App;
