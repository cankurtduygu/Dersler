import React, { useEffect, useState } from 'react'

const People = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPeople(Array.isArray(data) ? data : []))
  }, [])

  return (
    <div className="container mt-4 g-4">
      <div className='row'>
        {people.map((a) => (
          <div className='col-12 col-sm-6 col-md-4 col-lg-2' key={a.id}>
            <img src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${a.id}`} alt={a.username} />
            <h5 className='text-danger'>{a.username}</h5>
            <h6 className='text-warning'>{a.email}</h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default People