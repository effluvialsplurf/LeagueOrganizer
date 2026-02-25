import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <Link to="/" className="text-white hover:text-blue-300  ml-3">
          League Organizer
        </Link>
        <Link to="/bracket" className="text-white hover:text-blue-300 ml-3">
          Bracket
        </Link>
        <Link to="/League" className="text-white hover:text-blue-300 ml-3">
          League
        </Link>
        <Link to="/Standings" className="text-white hover:text-blue-300 ml-3">
          Standings
        </Link>
        <Link to="/Stats" className="text-white hover:text-blue-300 ml-3">
          Stats
        </Link>
        <Link to="/Settings" className="text-white hover:text-blue-300 ml-3">
          Settings
        </Link>
      </div>
    </div >
  );
}
