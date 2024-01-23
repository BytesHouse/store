import Header from "./components/Header/Header";
import Display from "./components/Display/Display";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header/>
      <Display/>
      <Footer/>
    </div>
  );
}

export default App;
