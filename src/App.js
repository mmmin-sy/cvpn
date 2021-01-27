import './App.css';

function App() {
  return (
    <div className="App">
      Link : <p>{process.env.REACT_APP_URL}</p>
      Link : <p>{process.env.NODE_ENV}</p>
    </div>
  );
}

export default App;
