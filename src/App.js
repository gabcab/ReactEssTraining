import './App.css';
import { Link, Outlet } from "react-router-dom";

export function Home () {
  return (
    <div>
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/contactus">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About () {
  return (
    <div>
        <nav>
          <Link to="/">Home</Link> | <Link to="/contactus">Contact Us</Link>
        </nav>
        <h1>About</h1>
        <Outlet/>
    </div>
  );
}

export function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

export function ContactUs () {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Us</Link>
      </nav>
      <h1>Contact</h1>
    </div>
  );
}



export function App(props) {

  return <Home />
}

