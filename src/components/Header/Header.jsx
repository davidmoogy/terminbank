import { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <header className="header-container">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>

      <nav className="nav-links">
        <div className="dropdown">
          <span
            className="about-link"
            onClick={() => setShow(!show)}
          >
            ჩვნეს შესახებ
          </span>

          {show && (
            <div className="dropdown-menu">
              <Link to="/gallery">გალერეა</Link>
              <Link to="/team">ჩვენი გუნდი</Link>
              <Link to="/partners">პარტნიორები</Link>
              <Link to="/neologizmebi">ნეოლოგიზმები</Link>
              <Link to="/ambebi">ახალი ამბები</Link>
            </div>
          )}
        </div>

        <Link to="/terminbanki">ტერმინბანკი</Link>
        <Link to="/saswavlo">სასწავლო შემეცნებითი მასალა</Link>
        <Link to="/samecniero">სამეცნიერო ბაზა</Link>
        <Link to="/contact">კონტაქტი</Link>
      </nav>

      <div className="button-login">
        <button>
          <img src="/login.png" alt="Login" />
        </button>
      </div>
    </header>
  );
}