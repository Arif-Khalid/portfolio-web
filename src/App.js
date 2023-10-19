import "./App.css";
import Footer from "./Footer";
import Modal from "./Modal";
import Overview from "./Overview";
import Secret from "./Secret";
import Skills from "./Skills";
import Header from "./Header";
// Plan for Portfolio
// Overview
// Modal of past work with < > to scroll horizontally
// Skills categorized
// Footer
function App() {
  return (
    <main className="app">
      <Header />
      <Overview />
      <Modal />
      <Skills />
      <Secret />
      <Footer />
    </main>
  );
}

export default App;
