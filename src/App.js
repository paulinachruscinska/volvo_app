import './scss/main.scss';
import Main from "./components/Main";
import Introduction from "./components/Introduction";
import MoreAbout from "./components/MoreAbout";
import Questions from "./components/Questions";
import Footer from "./components/Footer";

function App() {
  return (
      <>
          <Main/>
          <Introduction/>
          <MoreAbout/>
          <Questions/>
          <Footer/>

      </>
  );
}

export default App;
