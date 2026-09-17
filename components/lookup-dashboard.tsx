import { AlertCircle, Bell, Clock, FileText, TrendingUp, AlertTriangle, CheckCircle, Users, Phone, Mail, HelpCircle, Download, Upload, Calendar, BarChart3, DollarSign, Shield } from "lucide-react"

export function LookupDashboard() {
  return (
    <div className="space-y-1">
      {/* Welcome Banner */}
      <div className="bg-primary/5 border border-primary/20 p-1.5 rounded-none text-xs">
        <div className="font-bold text-foreground">Welcome back, Acme Insurance Services</div>
        <div className="text-muted-foreground">Monday, June 8, 2026 • 2:30 PM</div>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-4 gap-1">
        <div className="bg-card border border-border p-1.5">
          <div className="text-xs text-muted-foreground">Active Policies</div>
          <div className="text-lg font-bold text-foreground">47</div>
          <div className="text-xs text-green-600">+3 this month</div>
        </div>
        <div className="bg-card border border-border p-1.5">
          <div className="text-xs text-muted-foreground">Pending Requests</div>
          <div className="text-lg font-bold text-foreground">8</div>
          <div className="text-xs text-amber-600">2 overdue</div>
        </div>
        <div className="bg-card border border-border p-1.5">
          <div className="text-xs text-muted-foreground">Documents Available</div>
          <div className="text-lg font-bold text-foreground">156</div>
          <div className="text-xs text-muted-foreground">Latest: today</div>
        </div>
        <div className="bg-card border border-border p-1.5">
          <div className="text-xs text-muted-foreground">Open Claims</div>
          <div className="text-lg font-bold text-foreground">3</div>
          <div className="text-xs text-destructive">$125K total</div>
        </div>
      </div>

      {/* System Alerts */}
      <div className="bg-amber-50 border border-amber-200 p-1.5 flex items-start gap-1.5">
        <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-xs">
          <div className="font-bold text-amber-900">Maintenance Window</div>
          <div className="text-amber-800">System maintenance scheduled for tonight 10 PM - 2 AM EST. Plan accordingly.</div>
        </div>
      </div>

      {/* Account Status */}
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <CheckCircle className="w-3 h-3 text-green-600" />
            <span className="text-xs font-bold">Account Status</span>
          </div>
          <div className="text-xs text-muted-foreground">In Good Standing</div>
          <div className="text-xs text-green-600 font-bold">No issues</div>
        </div>
        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <Bell className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-bold">Messages</span>
          </div>
          <div className="text-xs text-muted-foreground">3 unread</div>
          <button className="text-xs text-primary font-bold hover:underline">View inbox</button>
        </div>
        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs font-bold">Last Access</span>
          </div>
          <div className="text-xs text-muted-foreground">June 7, 3:15 PM</div>
        </div>
      </div>

      {/* Quick Actions Grid */}
      <div className="bg-secondary/30 border border-border p-1.5">
        <div className="text-xs font-bold mb-1">QUICK ACTIONS</div>
        <div className="grid grid-cols-6 gap-0.5">
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <FileText className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">New Request</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <Upload className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">Upload</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <Download className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">Documents</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <Shield className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">Certificate</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <FileText className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">Claims</span>
          </button>
          <button className="flex flex-col items-center gap-0.5 p-1 bg-card border border-border hover:bg-secondary">
            <Calendar className="w-3 h-3 text-muted-foreground" />
            <span className="text-xs text-center">Schedule</span>
          </button>
        </div>
      </div>

      {/* Recent Policies Table */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">RECENT POLICIES</div>
        <table className="w-full text-xs">
          <thead className="bg-secondary/30 border-b border-border">
            <tr>
              <th className="text-left px-1.5 py-0.5 font-bold">Policy #</th>
              <th className="text-left px-1.5 py-0.5 font-bold">Insured</th>
              <th className="text-left px-1.5 py-0.5 font-bold">Status</th>
              <th className="text-left px-1.5 py-0.5 font-bold">Expires</th>
              <th className="text-left px-1.5 py-0.5 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            <tr className="hover:bg-secondary/30">
              <td className="px-1.5 py-0.5 font-bold text-primary">AZ-5969302-01</td>
              <td className="px-1.5 py-0.5">Acme Corp</td>
              <td className="px-1.5 py-0.5"><span className="bg-green-100 text-green-700 px-1 py-0 text-xs font-bold">Active</span></td>
              <td className="px-1.5 py-0.5">12/31/2026</td>
              <td className="px-1.5 py-0.5"><button className="text-primary font-bold hover:underline">Open</button></td>
            </tr>
            <tr className="hover:bg-secondary/30">
              <td className="px-1.5 py-0.5 font-bold text-primary">CA-7234521-02</td>
              <td className="px-1.5 py-0.5">Acme West</td>
              <td className="px-1.5 py-0.5"><span className="bg-green-100 text-green-700 px-1 py-0 text-xs font-bold">Active</span></td>
              <td className="px-1.5 py-0.5">03/15/2027</td>
              <td className="px-1.5 py-0.5"><button className="text-primary font-bold hover:underline">Open</button></td>
            </tr>
            <tr className="hover:bg-secondary/30">
              <td className="px-1.5 py-0.5 font-bold text-primary">TX-9812345-01</td>
              <td className="px-1.5 py-0.5">Acme South</td>
              <td className="px-1.5 py-0.5"><span className="bg-amber-100 text-amber-700 px-1 py-0 text-xs font-bold">Expiring</span></td>
              <td className="px-1.5 py-0.5">08/30/2026</td>
              <td className="px-1.5 py-0.5"><button className="text-primary font-bold hover:underline">Open</button></td>
            </tr>
            <tr className="hover:bg-secondary/30">
              <td className="px-1.5 py-0.5 font-bold text-primary">NY-5555555-03</td>
              <td className="px-1.5 py-0.5">Acme East</td>
              <td className="px-1.5 py-0.5"><span className="bg-green-100 text-green-700 px-1 py-0 text-xs font-bold">Active</span></td>
              <td className="px-1.5 py-0.5">06/30/2027</td>
              <td className="px-1.5 py-0.5"><button className="text-primary font-bold hover:underline">Open</button></td>
            </tr>
            <tr className="hover:bg-secondary/30">
              <td className="px-1.5 py-0.5 font-bold text-primary">WA-3333333-02</td>
              <td className="px-1.5 py-0.5">Acme Pacific</td>
              <td className="px-1.5 py-0.5"><span className="bg-green-100 text-green-700 px-1 py-0 text-xs font-bold">Active</span></td>
              <td className="px-1.5 py-0.5">09/15/2026</td>
              <td className="px-1.5 py-0.5"><button className="text-primary font-bold hover:underline">Open</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Pending Tasks & Requests */}
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-card border border-border overflow-hidden">
          <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">PENDING TASKS</div>
          <div className="p-1.5 space-y-1">
            <div className="flex items-start gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-foreground">Endorsement Approval Needed</div>
                <div className="text-muted-foreground">Policy AZ-5969302-01</div>
                <button className="text-xs text-primary font-bold hover:underline">Review</button>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <FileText className="w-3 h-3 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-foreground">Documents Awaiting Submission</div>
                <div className="text-muted-foreground">CA-7234521-02</div>
                <button className="text-xs text-primary font-bold hover:underline">Submit</button>
              </div>
            </div>
            <div className="flex items-start gap-1">
              <Clock className="w-3 h-3 text-destructive shrink-0 mt-0.5" />
              <div className="text-xs">
                <div className="font-bold text-foreground">Renewal Quote Expired</div>
                <div className="text-muted-foreground">TX-9812345-01 • 2 days</div>
                <button className="text-xs text-primary font-bold hover:underline">Renew Quote</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border overflow-hidden">
          <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">DOCUMENT REQUESTS</div>
          <div className="p-1.5 space-y-1">
            <div className="flex items-start justify-between gap-1">
              <div>
                <div className="text-xs font-bold">Certificate of Insurance</div>
                <div className="text-xs text-muted-foreground">Requested 2 hours ago</div>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-1 py-0 font-bold">Pending</span>
            </div>
            <div className="flex items-start justify-between gap-1">
              <div>
                <div className="text-xs font-bold">Loss Run Report</div>
                <div className="text-xs text-muted-foreground">Requested yesterday</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-1 py-0 font-bold">Ready</span>
            </div>
            <div className="flex items-start justify-between gap-1">
              <div>
                <div className="text-xs font-bold">Policy Declarations</div>
                <div className="text-xs text-muted-foreground">Requested 3 days ago</div>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-1 py-0 font-bold">Ready</span>
            </div>
          </div>
        </div>
      </div>

      {/* Claims & Coverage Summary */}
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-card border border-border overflow-hidden">
          <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">CLAIMS SUMMARY</div>
          <div className="p-1.5 space-y-0.5">
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Claims This Year:</span>
              <span className="text-xs font-bold">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Total Paid:</span>
              <span className="text-xs font-bold">$245,000</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Open Claims:</span>
              <span className="text-xs font-bold text-destructive">3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs text-muted-foreground">Loss Ratio:</span>
              <span className="text-xs font-bold">18%</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border overflow-hidden">
          <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">COVERAGE STATUS</div>
          <div className="p-1.5 space-y-0.5 text-xs">
            <div className="flex items-center justify-between">
              <span>General Liability</span>
              <span className="bg-green-100 text-green-700 px-1 py-0 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Property</span>
              <span className="bg-green-100 text-green-700 px-1 py-0 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Umbrella</span>
              <span className="bg-green-100 text-green-700 px-1 py-0 font-bold">Active</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Workers Comp</span>
              <span className="bg-amber-100 text-amber-700 px-1 py-0 font-bold">Expiring</span>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border overflow-hidden">
          <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">RENEWALS DUE</div>
          <div className="p-1.5 space-y-0.5">
            <div className="text-xs">
              <div className="font-bold">TX-9812345-01</div>
              <div className="text-muted-foreground">Due: Aug 30, 2026</div>
              <div className="text-amber-600 font-bold">83 days</div>
            </div>
            <div className="text-xs mt-1">
              <div className="font-bold">WA-3333333-02</div>
              <div className="text-muted-foreground">Due: Sep 15, 2026</div>
              <div className="text-amber-600 font-bold">99 days</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Feed */}
      <div className="bg-card border border-border overflow-hidden">
        <div className="px-1.5 py-1 border-b border-border bg-secondary font-bold text-xs">RECENT ACTIVITY</div>
        <div className="p-1.5 space-y-1 text-xs max-h-20 overflow-y-auto">
          <div className="flex gap-1">
            <span className="text-muted-foreground shrink-0">2h ago</span>
            <span>Viewed policy AZ-5969302-01</span>
          </div>
          <div className="flex gap-1">
            <span className="text-muted-foreground shrink-0">4h ago</span>
            <span>Downloaded Loss Run Report for CA-7234521-02</span>
          </div>
          <div className="flex gap-1">
            <span className="text-muted-foreground shrink-0">1d ago</span>
            <span>Requested Certificate of Insurance</span>
          </div>
          <div className="flex gap-1">
            <span className="text-muted-foreground shrink-0">3d ago</span>
            <span>Submitted coverage change request</span>
          </div>
          <div className="flex gap-1">
            <span className="text-muted-foreground shrink-0">5d ago</span>
            <span>Logged in from 192.168.1.1</span>
          </div>
        </div>
      </div>

      {/* Support & Resources */}
      <div className="grid grid-cols-3 gap-1">
        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <HelpCircle className="w-3 h-3 text-blue-600" />
            <span className="text-xs font-bold">Support</span>
          </div>
          <div className="space-y-0.5 text-xs">
            <div><span className="text-muted-foreground">Phone:</span> <span className="font-bold">(800) 555-0100</span></div>
            <div><span className="text-muted-foreground">Email:</span> <span className="font-bold">support@ins.com</span></div>
            <button className="text-primary font-bold hover:underline">Live Chat</button>
          </div>
        </div>

        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <FileText className="w-3 h-3 text-green-600" />
            <span className="text-xs font-bold">Resources</span>
          </div>
          <div className="space-y-0.5 text-xs">
            <button className="text-primary font-bold hover:underline block">Portal User Guide</button>
            <button className="text-primary font-bold hover:underline block">FAQ</button>
            <button className="text-primary font-bold hover:underline block">Video Tutorials</button>
          </div>
        </div>

        <div className="bg-card border border-border p-1.5">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="w-3 h-3 text-purple-600" />
            <span className="text-xs font-bold">Usage Stats</span>
          </div>
          <div className="space-y-0.5 text-xs">
            <div><span className="text-muted-foreground">Inquiries/Month:</span> <span className="font-bold">12</span></div>
            <div><span className="text-muted-foreground">Avg Response:</span> <span className="font-bold">2h</span></div>
            <div><span className="text-muted-foreground">Portal Uptime:</span> <span className="font-bold text-green-600">99.9%</span></div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-border pt-1 flex items-center justify-between flex-wrap gap-1">
        <div className="flex gap-2 text-xs">
          <button className="text-primary hover:underline">System Status</button>
          <span className="text-muted-foreground">•</span>
          <button className="text-primary hover:underline">Contact Us</button>
          <span className="text-muted-foreground">•</span>
          <button className="text-primary hover:underline">Terms & Privacy</button>
          <span className="text-muted-foreground">•</span>
          <button className="text-primary hover:underline">API Docs</button>
        </div>
        <div className="text-xs text-muted-foreground">
          Session: 2:30 PM • Session expires in 57 minutes
        </div>
      </div>
    </div>
  )
}
