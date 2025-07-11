import gsap from "gsap";
import { useEffect, useRef } from "react";

export const LandingHeader = () => {

    const iconRef = useRef(null);
    const buttonRef = useRef(null);
    const lastScrollY = useRef(0);

    useEffect(() => {
      const handleScroll = () => {
        const currentScroll = window.scrollY;

        if (currentScroll > lastScrollY.current) {
          gsap.to(iconRef.current, {
            x: 500, // mueve a la derecha
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(buttonRef.current, {
            x: -500, // mueve a la izquierda
            duration: 1,
            ease: "power2.out",
          });
        } else {
          gsap.to(iconRef.current, {
            x: 0,
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(buttonRef.current, {
            x: 0,
            duration: 1,
            ease: "power2.out",
          });
        }

        lastScrollY.current = currentScroll;
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <>
      <header className="py-4 px-10 mt-6 flex items-center fixed w-full text-gray-50 bg-black z-50">
        <div
          ref={iconRef}
          className="icon flex flex-grow basis-0 cursor-pointer"
        >
          <img
            src="/simulenca.svg"
            alt="Simulenca Logo"
            className="h-10 w-10 mr-2 rounded-md"
          />
        </div>

        <nav>
          <ul
            className="flex text-sm [&>li>a]:text-current [&>li>a]:transition-colors [&>li>a]:duration-400
       [&>li>a]:font-medium [&>li>a]:inline-block [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a]:hover:bg-gray-700 [&>li>a]:rounded-md"
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

        <div ref={buttonRef} className="flex flex-grow basis-0 justify-end">
          <button className="bg-gray-700 text-gray-50 px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
            Iniciar sesión
          </button>
        </div>
      </header>
    </>
  );
};
