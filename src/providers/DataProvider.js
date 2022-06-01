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
  return (
    <>
      <DataContext.Provider
        value={{
          songs,
          addSong
        }}
        >
        {props.children}
      </DataContext.Provider>
    </>
  )
}

export default DataProvider