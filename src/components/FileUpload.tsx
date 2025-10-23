import { Upload, X, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useRef } from "react";
import { toast } from "sonner";

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  progress: number;
  status: "pending" | "uploading" | "completed" | "error";
  selected: boolean;
}

export const FileUpload = () => {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    const newFiles: UploadedFile[] = Array.from(selectedFiles).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: file.size,
      progress: 0,
      status: "pending",
      selected: false,
    }));

    setFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((file) => {
      simulateUpload(file.id);
    });

    toast.success(`${newFiles.length} file(s) added to upload queue`);
  };

  const simulateUpload = (fileId: string) => {
    setFiles((prev) =>
      prev.map((f) =>
        f.id === fileId ? { ...f, status: "uploading" as const } : f
      )
    );

    const interval = setInterval(() => {
      setFiles((prev) => {
        const file = prev.find((f) => f.id === fileId);
        if (!file) {
          clearInterval(interval);
          return prev;
        }

        if (file.progress >= 100) {
          clearInterval(interval);
          return prev.map((f) =>
            f.id === fileId ? { ...f, status: "completed" as const } : f
          );
        }

        return prev.map((f) =>
          f.id === fileId ? { ...f, progress: Math.min(f.progress + 10, 100) } : f
        );
      });
    }, 200);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleFileRemove = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    toast.info("File removed from upload queue");
  };

  const handleSelectFile = (id: string) => {
    setFiles((prev) =>
      prev.map((f) => (f.id === id ? { ...f, selected: !f.selected } : f))
    );
  };

  const handleSelectAll = () => {
    const allSelected = files.every((f) => f.selected);
    setFiles((prev) => prev.map((f) => ({ ...f, selected: !allSelected })));
  };

  const getStatusIcon = (status: UploadedFile["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-4 h-4 text-success" />;
      case "error":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      case "uploading":
        return <Clock className="w-4 h-4 text-primary animate-spin" />;
      default:
        return <Clock className="w-4 h-4 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: UploadedFile["status"]) => {
    switch (status) {
      case "completed":
        return "bg-success";
      case "error":
        return "bg-destructive";
      case "uploading":
        return "bg-primary";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="space-y-6">
      <Card
        className={`border-2 border-dashed transition-colors ${
          isDragging
            ? "border-primary bg-primary/5"
            : "border-border hover:border-primary"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="rounded-full bg-secondary p-4 mb-4">
            <Upload className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-lg font-semibold mb-2">Upload Files</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Drag and drop files here or click to browse
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files)}
          />
          <Button onClick={() => fileInputRef.current?.click()}>
            Choose Files
          </Button>
        </div>
      </Card>

      {files.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Checkbox
                checked={files.every((f) => f.selected)}
                onCheckedChange={handleSelectAll}
              />
              <span className="text-sm font-medium">
                {files.filter((f) => f.selected).length} of {files.length} selected
              </span>
            </div>
            {files.filter((f) => f.selected).length > 0 && (
              <Button
                variant="destructive"
                size="sm"
                onClick={() => {
                  setFiles((prev) => prev.filter((f) => !f.selected));
                  toast.info("Selected files removed");
                }}
              >
                Delete Selected
              </Button>
            )}
          </div>

          <div className="space-y-3">
            {files.map((file) => (
              <Card key={file.id} className="p-4">
                <div className="flex items-center gap-4">
                  <Checkbox
                    checked={file.selected}
                    onCheckedChange={() => handleSelectFile(file.id)}
                  />
                  
                  <div className={`w-2 h-2 rounded-full ${getStatusColor(file.status)}`} />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        {getStatusIcon(file.status)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {formatFileSize(file.size)}
                      </span>
                    </div>
                    
                    {file.status === "uploading" && (
                      <>
                        <Progress value={file.progress} className="h-2 mb-1" />
                        <p className="text-xs text-muted-foreground">
                          {file.progress}% uploaded
                        </p>
                      </>
                    )}
                    
                    {file.status === "completed" && (
                      <p className="text-xs text-success">Upload completed</p>
                    )}
                    
                    {file.status === "error" && (
                      <p className="text-xs text-destructive">Upload failed</p>
                    )}
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
      )}
    </div>
  );
};
