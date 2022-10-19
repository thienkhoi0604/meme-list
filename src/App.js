import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import PageHeader from "./components/Page/Header/PageHeader";
import ShowPicture from "./components/Gallery/ShowPicture/ShowPicture";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isChoose, setIsChoose] = useState(false);
  const [selected, setSelected] = useState({});

  const getImagesHandler = () => {
    return setIsLoaded(true);
  };

  const chooseImageHandler = (item) => {
    setIsLoaded(false);
    setIsChoose(true);
    console.log(item);
    setSelected(item);
  };

  return (
    <div className="App">
      <PageHeader onClick={getImagesHandler} />
      {isLoaded && <Gallery onClick={chooseImageHandler} />}
      {isChoose && <ShowPicture selected={selected} />}
    </div>
  );
}

export default App;
