import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Clock, DollarSign, ChevronDown, Check, Calendar, Menu } from "lucide-react";

const HRManagement = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [showDeptDropdown, setShowDeptDropdown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2025, 0, 8));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const departments = ["All Departments", "Engineering", "Marketing", "Sales", "HR", "Finance"];
  const statuses = ["All Status", "Active", "On Leave", "Remote"];

  const employees = [
    { name: "Olivia Rhye", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Phoenix Baker", status: "active", dept: "Marketing", avatar: "👤" },
    { name: "Lana Steiner", status: "active", dept: "Sales", avatar: "👤" },
    { name: "Demi Wilkinson", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Candice Wu", status: "active", dept: "HR", avatar: "👤" },
    { name: "Natali Craig", status: "active", dept: "Finance", avatar: "👤" },
    { name: "Drew Cano", status: "active", dept: "Engineering", avatar: "👤" },
    { name: "Orlando Diggs", status: "active", dept: "Marketing", avatar: "👤" },
    { name: "Andi Lane", status: "active", dept: "Sales", avatar: "👤" },
    { name: "Kate Morrison", status: "active", dept: "HR", avatar: "👤" },
    { name: "Koray Okumus", status: "active", dept: "Finance", avatar: "👤" },
    { name: "Natali Craig", status: "active", dept: "Engineering", avatar: "👤" },
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Menu className="w-6 h-6" />
            <h1 className="text-xl font-bold">HR System</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm">Admin User</span>
          </div>
        </div>
      </nav>

      {/* HR Navigation Bar */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex gap-6 overflow-x-auto">
            {["Dashboard", "Employees", "Attendance", "Leave", "Payroll", "Reports"].map((item) => (
              <button
                key={item}
                className={`py-3 px-2 text-sm whitespace-nowrap border-b-2 ${
                  item === "Dashboard" 
                    ? "border-blue-600 text-blue-600 font-medium" 
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

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
              <Card key={stat.label} className="p-6 hover:shadow-lg transition-shadow">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
            <div className="space-y-3">
              {[
                { name: "John Doe", action: "submitted leave request", time: "2 hours ago" },
                { name: "Jane Smith", action: "updated profile", time: "4 hours ago" },
                { name: "Mike Johnson", action: "completed training", time: "1 day ago" },
                { name: "Sarah Williams", action: "clocked in", time: "2 days ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between py-3 border-b last:border-0">
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
                { title: "Team Building Workshop", date: "Tomorrow, 10:00 AM", color: "bg-blue-100" },
                { title: "Performance Review Meeting", date: "Jan 25, 2:00 PM", color: "bg-purple-100" },
                { title: "New Employee Orientation", date: "Jan 28, 9:00 AM", color: "bg-green-100" },
                { title: "Department Meeting", date: "Jan 30, 3:00 PM", color: "bg-orange-100" },
              ].map((event, idx) => (
                <div key={idx} className={`p-3 ${event.color} rounded-lg`}>
                  <p className="text-sm font-medium mb-1">{event.title}</p>
                  <p className="text-xs text-gray-600">{event.date}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HRManagement;
