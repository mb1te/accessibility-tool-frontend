import {Routes, Route} from 'react-router-dom';
import { Component } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Checker from './components/Checker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div id="main-page">
              <Header />
              <Main />
              <Footer />
            </div>
          }/>

          <Route path="/check" element={
            <div>
              <div className="container" id="check-header">  
               <Header />
               <Checker />
               <Footer />
              </div>

            </div>
          }/>
        </Routes>
      </div>
    )
  }
}

export default App;
