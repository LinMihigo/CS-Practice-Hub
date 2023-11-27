import SideBar from "./Components/Sidebar";
import Route from "./Components/Route";
import ButtonPage from './Pages/ButtonPage'
import AccordionPage from './Pages/AccordionPage'
import DropdownPage from './Pages/DropdownPage'
import ModalPage from "./Pages/ModalPage";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            
            <SideBar />

            <div className="col-span-5">
                <Route path='/Accordion'>
                    <AccordionPage />
                </Route>
                <Route path='/'>
                    <DropdownPage />
                </Route>
                <Route path='/Buttons'>
                    <ButtonPage />
                </Route>
                <Route path='/Modal'>
                    <ModalPage />
                </Route>
            </div>

        </div>
    )
}

export default App;