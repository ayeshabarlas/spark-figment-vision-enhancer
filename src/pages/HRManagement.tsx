import React, { useState, useMemo, useCallback } from 'react';
import { Users, TrendingUp, Clock, DollarSign, Palette, Check, Search, Calendar, ChevronLeft, ChevronRight, X, Briefcase, Mail } from 'lucide-react';

// --- MOCK UTILITY COLORS ---
// Defining custom Tailwind classes/colors used in the original structure
const colorMap = {
  'text-primary': 'text-indigo-600 dark:text-indigo-400',
  'bg-primary-hover': 'hover:bg-indigo-50 dark:hover:bg-gray-800',
  'text-success': 'text-green-600 dark:text-green-400',
  'text-warning': 'text-yellow-600 dark:text-yellow-400',
};

// --- MOCK COMPONENTS (for single-file execution) ---

const Navbar = () => (
  <header className="sticky top-0 z-10 bg-white shadow-md dark:bg-gray-900">
    <div className="container mx-auto px-4 py-3 flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-white">HR Pro</div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400">
          <Mail className="w-5 h-5" />
        </button>
        <div className="w-8 h-8 rounded-full bg-indigo-200 flex items-center justify-center text-sm font-semibold">JD</div>
      </div>
    </div>
  </header>
);

