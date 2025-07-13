export const LandingFooter = () => {
  return (
    <footer className="p-6 bg-black text-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm">&copy; Simulenca 2023. Todos los derechos reservados.</p>
        
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22 12.073c0-5.522-4.477-10-10-10S2 6.551 2 12.073c0 4.991 3.657 9.128 8.438 9.877v-6.987h-2.54v-2.89h2.54v-2.203c0-2.507 1.492-3.89 3.778-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.876h2.773l-.443 2.89h-2.33v6.987C18.343 21.2 22 17.064 22 12.073z"/>
            </svg>
          </a>

          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-400 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14.86 4.48 4.48 0 0 0 1.96-2.48 9.14 9.14 0 0 1-2.88 1.1A4.48 4.48 0 0 0 16.6 2c-2.5 0-4.51 2.06-4.51 4.6 0 .36.04.7.12 1.03-3.75-.2-7.07-1.95-9.3-4.65a4.55 4.55 0 0 0-.61 2.3c0 1.59.8 3 2.02 3.82a4.44 4.44 0 0 1-2.04-.55v.05c0 2.22 1.57 4.07 3.66 4.49a4.48 4.48 0 0 1-2.03.08 4.5 4.5 0 0 0 4.2 3.17 9 9 0 0 1-5.55 1.91c-.36 0-.71-.02-1.05-.06A12.8 12.8 0 0 0 7 19c8.4 0 13-7 13-13v-.6A9.18 9.18 0 0 0 23 3z"/>
            </svg>
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5a3.75 3.75 0 0 0 3.75-3.75v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5zm8.25 1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm-4.25 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
