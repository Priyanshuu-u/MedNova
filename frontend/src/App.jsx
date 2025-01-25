import React, { Component } from "react";
import { Activity, ClipboardCheck, Database, History, LayoutDashboard, LogOut, Menu, MessageSquare, MonitorCheck, User } from "lucide-react";

const userRole = "doctor"; // Example default

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: userRole,
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));
  };

  render() {
    const { role, isMenuOpen } = this.state;

    return (
      <nav className="border-b bg-gray-100">
        <div className="flex h-16 items-center px-4 md:px-6">
          <button
            className="md:hidden"
            onClick={this.toggleMenu}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>

          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
              <div className="grid gap-4 py-4">
                <a href="/dashboard" className="flex items-center gap-2 text-lg font-semibold px-4">
                  <LayoutDashboard className="h-5 w-5" />
                  Dashboard
                </a>
                <a href="/checklist" className="flex items-center gap-2 text-lg font-semibold px-4">
                  <ClipboardCheck className="h-5 w-5" />
                  Checklist Progress
                </a>
                <a href="/chatbot" className="flex items-center gap-2 text-lg font-semibold px-4">
                  <MessageSquare className="h-5 w-5" />
                  Aarogyam Chatbot
                </a>
                <a href="/knowledge-base" className="flex items-center gap-2 text-lg font-semibold px-4">
                  <Database className="h-5 w-5" />
                  Medi Mitra
                </a>
                {role === "admin" && (
                  <>
                    <a href="/audit-logs" className="flex items-center gap-2 text-lg font-semibold px-4">
                      <History className="h-5 w-5" />
                      Audit Trail Logs
                    </a>
                    <a href="/monitoring" className="flex items-center gap-2 text-lg font-semibold px-4">
                      <MonitorCheck className="h-5 w-5" />
                      Real-Time Monitoring
                    </a>
                  </>
                )}
              </div>
            </div>
          )}

          <div className="flex items-center gap-4">
            <a href="/dashboard" className="flex items-center gap-2 font-semibold">
              <Activity className="h-6 w-6" />
              <span className="hidden md:inline-block">Medical Workflow</span>
            </a>
          </div>

          <div className="ml-auto flex items-center gap-4">
            <div className="hidden md:flex md:items-center md:gap-4">
              <a href="/checklist">
                <button className="flex items-center gap-2 text-lg font-semibold">
                  <ClipboardCheck className="mr-2 h-4 w-4" />
                  New Checklist
                </button>
              </a>
              {role === "admin" && (
                <a href="/monitoring">
                  <button className="flex items-center gap-2 text-lg font-semibold">
                    <MonitorCheck className="mr-2 h-4 w-4" />
                    Monitoring
                  </button>
                </a>
              )}
            </div>

            <div className="relative">
              <button className="flex items-center gap-2 text-lg font-semibold">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </button>
              {/* User menu dropdown */}
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                <div className="px-4 py-2">
                  <span className="block text-sm font-medium">{role.charAt(0).toUpperCase() + role.slice(1)} Account</span>
                </div>
                <div className="border-t"></div>
                <div className="py-1">
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile Settings</a>
                  <a href="/sign-out" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign Out</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;