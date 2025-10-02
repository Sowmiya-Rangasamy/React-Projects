import './App.css';
import Calculator from './Components/Calculator';

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="col-12 col-sm-10 col-md-8 col-lg-6">
      <Calculator />
      </div>
    </div>
    </div>
  );
}

export default App;
