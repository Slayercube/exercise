'use client';

import React from 'react'

const error = ({error}: {error  : Error}) => {
    console.log(error)
  return (
    <div className='text-red-500 text-xl capitalize '>error fetching data</div>
  )
}

export default error