import logo from './logo.svg';

import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
import TodoList from './TodoList.js';
import Photography from './Photography.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <body className='App-body'>
        <div className='App-body-content'>
          <TodoList />
          <br></br>
          <Photography />
        </div>
      </body>


      <footer className='App-footer'>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
