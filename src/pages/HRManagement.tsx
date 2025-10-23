





import { Navbar } from "@/components/Navbar";
import { HRNavigationBar } from "@/components/HRNavigationBar";
import { Card } from "@/components/ui/card";
import { Users, TrendingUp, Clock, DollarSign } from "lucide-react";

const HRManagement = () => {
  const stats = [
    { label: "Total Employees", value: "248", icon: Users, color: "text-primary" },
    { label: "Present Today", value: "231", icon: Clock, color: "text-success" },
    { label: "On Leave", value: "12", icon: TrendingUp, color: "text-warning" },
    { label: "Monthly Payroll", value: "$425K", icon: DollarSign, color: "text-primary" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HRNavigationBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">HR Management Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your workforce and HR operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`rounded-full bg-secondary p-3 ${stat.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

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
                    <p className="text-xs text-muted-foreground">{activity.action}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">{activity.time}</span>
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
              ].map((event, idx) => (
                <div key={idx} className="p-3 bg-secondary rounded-lg">
                  <p className="text-sm font-medium mb-1">{event.title}</p>
                  <p className="text-xs text-muted-foreground">{event.date}</p>
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