const HRNavigationBar = () => (
  <nav className="bg-gray-50 border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="container mx-auto px-4">
      <div className="flex space-x-8 py-3 overflow-x-auto">
        {['Dashboard', 'Employees', 'Payroll', 'Attendance', 'Recruitment'].map(item => (
          <a
            key={item}
            href="#"
            className={`text-sm font-medium pb-1 transition duration-150 ${
              item === 'Dashboard'
                ? 'text-indigo-600 border-b-2 border-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
                : 'text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400'
            }`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </nav>
);

const Card = ({ children, className = '' }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 transition-all ${className}`}>
    {children}
  </div>
);

// --- NEW FIGMA-INSPIRED COMPONENTS ---

const EmployeePicker = () => {
  const allEmployees = [
    { id: 1, name: "Olivia Rhye", status: "active", role: "Design Lead" },
    { id: 2, name: "Phoenix Baker", status: "inactive", role: "Software Engineer" },
    { id: 3, name: "Lana Steiner", status: "active", role: "HR Specialist" },
    { id: 4, name: "Candice Wu", status: "inactive", role: "Marketing Manager" },
    { id: 5, name: "Demi Wilkinson", status: "active", role: "Product Manager" },
    { id: 6, name: "Orlando Diggs", status: "active", role: "Data Analyst" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(allEmployees[0]);

  const filteredEmployees = allEmployees.filter(emp =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (employee) => {
    setSelectedEmployee(employee);
    setIsOpen(false);
  };

  const getStatusColor = (status) =>
    status === 'active' ? 'bg-green-500' : 'bg-gray-400';

  const SelectedEmployeeDisplay = ({ employee }) => (
    <div className="flex items-center space-x-3 w-full">
      <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 text-sm font-semibold">
        {employee.name.split(' ').map(n => n[0]).join('')}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{employee.name}</p>
        <p className={`text-xs flex items-center ${employee.status === 'active' ? 'text-green-500' : 'text-gray-500'}`}>
          <span className={`w-1.5 h-1.5 rounded-full mr-1 ${getStatusColor(employee.status)}`}></span>
          {employee.status}
        </p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full max-w-sm">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Employee Dropdown Menu</label>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 flex items-center justify-between p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-left hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
      >
        <SelectedEmployeeDisplay employee={selectedEmployee} />
        <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-20 mt-2 w-full max-h-80 overflow-y-auto rounded-xl shadow-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          <div className="p-3 border-b dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search employees..."
                className="w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <ul className="py-1">
            {filteredEmployees.map((employee) => (
              <li
                key={employee.id}
                onClick={() => handleSelect(employee)}
                className={`flex justify-between items-center px-4 py-3 cursor-pointer ${
                  selectedEmployee.id === employee.id
                    ? 'bg-indigo-50 dark:bg-indigo-900/50'
                    : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 text-sm font-semibold">
                    {employee.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{employee.name}</p>
                    <p className={`text-xs flex items-center text-gray-500 dark:text-gray-400`}>
                       <Briefcase className="w-3 h-3 mr-1" />
                       {employee.role}
                    </p>
                  </div>
                </div>
                {selectedEmployee.id === employee.id && (
                  <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                )}
              </li>
            ))}
            {filteredEmployees.length === 0 && (
              <li className="px-4 py-3 text-center text-gray-500 text-sm">No employee found.</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

const DatePickerMock = () => {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState(today.getDate());
    const [currentMonth, setCurrentMonth] = useState(today.getMonth());
    const [currentYear, setCurrentYear] = useState(today.getFullYear());

    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const getDaysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (month, year) => new Date(year, month, 1).getDay(); // 0 is Sunday, 1 is Monday

    const navigateMonth = (direction) => {
        let newMonth = currentMonth + direction;
        let newYear = currentYear;

        if (newMonth < 0) {
            newMonth = 11;
            newYear -= 1;
        } else if (newMonth > 11) {
            newMonth = 0;
            newYear += 1;
        }

        setCurrentMonth(newMonth);
        setCurrentYear(newYear);
    };

    const renderDays = useMemo(() => {
        const numDays = getDaysInMonth(currentMonth, currentYear);
        // Adjust for 0 (Sunday) to 6 (Saturday), where Monday is index 0
        let startDay = getFirstDayOfMonth(currentMonth, currentYear);
        startDay = startDay === 0 ? 6 : startDay - 1;

        const days = [];
        // Empty cells for padding
        for (let i = 0; i < startDay; i++) {
            days.push({ key: `empty-${i}`, day: null });
        }

        // Days of the month
        for (let i = 1; i <= numDays; i++) {
            const isToday = i === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
            const isSelected = i === selectedDate && currentMonth === today.getMonth() && currentYear === today.getFullYear();

            days.push({
                key: i,
                day: i,
                isToday,
                isSelected,
                onClick: () => setSelectedDate(i)
            });
        }
        return days;
    }, [currentMonth, currentYear, selectedDate]);


    return (
        <div className="w-full max-w-xs p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg border dark:border-gray-700">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Date Picker Mockup</label>
            <div className="flex items-center justify-between mb-4">
                <button onClick={() => navigateMonth(-1)} className="p-1 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="font-semibold text-lg text-gray-800 dark:text-white">
                    {monthNames[currentMonth]} {currentYear}
                </span>
                <button onClick={() => navigateMonth(1)} className="p-1 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-7 text-center text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                {daysOfWeek.map(day => <span key={day} className="py-1">{day}</span>)}
            </div>

            <div className="grid grid-cols-7 gap-1">
                {renderDays.map(dayInfo => (
                    <div
                        key={dayInfo.key}
                        className={`text-sm flex items-center justify-center h-8 w-8 rounded-full transition cursor-pointer
                            ${dayInfo.day === null ? 'invisible' : 'visible'}
                            ${dayInfo.isSelected ? 'bg-indigo-600 text-white font-bold' : 'text-gray-800 dark:text-gray-200'}
                            ${dayInfo.isToday && !dayInfo.isSelected ? 'border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400' : ''}
                            ${!dayInfo.isSelected && dayInfo.day !== null ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : ''}
                        `}
                        onClick={dayInfo.onClick}
                    >
                        {dayInfo.day}
                    </div>
                ))}
            </div>

            <div className="flex justify-end space-x-2 pt-4 border-t mt-4 dark:border-gray-700">
                <button className="px-3 py-1 text-sm rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition">Cancel</button>
                <button className="px-3 py-1 text-sm rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition">Apply</button>
            </div>
        </div>
    );
};

// --- MAIN APPLICATION COMPONENT ---

const App = () => {
  const stats = [
    { label: "Total Employees", value: "248", icon: Users, color: colorMap['text-primary'] },
    { label: "Present Today", value: "231", icon: Clock, color: colorMap['text-success'] },
    { label: "On Leave", value: "12", icon: TrendingUp, color: colorMap['text-warning'] },
    { label: "Monthly Payroll", value: "$425K", icon: DollarSign, color: colorMap['text-primary'] },
  ];

  // Utility function to safely get dynamic Tailwind color
  const getDynamicColor = (className) => colorMap[className] || '';

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans antialiased">
      <Navbar />
      <HRNavigationBar />

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">HR Management Dashboard</h1>
          <p className="text-muted-foreground text-gray-500 dark:text-gray-400">
            Overview of your workforce and HR operations
          </p>
        </div>

        {/* STATS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  </div>
                  <div className={`rounded-full bg-indigo-100 dark:bg-indigo-900 p-3 ${getDynamicColor(stat.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* MAIN CONTENT GRID: ACTIVITIES / EVENTS / FIGMA DESIGN */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Column 1: Recent Activities (Original) */}
          <Card className="p-6 lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Recent Activities</h3>
            <div className="space-y-3">
              {[
                { name: "John Doe", action: "submitted leave request", time: "2 hours ago" },
                { name: "Jane Smith", action: "updated profile", time: "4 hours ago" },
                { name: "Mike Johnson", action: "completed training", time: "1 day ago" },
                { name: "Sarah Lee", action: "approved payroll", time: "1 day ago" },
              ].map((activity, idx) => (
                <div key={idx} className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{activity.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.action}</p>
                  </div>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Column 2: Figma Design System Preview (NEW) */}
          <Card className="p-6 lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
                <Palette className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Figma Design System Preview</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 border-b pb-4 dark:border-gray-700">
                This section showcases high-fidelity UI elements, reflecting the design specifications for common HR functions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Employee Picker Mock (Input Dropdown Menu) */}
                <EmployeePicker />

                {/* Date Picker Mock */}
                <DatePickerMock />
            </div>
          </Card>

          {/* Column 3 (Moved to Row 2 for better layout): Upcoming Events (Original) */}
          {/* I will put Upcoming Events below the two main cards for a cleaner two-row layout on desktop */}
        </div>

        {/* Upcoming Events in its own row below the main sections for a balanced look */}
        <div className="mt-6">
            <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Upcoming Events</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: "Team Building Workshop", date: "Tomorrow, 10:00 AM", location: "Meeting Room A" },
                    { title: "Performance Review Cycle Start", date: "Feb 1, 9:00 AM", location: "Company-Wide" },
                    { title: "New Employee Orientation", date: "Jan 28, 9:00 AM", location: "HR Training Room" },
                  ].map((event, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600 hover:shadow-md transition">
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{event.title}</p>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 mb-1 font-medium"><Calendar className="w-3 h-3 inline mr-1" /> {event.date}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">@{event.location}</p>
                    </div>
                  ))}
                </div>
            </Card>
        </div>
      </main>
    </div>
  );
};

export default App;
