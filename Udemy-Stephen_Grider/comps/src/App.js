import Link from "./Components/Link";
import Route from "./Components/Route";
import AccordionPage from './Pages/AccordionPage'
import DropdownPage from './Pages/DropdownPage'

function App() {
    return (
        <div>
            <Link to="/Accordion">Go to Accordion</Link>
            <Link to="/Dropdown">Go to Dropdown</Link>

            <div>
                <Route path='/Accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/Dropdown'>
                    <DropdownPage />
                </Route>
            </div>
            
        </div>
    )
}

export default App;