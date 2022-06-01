import { useContext } from "react";
import { DataContext } from "./providers/DataProvider";
import Song from "./Song";

export default function SongList(){
  const data = useContext(DataContext)
  const renderSongs =()=>{
    return data.songs.map((song)=>{
      return <Song key={song.id} {...song} />
    })
  }

  return (
    <div>
      {renderSongs()}
    </div>
  )
}