// import reactLogo from "/simulenca.svg";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/simulenca.svg";
import "./App.css";
import { LandingFooter } from "./components/home/LandingFooter";
import { LandingHeader } from "./components/home/LandingHeader";

function App() {
  return (
    <>
      <LandingHeader />

      <main>
        <section>
          <div class="relative min-h-screen bg-gradient-to-b from-black via-neutral-800 to-neutral-950 flex items-center justify-center overflow-hidden">
            <h1 class="absolute text-[20rem] font-bold text-neutral-400 opacity-10 select-none pointer-events-none font-serif">
              Simulenca
            </h1>

            <span class="relative text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              .Simulenca
            </span>

            <div class="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(100,149,237,0.2)_0%,_transparent_80%)] blur-[100px] opacity-40 pointer-events-none"></div>
          </div>

          <div class="relative min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-800 to-black flex items-center justify-center overflow-hidden">
            <h1 class="absolute text-[20rem] font-bold text-neutral-400 opacity-10 select-none pointer-events-none font-serif">
              Simulenca
            </h1>

            <span class="relative text-7xl font-bold text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              .Simulenca
            </span>

            <div class="absolute left-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(100,149,237,0.1)_0%,_transparent_80%)] blur-[100px] opacity-30 pointer-events-none"></div>
          </div>
        </section>
      </main>

      <LandingFooter />

      {/* <div class="absolute -right-20 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.5)_0%,_transparent_80%)] blur-[120px] opacity-60 pointer-events-none"></div> */}
    </>
  );
}

export default App;
