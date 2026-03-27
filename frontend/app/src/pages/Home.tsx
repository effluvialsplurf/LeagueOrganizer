import { Link } from "react-router-dom";
import { Trophy, Activity, ListOrdered } from "lucide-react";

export default function Home() {

  const hero = () => {
    return (
      <div className="page-container flex-1 pb-4">
        <div className="glass-card p-8 md:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Manage your <span className="text-brand-400">Leagues</span> easily.
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl text-balance">
              Welcome to League Organizer. Setup your brackets, view stats, and keep track of standings all in one place.
            </p>
          </div>
        </div>
      </div>
    )
  }

  const features = () => {
    return (
      <div className="page-container pt-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link to="/bracket" className="glass-card p-6 hover:border-brand-500/50 hover:bg-slate-800/40 transition-all group cursor-pointer block">
            <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Trophy size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">Live Brackets</h3>
            <p className="text-slate-400 text-sm">Create and manage tournament brackets with ease.</p>
          </Link>
          <Link to="/stats" className="glass-card p-6 hover:border-brand-500/50 hover:bg-slate-800/40 transition-all group cursor-pointer block">
            <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Activity size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">Detailed Stats</h3>
            <p className="text-slate-400 text-sm">Track player and team performance across the season.</p>
          </Link>
          <Link to="/standings" className="glass-card p-6 hover:border-brand-500/50 hover:bg-slate-800/40 transition-all group cursor-pointer block">
            <div className="w-12 h-12 bg-brand-500/10 text-brand-400 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <ListOrdered size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-brand-400 transition-colors">Real-time Standings</h3>
            <p className="text-slate-400 text-sm">Keep everyone updated with automatic standings calculation.</p>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col flex-1">
      {hero()}
      {features()}
    </div>
  )
}
