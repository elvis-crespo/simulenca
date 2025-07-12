import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export const LandingHeader = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top top",
        end: "+=300",
        scrub: true,
      },
    });

    tl.to(header, {
      width: "50%",
      paddingLeft: 30,
      paddingRight: 30,
      ease: "power2.out",
    });

    
    const st = ScrollTrigger.create({
      trigger: header,
      start: "top top",
      end: "+=1", 
      onEnter: () => {
        header.style.backdropFilter = "blur(8px)";
      },
      onLeaveBack: () => {
        header.style.backdropFilter = "blur(0px)";
      },
    });

    return () => {
      tl.kill();
      st.kill();
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className="mt-6 py-3 fixed z-40 bg-black/60 left-0 right-0 mx-auto w-full px-10 flex items-center justify-between text-gray-50 rounded-full transition-colors duration-300"
    >
      <div className="box-left cursor-pointer">
        <img
          src="/simulenca.svg"
          alt="Simulenca Logo"
          className="h-10 w-10 rounded-md"
        />
      </div>

      <nav className="z-50">
        <ul
          className="flex text-sm [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:duration-400
          [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:hover:bg-gray-700 [&>li>a]:rounded-md [&>li>a]:cursor-pointer"
        >
          <li>
            <a href="#inicio">Inicio</a>
          </li>
          <li>
            <a href="#como-funciona">¿Cómo funciona?</a>
          </li>
          <li>
            <a href="#beneficios">Beneficios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="#faq">FAQ</a>
          </li>
        </ul>
      </nav>

      <div className="box-right">
        <button className="bg-gray-700 text-gray-50 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
          Iniciar sesión
        </button>
      </div>
    </header>
  );
};
