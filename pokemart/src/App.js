import "./App.css";
import TextField from "@material-ui/core/TextField";

function App() {
  return (
    <div class="container">
      <img
        src="https://i.pinimg.com/originals/4d/b5/91/4db591ae76ad5c18c7bd498347684374.jpg"
        style={{
          zIndex: -1,
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: 0.3,
        }}
      />
      <div class="header">
        <p>Pokemart</p>
      </div>
      <div className="marketBody">
        <div className="itensDiv">
          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>

          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>

          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>

          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>

          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>

          <div className="singleItem">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png" />
            <div className="itenDescription">
              <div style={{ alignSelf: "center" }}>
                <p style={{ fontSiz: 10, textAlign: "center" }}>
                  A better BALL with a higher catch rate than a GREAT BALL.
                </p>
              </div>
            </div>
            <div className="price">
              <p style={{ marginTop: 0, marginLeft: 25 }}>Costs</p>
              <p style={{ marginTop: 0, marginLeft: 25 }}>₽ 800</p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="moneyBox">
            <p className="money"> Money</p>
            <input id="moneyInput"></input>
          </div>
          <div className="buttonCollection">
            <p>Escolhe o seu tipo de aventura</p>
            <div className="focusType">
              <p>Batalha</p>
            </div>
            <div className="focusType">
              <p>Captura</p>
            </div>
            <div className="focusType">
              <p>Viagem</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
