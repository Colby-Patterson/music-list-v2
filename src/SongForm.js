import { useContext, useState } from "react";
import { DataContext } from "./providers/DataProvider";

export default function SongForm(){
  const data = useContext(DataContext)
  let [songName, setSongName] = useState('')
  let [artist, setArtist] = useState('')

  const submitHandler = (event)=>{
    event.preventDefault()
    let newSong = {songName, artist, id: Math.random()}
    data.addSong(newSong)

  }
    return (
      <div>
        <h1>Form goes here</h1>
        <form onSubmit={submitHandler}>
          <input value={songName} onChange={(e)=> setSongName(e.target.value)} />
          <input value={artist} onChange={(e)=> setArtist(e.target.value)} />
          <button>Add Song</button>
        </form>
      </div>
    )
  }