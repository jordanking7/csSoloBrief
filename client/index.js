import React from 'react';
import { render } from 'react-dom';
// import ReactDOM from 'react-dom';
// import App from './components/App';

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

const App = () => {
  fetch('/').then()
    return(
      <div className="App">
          <h1>hello we made it</h1>
      </div>
    )
}

const Appp = () => {
  const [state, setState] = useState([])
  useEffect(() => {
      fetch("/").then(
          res => setState(res.data)
      )
  }, [])
  return (
      <>
          {state.map( d => <div>{d}</div>)}      
      </>
  )
}
// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));
render(
  <div>
    <App />
    <App />
    <App />
    <Appp />
  </div>,
  document.getElementById('root')
);
