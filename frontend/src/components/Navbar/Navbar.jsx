import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ClipboardCheck,
  Database,
  History,
  LayoutDashboard,
  LogOut,
  Menu,
  MessageSquare,
  MonitorCheck,
  User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// This would come from your auth system
const userRole = "doctor"; // Example default

const Navbar = () => {
  const [role, setRole] = useState(userRole);

  return (
    <nav className="border-b bg-background">
      <div className="flex h-16 items-center px-4 md:px-6">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-4">
              <Link href="/dashboard" className="flex items-center gap-2 text-lg font-semibold">
                <LayoutDashboard className="h-5 w-5" />
                Dashboard
              </Link>
              <Link href="/checklist" className="flex items-center gap-2 text-lg font-semibold">
                <ClipboardCheck className="h-5 w-5" />
                Checklist Progress
              </Link>
              <Link href="/chatbot" className="flex items-center gap-2 text-lg font-semibold">
                <MessageSquare className="h-5 w-5" />
                Aarogyam Chatbot
              </Link>
              <Link href="/knowledge-base" className="flex items-center gap-2 text-lg font-semibold">
                <Database className="h-5 w-5" />
                Medi Mitra
              </Link>
              {role === "admin" && (
                <>
                  <Link href="/audit-logs" className="flex items-center gap-2 text-lg font-semibold">
                    <History className="h-5 w-5" />
                    Audit Trail Logs
                  </Link>
                  <Link href="/monitoring" className="flex items-center gap-2 text-lg font-semibold">
                    <MonitorCheck className="h-5 w-5" />
                    Real-Time Monitoring
                  </Link>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <Activity className="h-6 w-6" />
            <span className="hidden md:inline-block">Medical Workflow</span>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <div className="hidden md:flex md:items-center md:gap-4">
            <Link href="/checklist">
              <Button variant="ghost">
                <ClipboardCheck className="mr-2 h-4 w-4" />
                New Checklist
              </Button>
            </Link>
            {role === "admin" && (
              <Link href="/monitoring">
                <Button variant="ghost">
                  <MonitorCheck className="mr-2 h-4 w-4" />
                  Monitoring
                </Button>
              </Link>
            )}
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">User menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{role.charAt(0).toUpperCase() + role.slice(1)} Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile" className="flex items-center gap-2">
                  Profile Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/sign-out" className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  Sign Out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;