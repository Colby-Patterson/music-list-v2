import { Link, Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <div className="navbar">
        <Link to="/">Link</Link>
      </div>
      <div className="outlet">
        <Outlet />
      </div>
    </div>
  )
}