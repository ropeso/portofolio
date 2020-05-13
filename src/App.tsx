import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App h-100">
      <div className="row no-gutters h-100">
        <div className="col-sm-12 col-md-6 p-0 imageWrapper">
          <div className="image h-100"></div>
        </div>
        <div className="col-sm-12 col-md-6 p-0 right">
          <div className="row no-gutters d-flex nameParent">
            <div className="col name align-self-end mx-4 px-3">Test</div>
          </div>
          <div className="row no-gutters">
            <div className="col title my-3 mx-4 px-3">Programmer</div>
          </div>
          <div className="row no-gutters">
            <div className="col description mx-4 px-3 mb-3 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              minus voluptate, quae explicabo vero fuga quod blanditiis
              perspiciatis beatae tempora distinctio facere necessitatibus ipsa?
              Similique earum facere, aspernatur totam corporis consequuntur
              iste facilis recusandae inventore incidunt repellendus, suscipit
              quos, aut velit qui doloribus ullam cum rerum sunt voluptates
              placeat! Id.
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col nav">
              <ul className="list">
                <li className="list-item">Connect</li>
                <li className="list-item">
                  <a href="/">Blog</a>
                </li>
                <li className="list-item">
                  <a href="/">Email</a>
                </li>
                <li className="list-item">
                  <a href="/">Newsletter</a>
                </li>
              </ul>
            </div>
            <div className="col nav">
              <ul className="list">
                <li className="list-item">Social</li>
                <li className="list-item">
                  <a href="/">Facebook</a>
                </li>
                <li className="list-item">
                  <a href="/">Instagram</a>
                </li>
                <li className="list-item">
                  <a href="/">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="col nav">
              <ul className="list">
                <li className="list-item">Portfolio</li>
                <li className="list-item">
                  <a href="/">Link One</a>
                </li>
                <li className="list-item">
                  <a href="/">Link Two</a>
                </li>
                <li className="list-item">
                  <a href="/">Link Three</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row no-gutters">
            <div className="col footer">&copy; 2020. Test</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
