import React from 'react'
import Button from './Button'

const list = ['MERN', 'Javascirpt', 'React', 'Python', 'Java', 'Android', 'Frontend', 'Backend', 'Data Structures', 'Algorithms','DBMS', 'OS', 'Networking', 'System Design']

function ButtonsList() {
  return (
    <div
      className='flex justify-center mt-16  bg-white p-2 overflow-hidden'>
      {list?.map((listItem, index) => <Button name={listItem} key={index} />)}
    </div>
  )
}

export default ButtonsList