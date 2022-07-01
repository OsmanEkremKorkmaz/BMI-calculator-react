import About from "./components/About";
import Calculate from "./components/Calculate";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <h2>BMI Calculator</h2>
      <main>
        <Calculate />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
