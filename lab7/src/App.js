import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Images from "./components/Images/Images";
import GoodsGallery from "./components/GoodsGallery/GoodsGallery";

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Content></Content>
        <Images></Images>
        <GoodsGallery></GoodsGallery>
    </div>
  );
}

export default App;
