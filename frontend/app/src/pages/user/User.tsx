export default function User() {
  return (
    <div className="page-container flex-1 mt-8">
      <div className="glass-card w-full p-8 md:p-12 text-center space-y-6">
        <div className="w-24 h-24 bg-gradient-to-br from-brand-400 to-brand-600 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-brand-500/20">
          <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold text-white">User Profile</h1>
        <p className="text-slate-400 text-lg">
          Manage your account details and view your personal statistics.
        </p>
      </div>
    </div>
  );
}
