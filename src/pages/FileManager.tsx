import { TopNavBar } from "@/components/TopNavBar";
import { TabMenuBar } from "@/components/TabMenuBar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const FileManager = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">File Management</h1>
            <p className="text-muted-foreground">
              Manage and organize all your files in one place
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Folder
          </Button>
        </div>

        <TabMenuBar />
      </main>
    </div>
  );
};

export default FileManager;
