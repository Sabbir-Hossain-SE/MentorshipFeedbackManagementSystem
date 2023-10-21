import { useEffect, useState } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        screenWidth: 0,
        screenHeight: 0
    });
    useEffect(() => {
        function handleResize() {
            setWindowSize({
                screenWidth: Number(window.innerWidth),
                screenHeight: Number(window.innerHeight)
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default useWindowSize;
