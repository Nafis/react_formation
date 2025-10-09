import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVgrow1 from "../layout/FlexVgrow1/FlexVgrow1";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import MemeSVGViewer from "../ui/MemeSVGViewer/MemeSVGViewer";
import Navbar from "../ui/Navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexVgrow1>
          <MemeSVGViewer />
          <MemeForm />
        </FlexVgrow1>
        <Footer />
      </FlexHGrow3>
    </div>
  );
};

export default App;
