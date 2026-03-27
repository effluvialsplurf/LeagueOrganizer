export default function Standings() {
  return (
    <div className="page-container flex-1">
      <div className="glass-card w-full p-8 md:p-12">
        <div className="mb-8 border-b border-white/5 pb-6">
          <h1 className="text-3xl font-bold text-white mb-2">Current Standings</h1>
          <p className="text-slate-400">Regular season team rankings and performance.</p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-300">
            <thead className="bg-slate-800/50 text-xs uppercase text-slate-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-tl-lg">Pos</th>
                <th scope="col" className="px-6 py-3">Team</th>
                <th scope="col" className="px-6 py-3">W</th>
                <th scope="col" className="px-6 py-3">L</th>
                <th scope="col" className="px-6 py-3 rounded-tr-lg">Win %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 font-medium text-brand-400">1</td>
                <td className="px-6 py-4 font-semibold text-white">Placeholder Team A</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">.000</td>
              </tr>
              <tr className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">2</td>
                <td className="px-6 py-4 font-semibold text-white">Placeholder Team B</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">0</td>
                <td className="px-6 py-4">.000</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
