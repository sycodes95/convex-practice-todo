import { useMutation } from "convex/react";
import { format } from "date-fns";
import { useEffect, useState } from "react"
import { api } from "../../../convex/_generated/api"
import { save } from "../../../convex/todos";

type NewTodo = {
  title: string;
  body: string;
  priority: string;
  dateCreated: string;
  dateDeadline: string;

}

export default function AddTodos () {
  const saveTodo = useMutation(api.todos.save)

  const todoObject = {
    title: "",
    body: "",
    priority: "",
    dateCreated: format(new Date(), 'yyyy-MM-dd'),
    dateDeadline: ""
  }

  const [newTodo, setNewTodo] = useState<NewTodo>(todoObject)

  const priorityOptions = [
    "High",
    "Medium",
    "Low"
  ]

  useEffect(() => {
    console.log(newTodo);
  },[newTodo])

  
  return (
    <div className="flex flex-col w-full gap-8 p-2 rounded-2xl h-fit">
      <div className="text-xl">
        <span>Add Todos</span>
      </div>


      <form className="flex flex-col gap-4" onSubmit={async (e)=> {
        e.preventDefault()
        await saveTodo(newTodo)
        setNewTodo(todoObject)
      }} >
        <div className="flex gap-2">
          <label className="w-40">Title</label>
          <input className="w-full border rounded-lg border-stone-400 "
          type="text" 
          value={newTodo.title}
          onChange={(e)=> setNewTodo({...newTodo, title: e.target.value})}
          />
        </div>

        <div className="flex w-full gap-2">
          <label className="w-40">Body</label>
          <textarea className="w-full border rounded-lg border-stone-400" 
           
          value={newTodo.body}
          onChange={(e)=> setNewTodo({...newTodo, body: e.target.value})}
          />
        </div>

        <div className="flex gap-2">
          <label className="w-40">Priority</label>
          <select className="w-full border rounded-lg border-stone-400" name="priority" id="" value={newTodo.priority} onChange={(e) => setNewTodo({...newTodo, priority: e.target.value})}>
            {
            priorityOptions.map((option, index) => {
              return <option className=""  key={index} value={option} >{option}</option>
            })
            }
          </select>
        </div>

        <div className="flex gap-2">

          <label className="w-40"> Due Date</label>

          <input className="w-full border rounded-lg border-stone-400" 
          type="date" 
          value={newTodo.dateDeadline} 
          onChange={(e)=> setNewTodo({...newTodo, dateDeadline: e.target.value})} 
          />
          
        </div>
        
        <button className="" type="submit">
          Submit
        </button>
      </form>
    </div>
  )
}

