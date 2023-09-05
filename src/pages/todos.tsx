import AddTodos from "../components/addTodos/addTodos";
import TodosList from "../components/todosList/todosList";


function TodosPage (){

  return (
    <div className="flex-grow h-full max-w-5xl">
      <AddTodos />
      <TodosList />
       
    </div>
  )
}

export default TodosPage;