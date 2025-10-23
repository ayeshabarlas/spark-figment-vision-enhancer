import { 
  Bell, Search, Settings, LogOut, UserCircle, FileText, 
  LayoutDashboard, Clock, Users, BarChart3, UserPlus, 
  MessageSquare, CheckSquare, Calendar, Lightbulb, 
  Building2, BookOpen, FileText as Policy, HelpCircle, 
  ChevronLeft, ChevronRight, Menu, X
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

const sidebarMenuItems = [
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Sidebar - Metro Solver Design (Toggle) */}
      {isSidebarOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          {/* Sidebar */}
          <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-gray-200 shadow-xl">
            <div className="flex flex-col h-full">
              {/* Logo Section */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
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
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Navigation Menu */}
              <nav className="flex-1 overflow-y-auto py-3 px-2">
                <ul className="space-y-1">
                  {sidebarMenuItems.map((item) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <li key={item.label}>
                        <Link to={item.path} onClick={() => setIsSidebarOpen(false)}>
                          <button
                            className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all ${
                              isActive
                                ? "bg-purple-600 text-white shadow-md"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            <item.icon className="w-5 h-5 flex-shrink-0" />
                            <span className="truncate">{item.label}</span>
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
                    className="w-full justify-start text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <Settings className="w-5 h-5" />
                    <span className="ml-3 text-sm">Settings</span>
                  </Button>
                </Link>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-red-600 hover:bg-red-50"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="ml-3 text-sm">Log Out</span>
                </Button>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* Original Top Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            {/* Menu Button for Sidebar */}
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="hover:bg-accent"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <Link to="/">
              <h1 className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
                File Manager
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">Dashboard</Button>
              </Link>
              <Link to="/files">
                <Button variant="ghost" size="sm">Files</Button>
              </Link>
              <Link to="/hr">
                <Button variant="ghost" size="sm">HR</Button>
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 relative">
              <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search files..."
                className="w-64 pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <Button variant="ghost" size="icon">
              <Bell className="w-5 h-5" />
            </Button>
            
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-primary/10 hover:ring-primary/30 transition-all">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                    <AvatarFallback className="bg-primary text-primary-foreground">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">John Doe</p>
                    <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
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
                <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
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
