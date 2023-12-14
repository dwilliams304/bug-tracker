import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main/index.css';
import './styles/main/main.css';
import NavBar from './components/layout/NavBar';
import Settings from './components/pages/Settings';
import BugTracker from './components/pages/BugTracker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


function App() {

  return (
    <>
      <NavBar />
      {/* <Settings /> */}
      <BugTracker />
    </>
  );
}

export default App;
