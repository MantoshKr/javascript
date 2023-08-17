import { useRef } from 'react'
import React from 'react'

const PageUseRef = () => {
  // creating a ref:
  const exampleRef = useRef()

  const appleRef = useRef()

  // setting the ref value:
  exampleRef.current = 'useRef react hook'
  appleRef.current = 'Apple'

  return (
    // accessing the ref value:
    <div>

    <p>{exampleRef.current}</p>
    <p>{appleRef.current}</p>
    </div>

  )
}

export default PageUseRef
