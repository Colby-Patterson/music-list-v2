import React, { useState } from "react"

export const DataContext = React.createContext()

const initialSongs = [
  { id: 1, songName: 'Carry On Wayward Son', artist: 'Kansas' }
]

const DataProvider = (props) => {
  const [songs, setSongs] = useState(initialSongs)

  const addSong = (song)=>{
    setSongs([song, ...songs])
  }

  const deleteSong = (id)=>{
    let newSongs = songs.filter((song)=> song.id !== id)
    setSongs(newSongs)
  }
  return (
    <>
      <DataContext.Provider
        value={{
          songs,
          addSong,
          deleteSong
        }}
        >
        {props.children}
      </DataContext.Provider>
    </>
  )
}

export default DataProvider