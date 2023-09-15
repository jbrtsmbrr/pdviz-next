"use client"

import React, { useEffect, useState } from 'react'

const Selector = ({ users, children }: { users: any[], children?: React.ReactElement }) => {
  const [value, setValue] = useState(1);

  const filtered = users.filter(user => user.id === value)

  return (
    <React.Fragment>
      <div>
        <select value={value} onChange={e => setValue(+e.target.value)}>
          <option value={1}>One</option>
          <option value={2}>Two</option>
        </select>
      </div>
      {JSON.stringify(filtered, null, 2)}
    </React.Fragment>
  )
}

export default Selector