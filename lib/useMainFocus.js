import { useRef, useEffect } from "react"

export const useMainFocus = () =>{
  const ref = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      ref.current.focus()
    }
  }, [ref])

  return ref

}

