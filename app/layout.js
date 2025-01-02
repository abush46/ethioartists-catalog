import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBootstrap from "./AddBootstrap";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ethiopian Artist",
  description: "Ethiopian movie and music profiles for artists",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AddBootstrap />
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <Link className="navbar-brand" href="/">
                EthioEnt
              </Link>
              <button
                class="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                  <li class="nav-item">
                    <Link className="nav-link" href="/">
                      Home
                      <span class="visually-hidden">(current)</span>
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" href="/filmography">
                      Filmography
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" href="/discography">
                      Discography
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" href="/Home">
                      About
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link className="nav-link" href="/Home">
                      About
                    </Link>
                  </li>
                </ul>
                <form class="d-flex my-2 my-lg-0">
                  <input
                    class="form-control me-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    class="btn btn-outline-success my-2 my-sm-0"
                    type="submit"
                  >
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </header>

        {children}
        <footer className="text-center bg-body-tertiary fixed-bottom">
          <div class="text-center p-3">© 2021 Copyright:</div>
        </footer>
      </body>
    </html>
  );
}
