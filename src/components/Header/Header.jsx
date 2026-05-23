import { useState } from "react";
import "./header.css";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="header-container">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <div className="dropdown">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setShow(!show);
            }}
            className="about-link"
          >
            ჩვნეს შესახებ
          </a>

          {show && (
            <div className="dropdown-menu">
              <a href="#">გალერეა</a>
              <a href="#">ჩვენი გუნდი</a>
              <a href="#">პარტნიორები</a>
              <a href="#">ნეოლოგიზმები</a>
              <a href="">ახალი ამბები</a>
            </div>
          )}
        </div>

        <a href="#">ტერმინბანკი</a>
        <a href="#">სასწავლო შემეცნებითი მასალა</a>
        <a href="#">სამეცნიერო ბაზა</a>
        <a href="#">კონტაქტი</a>
      </nav>

      <div className="button-login">
        <button>
          <img src="/login.png" alt="Login" />
        </button>
      </div>
    </header>
  );
}