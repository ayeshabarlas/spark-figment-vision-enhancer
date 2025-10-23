import { Navbar } from "@/components/Navbar";
import { TabMenu } from "@/components/TabMenu";
import { FilePagination } from "@/components/FilePagination";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const FileManager = () => {
  const [folderName, setFolderName] = useState("");

  const handleCreateFolder = () => {
    if (folderName.trim()) {
      // Folder creation logic would go here
      console.log("Creating folder:", folderName);
      setFolderName("");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">File Management</h1>
            <p className="text-muted-foreground">
              Manage and organize all your files in one place
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Input
              placeholder="New folder name..."
              className="w-48"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleCreateFolder()}
            />
            <Button 
              className="flex items-center gap-2"
              onClick={handleCreateFolder}
            >
              <Plus className="w-4 h-4" />
              New Folder
            </Button>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <TabMenu />
        
        <div className="mt-8">
          <FilePagination />
        </div>
      </main>
    </div>
  );
};

export default FileManager;
