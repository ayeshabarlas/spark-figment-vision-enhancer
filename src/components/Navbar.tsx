import { 
  Bell, Search, Settings, LogOut, UserCircle, FileText, 
  LayoutDashboard, Clock, Users, BarChart3, UserPlus, 
  MessageSquare, CheckSquare, Calendar, Lightbulb, 
  Building2, BookOpen, FileText as Policy, HelpCircle, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: Clock, label: "Time Tracking", path: "/time-tracking" },
  { icon: Users, label: "Meeting", path: "/meeting" },
  { icon: Users, label: "Employees", path: "/employees" },
  { icon: BarChart3, label: "Company Statistic", path: "/statistics" },
  { icon: UserPlus, label: "Recruitment", path: "/recruitment" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: CheckSquare, label: "Task", path: "/task" },
  { icon: Calendar, label: "Calendar", path: "/calendar" },
  { icon: Lightbulb, label: "Project Collaboration", path: "/projects" },
  { icon: Building2, label: "HMRC", path: "/hmrc" },
  { icon: BookOpen, label: "NewsFeed", path: "/newsfeed" },
  { icon: BookOpen, label: "Course", path: "/course" },
  { icon: Policy, label: "Policies", path: "/policies" },
  { icon: HelpCircle, label: "Metro Assistant", path: "/assistant" },
  { icon: Settings, label: "Setting", path: "/settings" },
];

export const Navbar = () => {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const getActiveLabel = () => {
    const activeItem = menuItems.find(item => item.path === location.pathname);
    return activeItem?.label || "Dashboard";
  };

  return (
    <>
      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 z-40 h-screen w-64 bg-white border-r border-gray-200 transition-transform ${!isSidebarOpen ? '-translate-x-full' : ''}`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-3 h-6 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                <div className="w-3 h-6 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                <div className="w-3 h-6 bg-blue-400 rounded-sm transform -skew-x-12"></div>
              </div>
              <div>
                <h1 className="text-sm font-bold text-gray-900">METRO SOLVER</h1>
                <p className="text-[10px] text-gray-500">COMPLETE HR SOLUTION</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="w-8 h-8 rounded-full bg-gray-900 text-white hover:bg-gray-800"
              onClick={() => setIsSidebarOpen(false)}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-4">
            <ul className="space-y-1 px-3">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.label}>
                    <Link to={item.path}>
                      <button
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-colors ${
                          isActive
                            ? "bg-purple-600 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                        <span>{item.label}</span>
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Actions */}
          <div className="p-4 border-t border-gray-200 space-y-2">
            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-gray-100">
              <HelpCircle className="w-5 h-5 mr-3" />
              <span className="text-sm">Help</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50">
              <LogOut className="w-5 h-5 mr-3" />
              <span className="text-sm">Log Out</span>
            </Button>
          </div>
        </div>
      </aside>

      {/* Top Header */}
      <header className={`fixed top-0 right-0 z-30 h-16 bg-white border-b border-gray-200 transition-all ${isSidebarOpen ? 'left-64' : 'left-0'}`}>
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="mr-2"
              >
                <ChevronRight className="w-5 h-5 rotate-180" />
              </Button>
            )}
            <h2 className="text-xl font-semibold text-gray-900">{getActiveLabel()}</h2>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 cursor-pointer">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                    <AvatarFallback className="bg-blue-600 text-white">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-gray-500">john.doe@example.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>My Files</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer text-red-600 focus:text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
    </>
  );
};
