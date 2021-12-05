import "./App.css";
import backgroundVideo from "./assets/videotest.mp4";
import firstIMG from "./assets/firstIMG.jpg";
import thirdIMG from "./assets/thirdIMG.jpg";

function App() {
  return (
    <div className="App">
      <body>
        <video autoPlay loop muted id="videoBG">
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="amo__first-container">
          {" "}
          <div>
            <nav className="amo__navbar-container">
              <box>zzz</box>
              <box>ddd</box>
              <box>sss</box>
            </nav>
          </div>
          <div>
            <div>
              {" "}
              <img
                className="amo__first-container_img"
                src={firstIMG}
                alt="firstImage"
              />
            </div>{" "}
            <div>
              {" "}
              <img
                className="amo__first-container_img-two"
                src={thirdIMG}
                alt="firstImage"
              />
            </div>{" "}
          </div>
          <div className="amo__first-container_txt">
            <h1>Welcome to our website</h1>{" "}
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>{" "}
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
