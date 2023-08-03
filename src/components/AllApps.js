// import logo from './assests/imgs/logo.svg';

import '../assests/App.css';


// Within Todolist a Form was added that can be read inside
import TodoList from './TodoList';
import Photography from './Photography';

// Using State
import Counter from './Counter';
import FunFact from './FunFact';


function AllApps() {
  return (
    <>
          <FunFact/>
          <Counter/>
          <TodoList title="Immidiate"/>
          <br></br>
          <TodoList title="Long Term"/>
          {/* <Photography /> */}
    </>
  );
}

export default AllApps;
