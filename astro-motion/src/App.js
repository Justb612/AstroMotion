import "./App.css";
import backgroundVideo from "./assets/backgroundvideo.mp4";

function App() {
  return (
    <div className="App">
      <body>
        <video autoPlay loop muted id="videoBG">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div>
          <div className="amo__first-container">
            <div className="amo__first-container_txt">
              <h1>Danasnji Specialiteti</h1>{" "}
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusnt mollit anim id est laborum.
              </p>{" "}
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
