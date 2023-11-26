import { useEffect } from "react";
import { createContext, useState,  } from "react";

const NavigationContext = createContext(); //

function NavigationProvider ( { children }) { // 

    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Ensures the component always has the current url path stored in currentPath state.
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        }

        window.addEventListener('popstate', handler);

        return () => {
            window.removeEventListener('popstate', handler);
        }
    }, [])

    // Function to control navigation!
    const navigate = (to) => {
        window.history.pushState({}, '', to); // Adds an entry to browser's history stack
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }} >
            { children }
        </NavigationContext.Provider>
    )
}

export { NavigationProvider };
export default NavigationContext;