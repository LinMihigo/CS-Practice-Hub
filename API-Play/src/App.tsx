import SideBar from "./Components/Sidebar";
import Numbers from "./Components/Numbers";
import WordsDescribed from "./Pages/WordsDescribed";
import Route from "./Components/Route";
import HomePage from "./Components/HomePage";

//Goin to build a sidebar of words description with text to speech for results & Numbers facts retrieval page.
function App() {
  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <SideBar />
      <div className="col-span-5">
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/WordsDescribed">
          <WordsDescribed />
        </Route>
        <Route path="/Numbers">
          <Numbers />
        </Route>
      </div>
    </div>
  );
}

export default App;
