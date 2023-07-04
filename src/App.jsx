import { useEffect, useState } from "react";

function App() {
  const [clipName, setClipName] = useState("");


  const drumsArray = [
    {
      keyCode: 81,
      text: "Q",
      clip: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      keyCode: 87,
      text: "W",
      clip: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      keyCode: 69,
      text: "E",
      clip: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      keyCode: 65,
      text: "A",
      clip: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      keyCode: 83,
      text: "S",
      clip: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      keyCode: 68,
      text: "D",
      clip: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      keyCode: 90,
      text: "Z",
      clip: "Kick-n-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      keyCode: 88,
      text: "X",
      clip: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      keyCode: 67,
      text: "C",
      clip: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  function playAudio(selector) {
    const audio = document.getElementById(selector);
    audio.currentTime = 0
    audio.play();
    
  }

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      drumsArray.map((elem) => { 
        if(elem.text === event.key.toUpperCase()) {
          playAudio(event.key.toUpperCase());
          setClipName(elem.clip);
        }
      })
    });
  }, []);
          

  return (
    <>
    <div>
      <div className="App">
        <div className="title">
          <h1>Drum Machine</h1>
          <h1>React Project</h1>
        </div>
        <div id="drum-machine">
          <div className="drum-pads">
            {drumsArray.map(({ text, clip, src, keyCode }) => (
              <button
                onClick={() => {
                  playAudio(text);
                  setClipName(clip);
                }}
                className="drum-pad"
                id={clip}
                key={text}
              >
                {text}
                <audio className="clip" src={src} id={text}></audio>
              </button>
            ))}
          </div>
          <div id="display">{clipName}</div>
        </div>
        <footer className="footer">Created & Developed by <strong>Ernesto Lopez</strong></footer>
      </div>
    </div>
    </>
  );
}

export default App;
