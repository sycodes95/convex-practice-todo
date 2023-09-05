import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { api } from "../../../convex/_generated/api"

import './App.css'
import Header from './components/header/header'
import TodosPage from './pages/todos'
import { format } from 'date-fns';


function App() {

  return (
    <div className='flex flex-col items-center min-h-screen'>
      <Header />
      <div className='flex justify-center w-full mt-12 mb-12'>
        <TodosPage />
      </div>
    </div>
  )
}

export default App
