import React from 'react'
import Button from './Button'

const list = ['All', 'Javascirpt', 'React', 'Redux', 'Python', 'Java', 'Kotlin', 'Android', 'Frontend', 'SQL', 'C++', 'DBMS', 'OS', 'Networking', 'System Design']

function ButtonsList() {
  return (
    <div
      className='flex mt-16  bg-white p-2 ml-16 overflow-hidden'>
      {list.map((listItem, index) => <Button name={listItem} key={index} />)}
    </div>
  )
}

export default ButtonsList