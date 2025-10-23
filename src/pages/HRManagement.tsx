import { Navbar } from "@/components/Navbar";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Users, TrendingUp, Clock, DollarSign, ChevronDown, Check, Calendar, Plus, X,
  Bell, Search, Settings, LogOut, UserCircle, FileText, 
  LayoutDashboard, BarChart3, UserPlus, 
  MessageSquare, CheckSquare, Lightbulb, 
  Building2, BookOpen, HelpCircle, Menu
} from "lucide-react";

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
  { icon: FileText, label: "Policies", path: "/policies" },
  { icon: HelpCircle, label: "Metro Assistant", path: "/assistant" },
];

const HRManagement = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 8));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showCreateProject, setShowCreateProject] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState("Dashboard");
  const [projectForm, setProjectForm] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    team: "",
    priority: "Medium"
  });
  const [projects, setProjects] = useState([
    { name: "Website Redesign", team: "Engineering", status: "In Progress", dueDate: "Feb 15, 2025" },
    { name: "Marketing Campaign Q1", team: "Marketing", status: "Planning", dueDate: "Jan 30, 2025" },
    { name: "HR System Upgrade", team: "HR", status: "Active", dueDate: "Mar 10, 2025" },
  ]);

  const departments = ["All Departments", "Engineering", "Marketing", "Sales", "HR", "Finance"];
  const statuses = ["All Status", "Active", "On Leave", "Remote"];
  const priorities = ["Low", "Medium", "High", "Urgent"];

  const employees = [
    { name: "Olivia Rhye", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Phoenix Baker", status: "active", dept: "Marketing", avatar: "👤" },
    { name: "Lana Steiner", status: "active", dept: "Sales", avatar: "👤" },
    { name: "Demi Wilkinson", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Candice Wu", status: "active", dept: "HR", avatar: "👤" },
    { name: "Natali Craig", status: "active", dept: "Finance", avatar: "👤" },
    { name: "Drew Cano", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Orlando Diggs", status: "active", dept: "Marketing", avatar: "👤" },
  ];

  const stats = [
    { label: "Total Employees", value: "248", icon: Users, color: "text-blue-600" },
    { label: "Present Today", value: "231", icon: Clock, color: "text-green-600" },
    { label: "On Leave", value: "12", icon: TrendingUp, color: "text-orange-600" },
    { label: "Monthly Payroll", value: "$425K", icon: DollarSign, color: "text-purple-600" },
  ];

  const getDaysInMonth = (year, month) => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
  };

  const { firstDay, daysInMonth } = getDaysInMonth(selectedDate.getFullYear(), selectedDate.getMonth());

  const handleCreateProject = () => {
    if (projectForm.name && projectForm.team) {
      setProjects([...projects, {
        name: projectForm.name,
        team: projectForm.team,
        status: "Planning",
        dueDate: projectForm.endDate || "TBD"
      }]);
      setProjectForm({
        name: "",
        description: "",
        startDate: "",
        endDate: "",
        team: "",
        priority: "Medium"
      });
      setShowCreateProject(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar - Metro Solver Design */}
      {isSidebarOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsSidebarOpen(false)}
          />
          
          <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-white border-r border-gray-200 shadow-xl">
            <div className="flex flex-col h-full">
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

              <nav className="flex-1 overflow-y-auto py-3 px-2">
                <ul className="space-y-1">
                  {sidebarMenuItems.map((item) => {
                    const isActive = activeMenuItem === item.label;
                    return (
                      <li key={item.label}>
                        <button
                          onClick={() => {
                            setActiveMenuItem(item.label);
                            setIsSidebarOpen(false);
                          }}
                          className={`w-full flex items-center gap-3 px-3 py-2.5 text-sm rounded-lg transition-all ${
                            isActive
                              ? "bg-purple-600 text-white shadow-md"
                              : "text-gray-700 hover:bg-gray-100"
                          }`}
                        >
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="truncate">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="p-3 border-t border-gray-200 space-y-1">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start text-gray-700 hover:bg-gray-100"
                >
                  <Settings className="w-5 h-5" />
                  <span className="ml-3 text-sm">Settings</span>
                </Button>
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

      {/* Top Navbar */}
      <header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </Button>

            <h1 className="text-xl font-bold text-blue-600 cursor-pointer hover:opacity-80 transition-opacity">
              File Manager
            </h1>
            
            <nav className="hidden md:flex items-center gap-4">
              <Button variant="ghost" size="sm">Dashboard</Button>
              <Button variant="ghost" size="sm">Files</Button>
              <Button variant="ghost" size="sm">HR</Button>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 relative">
              <Search className="absolute left-3 w-4 h-4 text-gray-400" />
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
                  <Avatar className="h-10 w-10 cursor-pointer ring-2 ring-blue-100 hover:ring-blue-300 transition-all">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
                    <AvatarFallback className="bg-blue-600 text-white">JD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
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
                <DropdownMenuItem className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">HR Management Dashboard</h1>
          <p className="text-gray-600">
            Overview of your workforce and HR operations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`rounded-full bg-gray-100 p-3 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Filters Section */}
        <Card className="p-6 mb-6">
          <div className="flex flex-wrap gap-4 items-center">
            {/* Department Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDeptDropdown(!showDeptDropdown);
                  setShowStatusDropdown(false);
                  setShowDatePicker(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors min-w-[180px] justify-between"
              >
                <span className="text-sm">{selectedDepartment}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDeptDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  {departments.map((dept) => (
                    <button
                      key={dept}
                      onClick={() => {
                        setSelectedDepartment(dept);
                        setShowDeptDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between"
                    >
                      {dept}
                      {selectedDepartment === dept && <Check className="w-4 h-4 text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Status Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowStatusDropdown(!showStatusDropdown);
                  setShowDeptDropdown(false);
                  setShowDatePicker(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors min-w-[150px] justify-between"
              >
                <span className="text-sm">{selectedStatus}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showStatusDropdown && (
                <div className="absolute top-full mt-2 w-full bg-white border rounded-lg shadow-lg z-10">
                  {statuses.map((status) => (
                    <button
                      key={status}
                      onClick={() => {
                        setSelectedStatus(status);
                        setShowStatusDropdown(false);
                      }}
                      className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 flex items-center justify-between"
                    >
                      {status}
                      {selectedStatus === status && <Check className="w-4 h-4 text-blue-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Date Picker */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowDatePicker(!showDatePicker);
                  setShowDeptDropdown(false);
                  setShowStatusDropdown(false);
                }}
                className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {selectedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {showDatePicker && (
                <div className="absolute top-full mt-2 bg-white border rounded-lg shadow-lg z-10 p-4 w-80">
                  <div className="text-center mb-4 font-semibold text-gray-900">
                    {selectedDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-xs mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day) => (
                      <div key={day} className="text-center font-semibold p-2 text-gray-600">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1 text-sm">
                    {Array.from({ length: firstDay }, (_, i) => (
                      <div key={`empty-${i}`} className="p-2"></div>
                    ))}
                    {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => (
                      <button
                        key={day}
                        onClick={() => {
                          setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day));
                          setShowDatePicker(false);
                        }}
                        className={`p-2 text-center rounded hover:bg-gray-100 transition-colors ${
                          day === selectedDate.getDate() 
                            ? 'bg-blue-600 text-white hover:bg-blue-700' 
                            : 'text-gray-700'
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t">
                    <button
                      onClick={() => setShowDatePicker(false)}
                      className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => setShowDatePicker(false)}
                      className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Employee List */}
        <Card className="p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">Employee Directory</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {employees.map((emp, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-lg">
                    {emp.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{emp.name}</p>
                    <p className="text-xs text-gray-500">{emp.dept}</p>
                  </div>
                  <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                </div>
                <div className="flex items-center justify-start">
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium">
                    {emp.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Projects Section */}
        <Card className="p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Active Projects</h3>
            <button
              onClick={() => setShowCreateProject(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create Project
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, idx) => (
              <div key={idx} className="p-4 border rounded-lg hover:shadow-md transition-shadow bg-white">
                <h4 className="font-semibold mb-2">{project.name}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Team:</span>
                    <span className="font-medium">{project.team}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Due Date:</span>
                    <span className="text-gray-900">{project.dueDate}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Create Project Modal */}
        {showCreateProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">Create New Project</h3>
                <button
                  onClick={() => setShowCreateProject(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Project Name *</label>
                  <input
                    type="text"
                    value={projectForm.name}
                    onChange={(e) => setProjectForm({...projectForm, name: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter project name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Description</label>
                  <textarea
                    value={projectForm.description}
                    onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="3"
                    placeholder="Project description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Team *</label>
                  <select
                    value={projectForm.team}
                    onChange={(e) => setProjectForm({...projectForm, team: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Team</option>
                    {departments.filter(d => d !== "All Departments").map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Start Date</label>
                    <input
                      type="date"
                      value={projectForm.startDate}
                      onChange={(e) => setProjectForm({...projectForm, startDate: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">End Date</label>
                    <input
                      type="date"
                      value={projectForm.endDate}
                      onChange={(e) => setProjectForm({...projectForm, endDate: e.target.value})}
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Priority</label>
                  <select
                    value={projectForm.priority}
                    onChange={(e) => setProjectForm({...projectForm, priority: e.target.value})}
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {priorities.map(priority => (
                      <option key={priority} value={priority}>{priority}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => setShowCreateProject(false)}
                  className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleCreateProject}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Project
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {[
                { name: "John Doe", action: "submitted leave request", time: "2 hours ago" },
                { name: "Jane Smith", action: "updated profile", time: "4 hours ago" },
                { name: "Mike Johnson", action: "completed training", time: "1 day ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b last:border-0">
                  <div>
                    <p className="text-sm font-medium">{activity.name}</p>
                    <p className="text-xs text-gray-500">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-400">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {[
                { title: "Team Building Workshop", date: "Tomorrow, 10:00 AM" },
                { title: "Performance Review Meeting", date: "Jan 25, 2:00 PM" },
                { title: "New Employee Orientation", date: "Jan 28, 9:00 AM" },
              ].map((event, idx
