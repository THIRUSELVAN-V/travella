import React from 'react'
import AdminLayout from '../../components/AdminLayout'

export const AdminReports = () => {
  const reports = [
    { id: 1, name: 'Monthly Travel Report', type: 'Monthly', lastGenerated: '2024-07-01', status: 'Ready', size: '2.3 MB' },
    { id: 2, name: 'Expense Analysis', type: 'Quarterly', lastGenerated: '2024-06-30', status: 'Ready', size: '1.8 MB' },
    { id: 3, name: 'Traveler Activity', type: 'Weekly', lastGenerated: '2024-07-15', status: 'Generating', size: '0.5 MB' },
    { id: 4, name: 'Budget Utilization', type: 'Monthly', lastGenerated: '2024-07-01', status: 'Ready', size: '3.1 MB' },
    { id: 5, name: 'Policy Compliance', type: 'Quarterly', lastGenerated: '2024-06-30', status: 'Ready', size: '1.2 MB' }
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ready': return 'bg-green-500/20 text-green-400'
      case 'Generating': return 'bg-yellow-500/20 text-yellow-400'
      case 'Failed': return 'bg-red-500/20 text-red-400'
      default: return 'bg-slate-500/20 text-slate-400'
    }
  }

  return (
    <AdminLayout>
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            <span className="material-symbols-outlined">add</span>
            Generate Report
          </button>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Total Reports</p>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">This Month</p>
          <p className="text-3xl font-bold text-blue-400">23</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Ready</p>
          <p className="text-3xl font-bold text-green-400">142</p>
        </div>
        <div className="flex flex-col gap-2 rounded-lg p-6 bg-slate-900">
          <p className="text-slate-400 text-sm font-medium">Generating</p>
          <p className="text-3xl font-bold text-yellow-400">14</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Quick Reports</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-blue-400">assessment</span>
            <div className="text-left">
              <p className="font-medium">Monthly Summary</p>
              <p className="text-sm text-slate-400">Generate monthly travel summary</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-green-400">trending_up</span>
            <div className="text-left">
              <p className="font-medium">Expense Trends</p>
              <p className="text-sm text-slate-400">Analyze spending patterns</p>
            </div>
          </button>
          <button className="flex items-center gap-3 p-4 rounded-lg bg-slate-900 hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined text-purple-400">people</span>
            <div className="text-left">
              <p className="font-medium">Traveler Insights</p>
              <p className="text-sm text-slate-400">Travel behavior analysis</p>
            </div>
          </button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="rounded-lg bg-slate-900">
        <div className="p-6 border-b border-slate-800">
          <h2 className="text-xl font-bold">Recent Reports</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-800">
              <tr>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">ID</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Name</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Type</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Status</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Last Generated</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Size</th>
                <th className="px-4 py-3 text-sm font-medium text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800">
              {reports.map((report) => (
                <tr key={report.id}>
                  <td className="px-4 py-3 text-sm font-medium">#{report.id}</td>
                  <td className="px-4 py-3 text-sm font-medium">{report.name}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{report.type}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(report.status)}`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-slate-400">{report.lastGenerated}</td>
                  <td className="px-4 py-3 text-sm text-slate-400">{report.size}</td>
                  <td className="px-4 py-3 text-sm">
                    <div className="flex gap-2">
                      <button className="text-blue-400 hover:text-blue-300">
                        <span className="material-symbols-outlined text-sm">download</span>
                      </button>
                      <button className="text-green-400 hover:text-green-300">
                        <span className="material-symbols-outlined text-sm">visibility</span>
                      </button>
                      <button className="text-red-400 hover:text-red-300">
                        <span className="material-symbols-outlined text-sm">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
