import { useContext } from "react";
import { DataContext } from "./providers/DataProvider";

export default function Song({id, songName, artist}){
  const data = useContext(DataContext)
  return (
    <div>
      <p>{songName}</p>
      <p>{artist}</p>
      <button onClick={()=> data.deleteSong(id)}>Delete</button>
    </div>
  )
}