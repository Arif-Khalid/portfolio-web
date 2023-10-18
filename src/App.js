import "./App.css";
import Footer from "./Footer";
import Modal from "./Modal";
import Overview from "./Overview";
import Skills from "./Skills";
// Plan for Portfolio
// Overview
// Modal of past work with < > to scroll horizontally
// Skills categorized
// Footer
function App() {
  return (
    <main>
      <Overview />
      <Modal />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
