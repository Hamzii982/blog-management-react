import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title = 'Welcome to React JS';
  // const rating = 8;
  // const name = {firstname: 'Hamza', lastname: 'Mehmood'};
  // const link = 'https://www.facebook.com';

  return (
    <div className="App">
      <Navbar />
      <div className="content"> 
        {/* <h1>{title}</h1> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
