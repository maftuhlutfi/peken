import { useEffect, useState } from "react";

const useScrollPos = () => {
    const [scrollPos, setScrollPos] = useState({x: 0, y:0})

    useEffect(() => {
        const updatePosition = () => {
            setScrollPos({
                x: window.scrollX,
                y: window.scrollY
            })
          }
          window.addEventListener("scroll", updatePosition);
          updatePosition();
          return () => window.removeEventListener("scroll", updatePosition)
    }, [])

    return scrollPos
}
 
export default useScrollPos;