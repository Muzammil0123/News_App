import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg bg-dark ">
        <div className="container-fluid ">
          <a className="navbar-brand ">
            <Link to="/" style={{ color: "orange", textDecoration: "none" }}>
              NEWS
            </Link>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Home
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white">
                  <Link
                    to="/sports"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Sports
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page">
                  <Link
                    to="/science"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Science
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page">
                  <Link
                    to="/entertainment"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Entertainment
                  </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active text-white" aria-current="page">
                  <Link
                    to="/technology"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    Technology
                  </Link>
                </a>
              </li>
            </ul>
            <form className="d-flex text-white" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
