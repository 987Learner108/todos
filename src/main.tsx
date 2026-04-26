import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import { Todo } from './todos/Todo.tsx'
//import Registration from './pages/Registration.page.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Todo />
    {/* <Registration /> */}
  </StrictMode>,
)
