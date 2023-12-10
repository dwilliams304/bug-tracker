import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main/index.css';
import './styles/main/main.css';
import BugTracker from './components/pages/BugTracker';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


function App() {

  return (
    <>
      <header>
        <h1>Bug Tracker/Task Board</h1>
      </header>
      <BugTracker />
    </>
  );
}

export default App;
