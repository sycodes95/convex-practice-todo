import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api"


export default function TodosList () {
  const todosList = useQuery(api.todos.list);

  return (
    <div className="flex flex-col w-full gap-4">
      {
      todosList?.map((todo, index) => {
        return <div className="" key={index}>
          <div>{todo.dateCreated}</div>
          <div>{todo.title}</div>
          <div>{todo.body}</div>
          <div>{todo.priority}</div>
          <div>{todo.dateDeadline}</div>
        </div>
      })
      }
    </div>
  )
}