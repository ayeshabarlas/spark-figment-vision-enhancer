import {
  Bell,
  Search,
  Settings,
  LogOut,
  UserCircle,
  FileText,
  Calendar,
  Users,
  ClipboardList,
  MessageSquare,
  Briefcase,
  BarChart,
  Clock,
  FolderOpen,
  Newspaper,
  GraduationCap,
  Shield,
  HelpCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { name: "Dashboard", icon: BarChart, link: "/" },
    { name: "Time Tracking", icon: Clock, link: "/time-tracking" },
    { name: "Meeting", icon: MessageSquare, link: "/meeting" },
    { name: "Employees", icon: Users, link: "/employees" },
    { name: "Company Statistic", icon: ClipboardList, link: "/company-statistic" },
    { name: "Recruitment", icon: Briefcase, link: "/recruitment" },
    { name: "Messages", icon: MessageSquare, link: "/messages" },
    { name: "Task", icon: FileText, link: "/task" },
    { name: "Calendar", icon: Calendar, link: "/calendar" },
    { name: "Project Collaboration", icon: FolderOpen, link: "/project-collaboration" },
    { name: "HMRC", icon: Shield, link: "/hmrc" },
    { name: "NewsFeed", icon: Newspaper, link: "/newsfeed" },
    { name: "Course", icon: GraduationCap, link: "/course" },
    { name: "Policies", icon: FileText, link: "/policies" },
    { name: "Metro Assistant", icon: HelpCircle, link: "/metro-assistant" },
    { name: "Setting", icon: Settings, link: "/setting" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link to="/">
            <h1 className="text-xl font-bold text-primary cursor-pointer hover:opacity-80 transition-opacity">
              Metro Solver
            </h1>
          </Link>

          {/* Main Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {menuItems.map((item) => (
              <Link key={item.name} to={item.link}>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-2 hover:text-primary transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.name}
                </Button>
              </Link>
            ))}
          </nav>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 relative">
            <Search className="absolute left-3 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
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

          {/* Profile Dropdown */}
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
              <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
