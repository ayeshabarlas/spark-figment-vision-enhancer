import { Upload, File, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

interface UploadedFile {
  id: string;
  name: string;
  size: string;
  progress: number;
  status: "uploading" | "completed" | "error";
}

export const FileUploadArea = () => {
  const [files, setFiles] = useState<UploadedFile[]>([
    { id: "1", name: "presentation-deck.pdf", size: "2.4 MB", progress: 100, status: "completed" },
    { id: "2", name: "monthly-report.xlsx", size: "1.8 MB", progress: 65, status: "uploading" },
    { id: "3", name: "team-photo.jpg", size: "3.2 MB", progress: 100, status: "completed" },
  ]);

  const handleFileRemove = (id: string) => {
    setFiles(files.filter(f => f.id !== id));
  };

  return (
    <div className="space-y-6">
      <Card className="border-2 border-dashed border-border hover:border-primary transition-colors">
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="rounded-full bg-secondary p-4 mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop files here or click to browse
          </p>
          <Button>Choose Files</Button>
        </div>
      </Card>

      <div className="space-y-3">
        {files.map((file) => (
          <Card key={file.id} className="p-4">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-secondary p-2">
                <File className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium truncate">{file.name}</p>
                  <span className="text-xs text-muted-foreground">{file.size}</span>
                </div>
                <Progress value={file.progress} className="h-2" />
                <p className="text-xs text-muted-foreground mt-1">
                  {file.status === "completed" ? "Completed" : `${file.progress}% uploaded`}
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleFileRemove(file.id)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
