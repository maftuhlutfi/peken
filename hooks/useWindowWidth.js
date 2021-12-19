import { useEffect, useState } from "react";

const useWindowWidth = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        const updateWindowSize = () => {
            setWidth(window.innerWidth)
          }
          window.addEventListener("resize", updateWindowSize);
          updateWindowSize();
          return () => window.removeEventListener("resize", updateWindowSize)
    }, [])

    return width
}
 
export default useWindowWidth;