import { useUser } from "../../contexts/UserContext.tsx";

// Mock Data for the components
const MOCK_TEAM_STANDING = {
  rank: "#4",
  record: "12 - 4"
};

const MOCK_STATS = [
  { label: "Points", value: "1,240" },
  { label: "Assists", value: "452" }
];

const MOCK_LEAGUES = ["Summer Pro League", "Weekend Warriors", "City Cup 2026"];

const MOCK_UPCOMING_MATCHES = [
  {
    round: "QUARTER-FINALS",
    opponent: "Thunder Volts",
    time: "Tomorrow, 7:00 PM",
    venue: "Main Arena"
  }
];

// Component Sections
const TeamStandingSection = ({ rank, record }: { rank: string; record: string }) => (
  <div className="glass-card p-6 space-y-4">
    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
      <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
      Team Standing
    </h2>
    <div className="bg-slate-800/50 rounded-lg p-4 border border-white/5">
      <div className="flex justify-between items-center">
        <span className="text-slate-400">Current Rank</span>
        <span className="text-white font-bold text-xl">{rank}</span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <span className="text-slate-400">Record</span>
        <span className="text-white">{record}</span>
      </div>
    </div>
  </div>
);

const IndividualStatsSection = ({ stats }: { stats: { label: string; value: string }[] }) => (
  <div className="glass-card p-6 space-y-4">
    <h2 className="text-xl font-semibold text-white flex items-center gap-2">
      <svg className="w-5 h-5 text-brand-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      Individual Stats
    </h2>
    <div className="grid grid-cols-2 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-slate-800/50 rounded-lg p-3 border border-white/5 text-center">
          <div className="text-xs text-slate-500 uppercase font-semibold">{stat.label}</div>
          <div className="text-xl font-bold text-white">{stat.value}</div>
        </div>
      ))}
    </div>
  </div>
);

const ActiveLeaguesSection = ({ leagues }: { leagues: string[] }) => (
  <div className="glass-card p-6 space-y-4">
    <h2 className="text-xl font-semibold text-white">Active Leagues</h2>
    <ul className="space-y-3">
      {leagues.map((league, i) => (
        <li key={i} className="flex items-center justify-between p-3 bg-white/5 rounded-md border border-white/5">
          <span className="text-slate-300">{league}</span>
          <span className="text-xs px-2 py-1 bg-brand-500/20 text-brand-400 rounded">Active</span>
        </li>
      ))}
    </ul>
  </div>
);

const UpcomingMatchesSection = ({ matches, teamName }: { matches: any[]; teamName: string }) => (
  <div className="glass-card p-6 space-y-4">
    <h2 className="text-xl font-semibold text-white">Upcoming Bracket Matches</h2>
    <div className="space-y-3">
      {matches.map((match, i) => (
        <div key={i} className="p-4 bg-brand-500/10 border border-brand-500/20 rounded-lg">
          <div className="text-xs text-brand-400 font-bold mb-1">{match.round}</div>
          <div className="flex justify-between items-center">
            <span className="text-white font-medium">{teamName}</span>
            <span className="text-slate-500 text-sm">vs</span>
            <span className="text-slate-300">{match.opponent}</span>
          </div>
          <div className="text-xs text-slate-500 mt-2">{match.time} • {match.venue}</div>
        </div>
      ))}
    </div>
  </div>
);

export default function User() {
  const { user } = useUser();

  if (!user) {
    return (
      <div className="page-container flex-1 mt-8">
        <div className="glass-card w-full p-8 text-center">
          <p className="text-slate-400">Please sign in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container flex-1 mt-8 space-y-6">
      {/* Profile Header */}
      <div className="glass-card w-full p-8 md:p-12 text-center space-y-6">
        <div className="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-brand-500/20">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white">{user.username}</h1>
          <p className="text-brand-400 text-lg font-medium">{user.teamName}</p>
        </div>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Manage your account details and view your personal statistics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TeamStandingSection {...MOCK_TEAM_STANDING} />
        <IndividualStatsSection stats={MOCK_STATS} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ActiveLeaguesSection leagues={MOCK_LEAGUES} />
        <UpcomingMatchesSection matches={MOCK_UPCOMING_MATCHES} teamName={user.teamName} />
      </div>
    </div>
  );
}
