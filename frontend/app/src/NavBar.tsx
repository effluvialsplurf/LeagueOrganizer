import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const isLoggedIn = false;
  const location = useLocation();

  const getLinkClass = (path: string) => {
    const isActive = location.pathname.toLowerCase() === path.toLowerCase();
    return `text-sm font-medium transition-colors px-3 py-2 rounded-md ${isActive
      ? "text-brand-400 bg-brand-500/10"
      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
      }`;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/70 backdrop-blur-xl border-b border-white/5 supports-[backdrop-filter]:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-white font-bold tracking-tight text-lg hidden sm:block">
                League<span className="text-brand-400">Organizer</span>
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-1">
              <Link to="/bracket" className={getLinkClass("/bracket")}>Bracket</Link>
              <Link to="/league" className={getLinkClass("/league")}>League</Link>
              <Link to="/standings" className={getLinkClass("/standings")}>Standings</Link>
              <Link to="/stats" className={getLinkClass("/stats")}>Stats</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <Link to="/user" className={getLinkClass("/user")}>Profile</Link>
            ) : (
              <Link to="/login" className={getLinkClass("/login")}>Sign In</Link>
            )}
            <Link to="/settings" className="text-slate-400 hover:text-white transition-colors p-2 rounded-full hover:bg-slate-800/50">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
