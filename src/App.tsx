import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import CheckLists from "./components/CheckLists";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          {/* <Route
            path="/"
            element={
              <div id="/accessibility-tool-frontend/main-page">
                <Header />
                <Main />
                <Footer />
              </div>
            }
          /> */}

          <Route
            // path="/accessibility-tool-frontend/check"
            path="/"
            element={
              <div>
                <div className="container" id="check-header">
                  <Header />
                  <CheckLists />
                  <Footer />
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default App;
