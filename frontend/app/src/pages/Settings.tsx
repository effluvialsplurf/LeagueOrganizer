export default function Settings() {
  return (
    <div className="page-container flex-1">
      <div className="max-w-3xl mx-auto w-full space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-slate-400">Manage your application preferences and profile configurations.</p>
        </div>
        
        <div className="glass-card p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-semibold text-white border-b border-white/5 pb-4">General Configuration</h2>
          
          <div className="space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Display Name</label>
              <input type="text" className="input-base" placeholder="Enter your display name" />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-300">Email Notifications</label>
              <select className="input-base">
                <option>All notifications</option>
                <option>Important only</option>
                <option>None</option>
              </select>
            </div>
            
            <button className="px-4 py-2 mt-4 bg-brand-500 hover:bg-brand-400 text-white rounded-lg font-medium shadow-md shadow-brand-500/20 transition-all active:scale-95 cursor-pointer">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
