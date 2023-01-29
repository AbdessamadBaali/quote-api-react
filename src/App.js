import QuoteRandom from "./components/QuoteRandom";
import QuoteList from "./components/QuoteList";
import "bootstrap/dist/css/bootstrap.css";
import {Link, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">


<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
          <li className="nav-item"><Link to='/'  className="nav-link">Random Quote</Link></li>
          <li className="nav-item"><Link to='/list'  className="nav-link">List of Quote</Link></li>
 
      </ul>
    </div>
  </div>
</nav>
        <Routes>
          <Route path="/" element={<QuoteRandom/>} />
          <Route path="/list" element={<QuoteList/>} />
        </Routes>
       
    </div>
  );
}

export default App;
