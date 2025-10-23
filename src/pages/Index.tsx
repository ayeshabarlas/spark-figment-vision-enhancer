import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FileText, Users, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            File & HR Management System
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solution for managing your files and HR operations in one powerful platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 hover:shadow-2xl transition-all group cursor-pointer">
            <Link to="/files" className="block">
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">File Management</h2>
              <p className="text-muted-foreground mb-6">
                Upload, organize, and manage all your files with advanced features like grid view, list view, and real-time progress tracking.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                Go to Files <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </Card>

          <Card className="p-8 hover:shadow-2xl transition-all group cursor-pointer">
            <Link to="/hr" className="block">
              <div className="rounded-full bg-primary/10 p-4 w-fit mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">HR Management</h2>
              <p className="text-muted-foreground mb-6">
                Complete HR solution with employee management, attendance tracking, payroll, performance reviews, and more.
              </p>
              <div className="flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                Go to HR Dashboard <ArrowRight className="w-4 h-4 ml-2" />
              </div>
            </Link>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Key Features</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "File Upload & Storage",
              "Employee Management",
              "Attendance Tracking",
              "Payroll Processing",
              "Performance Reviews",
              "Document Management",
              "Real-time Updates",
              "Advanced Analytics",
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors"
              >
                <p className="font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
