//Importing useRef hook
import { useRef } from 'react'

function PageFocusOnInputText() {
  //creating a ref
  const inputText = useRef()

  const focusInput = () => {
    inputText.current.focus()
  }

  return (
    <>
      <input type="text" ref={inputText} />
      <button onClick={focusInput}>Focus the Input Text</button>
    </>
  )
}
export default PageFocusOnInputText
