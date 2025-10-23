import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Users,
  UserPlus,
  Calendar,
  Clock,
  DollarSign,
  FileText,
  Award,
  Settings,
  BarChart,
  TrendingUp,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: BarChart },
  { id: "employees", label: "Employees", icon: Users },
  { id: "recruitment", label: "Recruitment", icon: UserPlus },
  { id: "attendance", label: "Attendance", icon: Clock },
  { id: "leave", label: "Leave Management", icon: Calendar },
  { id: "payroll", label: "Payroll", icon: DollarSign },
  { id: "performance", label: "Performance", icon: TrendingUp },
  { id: "documents", label: "Documents", icon: FileText },
  { id: "benefits", label: "Benefits", icon: Award },
  { id: "settings", label: "Settings", icon: Settings },
];

export const HRNavigationBar = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="border-b border-border bg-card">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex items-center gap-2 p-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeTab === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab(item.id)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
