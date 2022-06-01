import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Welcome</Link>
        <Link to="/songlist">Songs</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
      <div>
        <p>Footer</p>
      </div>
    </div>
  )
}