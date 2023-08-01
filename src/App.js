import logo from './logo.svg';

import './App.css';

import Header from './Header.js';
import Footer from './Footer.js';
// Within Todolist a Form was added that can be read inside
import TodoList from './TodoList.js';
import Photography from './Photography.js';

// Using State
import Counter from './Counter.js';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header className='top_header' id='header' title='this is the header'/>
      </header>

      <body className='App-body'>
        <div className='App-body-content'>
          <Counter/>
          <TodoList />
          <br></br>
          {/* <Photography /> */}
        </div>
      </body>


      <footer className='App-footer'>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
