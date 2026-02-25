import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="flex">
      <div className="flex items-center">
        <Link to="/" className="text-white hover:text-blue-300  ml-3">
          League Organizer
        </Link>
      </div>
    </div >
  );
}
