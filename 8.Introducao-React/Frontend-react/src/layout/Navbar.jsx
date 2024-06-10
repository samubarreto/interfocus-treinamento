import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();  // Hook que retorna a localização atual da rota

  // Array de rotas válidas
  const validPaths = ['/', '/home', '/alunos', '/alunos/criar', '/alunos/editar/:codigo', '/alunos/deletar/:codigo', '/cursos', '/cursos/criar', '/cursos/editar/:codigo', '/cursos/deletar/:codigo'];

  // Função que retorna a classe apropriada com base no caminho atual
  const getClass = (path) => {
    // Verifica se a rota atual é válida ou não catalogada
    const isHome = location.pathname === path || (path === '/home' && (location.pathname === '/' || !validPaths.includes(location.pathname)));
    return isHome ? 'header-item selected' : 'header-item';
  };

  return (
    <header>
      <nav className="wrapper" id="nav-bar">
        <div className="header-section">
          <Link to="/home">
            <div className={getClass('/home')} id="hi-home">
              <svg xmlns="http://www.w3.org/2000/svg" className="base-icon black" viewBox="0 0 16 16">
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
            </div>
          </Link>
        </div>

        <span className="vertical-bar"></span>

        <div className="header-section">
          <Link to="/cursos">
            <div className={getClass('/cursos')} id="hi-cursos">
              <svg xmlns="http://www.w3.org/2000/svg" className="base-icon black" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5M8.16 4.1a.178.178 0 0 0-.32 0l-.634 1.285a.18.18 0 0 1-.134.098l-1.42.206a.178.178 0 0 0-.098.303L6.58 6.993c.042.041.061.1.051.158L6.39 8.565a.178.178 0 0 0 .258.187l1.27-.668a.18.18 0 0 1 .165 0l1.27.668a.178.178 0 0 0 .257-.187L9.368 7.15a.18.18 0 0 1 .05-.158l1.028-1.001a.178.178 0 0 0-.098-.303l-1.42-.206a.18.18 0 0 1-.134-.098z" />
              </svg>
              Cursos
            </div>
          </Link>
          <span className="vertical-bar smaller"></span>
          <Link to="/cursos/criar">
            <div className={getClass('/cursos/criar')} id="hi-novo-curso">
              <svg xmlns="http://www.w3.org/2000/svg" className="base-icon black" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5m6.5-11a.5.5 0 0 0-1 0V6H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V7H10a.5.5 0 0 0 0-1H8.5z" />
              </svg>
              Novo Curso
            </div>
          </Link>
        </div>

        <span className="vertical-bar"></span>

        <div className="header-section">
          <Link to="/alunos">
            <div className={getClass('/alunos')} id="hi-alunos">
              <svg xmlns="http://www.w3.org/2000/svg" className="base-icon black" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              Alunos
            </div>
          </Link>
          <span className="vertical-bar smaller"></span>
          <Link to="/alunos/criar">
            <div className={getClass('/alunos/criar')} id="hi-novo-aluno">
              <svg xmlns="http://www.w3.org/2000/svg" className="base-icon black" viewBox="0 0 16 16">
                <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
              </svg>
              Novo Aluno
            </div>
          </Link>
        </div>
      </nav>
    </header>
  );
}
