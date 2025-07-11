// import reactLogo from "/simulenca.svg";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/simulenca.svg";
import "./App.css";
import { LandingHeader } from "./components/LandingHeader";

function App() {

  return (
    <>
      <LandingHeader />
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl text-white text-center mt-20">
          Welcome to Simulenca
        </h1>
        <p className="text-gray-400 text-center mt-4">
          A place to simulate and learn.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <h1 className="text-4xl text-white text-center mt-20">
          Welcome to Simulenca
        </h1>
        <p className="text-gray-400 text-center mt-4">
          A place to simulate and learn.
        </p>
      </div>
    </>
  );
}

export default App;
