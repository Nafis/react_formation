import "./App.css";
import "./App.css";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Header from "../ui/Header/Header.jsx";
import Navbar from "../ui/Navbar/Navbar";
import MemeForm from "../functionnal/MemeForm/MemeForm.stored";
import {
  emptyMeme,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import Footer from "../ui/Footer/Footer";
import { useEffect, useState } from "react";

import store from "../../store/store";

// import {memes as rest_memes,images as rest_imgs} from '../../../db/db.json'
const App = () => {
  console.log(store);
  const [currentMeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);
  useEffect(() => {
    setImages(store.getState().ressources.images);
    setCurrentMeme(store.getState().current.meme);
    store.subscribe(() => {
      setImages(store.getState().ressources.images);
      setCurrentMeme(store.getState().current.meme);
    });
  }, []);
  return (
    <FlexHGrow3>
      <Header />
      <Navbar />
      <FlexVGrow1>
        <MemeSVGViewer
          basePath=""
          image={images.find((img) => img.id == currentMeme.imageId)}
          meme={currentMeme}
        />
        <MemeForm/>
      </FlexVGrow1>
      <Footer />
    </FlexHGrow3>
  );
};

export default App;
