export default function Bracket() {
  return (
    <div className="page-container flex-1">
      <div className="glass-card w-full p-8 md:p-12 min-h-[500px] flex flex-col items-center justify-center space-y-6">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-brand-400 to-brand-600 bg-clip-text text-transparent">Tournament Bracket</h1>
        <p className="text-slate-400 text-lg">
          No active tournament. Start a new tournament to view the bracket!
        </p>
      </div>
    </div>
  );
}
