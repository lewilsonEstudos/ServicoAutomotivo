import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-2xl font-semibold text-gray-900 dark:text-white">
            OFICINAÇO
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Seu carro quebrou, nossa alegria.
          </span>
        </Link>
        <div className="hidden w-full md:flex md:items-center md:justify-end" id="navbar-default">
          <ul className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
            <li>
              <Link
                to="/"
                className="block px-4 py-2 text-blue-700 bg-blue-100 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-blue-400 dark:bg-gray-800 dark:hover:text-blue-500 hover:bg-blue-200 transition duration-200"
                aria-current="page"
              >
                Listar Serviço
              </Link>
            </li>
            <li>
              <Link
                to="/cadastro"
                className="block px-4 py-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 dark:hover:text-blue-400 dark:bg-gray-800 transition duration-200"
              >
                Cadastrar Serviço
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
