import React, { useState } from "react"

export const DataContext = React.createContext()

const initialSongs = [
  { id: 1, song: 'Carry On Wayward Son', artist: 'Kansas' }
]

const DataProvider = (props) => {
  const [songs, setSongs] = useState(initialSongs)
  return (
    <>
      <DataContext.Provider>
        value={{
          songs
        }}
        {props.children}
      </DataContext.Provider>
    </>
  )
}

export default DataProvider