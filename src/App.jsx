import './App.css';

function App() {
  return (
    <>
      <div className="container flex">
        <div className="main_container">
          <div className="main_left_side">
            <div className="main_left-header flex">
              <span className="material-symbols-outlined color-size">
                add_box
              </span>
            </div>
            <div className="main_left-header flex">
              <span className="material-symbols-outlined color-size align">
                steppers
              </span>
            </div>
            <div className="main_left-header flex">
              <span className="temp">&#8451;</span>
              <span className="material-symbols-outlined color-size large align">
                switches
              </span>
              <span className="temp">&#8457;</span>
            </div>
          </div>

          <div className="main_right_side"></div>
        </div>
      </div>
    </>
  );
}

export default App;
