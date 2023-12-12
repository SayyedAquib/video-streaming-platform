import React, { useContext } from 'react'
import ButtonsContext from '../utils/ButtonsContext'

function Button({ name }) {
  const { setText } = useContext(ButtonsContext)

  return (
    <div>
      <button
          onClick={() => setText(name)}
          className="bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-lg mx-2">
          {name}
        </button>
    </div>
  )
}

export default Button