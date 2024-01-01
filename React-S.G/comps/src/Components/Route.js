import useNavigation from "../Hooks/use-navigation";

// Ensures the page shown is the same as the link selected.
function Route ({ path, children }) {
    const { currentPath } = useNavigation();

    if (path === currentPath) {
        return children; 
    }

    return null;
}

export default Route;