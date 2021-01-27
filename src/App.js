import './App.css';

function App() {
  return (
    <div className="App">
      Link : <a href={process.env.REACT_APP_URL}>URL</a>
    </div>
  );
}

export default App;
