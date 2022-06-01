import { useContext } from "react";
import { DataContext } from "./providers/DataProvider";

export default function Welcome(){
  const data = useContext(DataContext)
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  )
}