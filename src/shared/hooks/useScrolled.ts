import { useEffect, useState } from "react"

export const useScrolled = (treshold: number = 0) => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  
  const checkScroll = () => {
    if(document.documentElement.scrollTop > treshold) {
      setIsScrolled(true)
    } else setIsScrolled(false)
  }

  useEffect(() => {
    document.addEventListener('scroll', checkScroll)

    return () => {
      document.removeEventListener('scroll', checkScroll)
    }
  }, [treshold])

  return {
    isScrolled
  }
}