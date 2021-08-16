//importing required files
import React from 'react'

const Chardata = ({item}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={item.img} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}     {/* This will display Actor Name */}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}        {/* This will display Actor Nickname */}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}        {/* This will display Actor Birthdate */}
            </li>
            <li>
              <strong>Status:</strong> {item.status}            {/* This will display Actor Status(Alive/dead) */}
            </li>
            <li>
              <strong>portrayed:</strong> {item.portrayed}      {/* This will display Character name Potrayed by Actor */}
            </li>
            <li>
              <strong>occupation:</strong> {item.occupation}    {/* This will display Actor Occupation */} 
            </li>
            <li>
              <strong>Season:</strong> {item.appearance}        {/* This will display Season number in which particular actor appeared */}
            </li>
            
          </ul>
        </div>
      </div>
    </div>
    )
}

export default Chardata
