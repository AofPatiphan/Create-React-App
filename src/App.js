import logo from "./logo.svg";
// import "./App.css";
import Welcome from "./Welcome";
import styles from "./App.module.css";

// เก็บ style ไว้ในตัวแปร แล้วเอาไปใส่ inline
function App() {
  return (
    <>
      {/* -----Nav Bar----- */}
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-info">To Do List App</a>
          <form className="d-flex ">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success text-info" type="submit">
              Search
            </button>
            <button
              className="btn btn-outline-success ms-2  text-info"
              type="submit"
            >
              Add
            </button>
          </form>
        </div>
      </nav>
      {/* -----Content----- */}
      <div class="container-fluid mt-4">
        <div class="row">
          <div class="col-md-4 col-sm-6 ">
            <div class="card">
              <h5 class="card-header">To Do</h5>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
              <div class="card card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <h5 class="card-header">Doing</h5>
              <div class="card-body d-flex justify-content-between flex-wrap">
                <div>
                  <h5 class="card-title">Prototype</h5>
                  <p class="card-text">21/12/2021</p>
                </div>
                <div
                  class="btn-group"
                  role="group"
                  aria-label="Basic outlined example"
                >
                  <button type="button" class="btn btn-outline-primary">
                    Left
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Middle
                  </button>
                  <button type="button" class="btn btn-outline-primary">
                    Right
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-sm-6">
            <div class="card">
              <h5 class="card-header">Done</h5>
              <div class="card-body">
                <h5 class="card-title">Requirement</h5>
                <p class="card-text">07/02/2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
