import React from 'react';
import { render } from 'react-dom';
// import App from './components/App';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const App = () => {
    return(
      <div className="App">
          <h1>hello we made it</h1>
      </div>
    )
}

render(
  <App />,
  document.getElementById('root')
);
