import { 
  Bell, Search, Settings, LogOut, UserCircle, FileText, 
  LayoutDashboard, Clock, Users, BarChart3, UserPlus, 
  MessageSquare, CheckSquare, Calendar, Lightbulb, 
  Building2, BookOpen, FileText as Policy, HelpCircle, 
  ChevronLeft, ChevronRight, Menu
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
];

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const getActiveLabel = () => {
    const activeItem = menuItems.find(item => item.path === location.pathname);
    return activeItem?.label || "Dashboard";
  };

  return (
    <>
      {/* Sidebar - Left Side */}
      <aside className={`fixed left-0 top-0 z-40 h-screen bg-white border-r border-gray-200 transition-all duration-300 ${
        isSidebarOpen ? 'w-64' : 'w-16'
      }`}>
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 h-16">
            {isSidebarOpen ? (
              <>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2.5 h-5 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-2.5 h-5 bg-blue-600 rounded-sm transform -skew-x-12"></div>
                    <div className="w-2.5 h-5 bg-blue-400 rounded-sm transform -skew-x-12"></div>
                  </div>
                  <div>
                    <h1 className="text-xs font-bold text-gray-900">METRO SOLVER</h1>
                    <p className="text-[9px] text-gray-500">HR SOLUTION</p>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="w-7 h-7 rounded-full hover:bg-gray-100"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-7 h-7 rounded-full hover:bg-gray-100 mx-auto"
                onClick={() => setIsSidebarOpen(true)}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            )}
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 overflow-y-auto py-3 px-2">
            <ul className="space-y-1">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.label}>
                    <Link to={item.path}>
                      <button
                        className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all ${
                          isActive
                            ? "bg-purple-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        } ${!isSidebarOpen ? 'justify-center' : ''}`}
                        title={!isSidebarOpen ? item.label : ''}
                      >
                        <item.icon className="w-5 h-5 flex-shrink-0" />
                        {isSidebarOpen && <span className="truncate">{item.label}</span>}
                      </button>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Bottom Section */}
          <div className="p-3 border-t border-gray-200 space-y-1">
            <Link to="/settings">
              <Button 
                variant="ghost" 
                className={`w-full ${isSidebarOpen ? 'justify-start' : 'justify-center px-0'} text-gray-700 hover:bg-gray-100`}
              >
                <Settings className="w-5 h-5 flex-shrink-0" />
                {isSidebarOpen && <span className="ml-3 text-sm">Settings</span>}
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              className={`w-full ${isSidebarOpen ? 'justify-start' : 'justify-center px-0'} text-red-600 hover:bg-red-50`}
            >
              <LogOut className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span className="ml-3 text-sm">Log Out</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Top Navbar - Horizontal */}
      <header className={`sticky top-0 z-30 w-full border-b border-gray-200 bg-white/95 backdrop-blur transition-all duration-300 ${
        isSidebarOpen ? 'ml-64' : 'ml-16'
      }`}>
        <div className="flex h-16 items-center justify-between px-6">
          {/* Left Side - Title & Quick Nav */}
          <div className="flex items-center gap-6">
            <h2 className="text-lg font-semibold text-gray-900">{getActiveLabel()}</h2>
            
            <nav className="hidden lg:flex items-center gap-2">
              <Link to="/">
                <Button variant="ghost" size="sm" className="text-sm">Dashboard</Button>
              </Link>
              <Link to="/files">
                <Button variant="ghost" size="sm" className="text-sm">Files</Button>
              </Link>
              <Link to="/hr">
                <Button variant="ghost" size="sm" className="text-sm">HR</Button>
              </Link>
            </nav>
          </div>

          {/* Right Side - Search & Actions */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search files..."
                className="w-56 pl-9 h-9 border-gray-200 focus:ring-purple-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="ghost" size="icon" className="relative hover:bg-gray-100">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-9 w-9 rounded-full hover:bg-gray-100">
                  <Avatar className="h-9 w-9 cursor-pointer border-2 border-gray-200">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                    <AvatarFallback className="bg-purple-600 text-white text-sm">JD</AvatarFallback>
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
