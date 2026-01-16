import { createContext } from "react"

export const TaskContext = createContext();

export default function CONTEXTAPI({ children }) {
  return(
    <>
    <TaskContext.Provider value={TaskContext} >
    {children}
    </TaskContext.Provider>
    </>
  )
}