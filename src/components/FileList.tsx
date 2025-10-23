import { File, FileText, Image as ImageIcon, Music, Video, MoreVertical, Download, Trash2, Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const fileIcons = {
  pdf: FileText,
  doc: FileText,
  xlsx: FileText,
  jpg: ImageIcon,
  png: ImageIcon,
  mp3: Music,
  mp4: Video,
};

interface FileItem {
  id: string;
  name: string;
  type: keyof typeof fileIcons;
  size: string;
  date: string;
  status: "active" | "processing" | "archived" | "shared";
  selected: boolean;
}

export const FileList = () => {
  const [files, setFiles] = useState<FileItem[]>([
    { id: "1", name: "Project Proposal.pdf", type: "pdf", size: "2.4 MB", date: "2 hours ago", status: "active", selected: false },
    { id: "2", name: "Team Meeting Notes.doc", type: "doc", size: "1.2 MB", date: "5 hours ago", status: "processing", selected: false },
    { id: "3", name: "Budget Report.xlsx", type: "xlsx", size: "856 KB", date: "1 day ago", status: "shared", selected: false },
    { id: "4", name: "Banner Design.png", type: "png", size: "3.1 MB", date: "2 days ago", status: "archived", selected: false },
    { id: "5", name: "Presentation.pdf", type: "pdf", size: "4.8 MB", date: "3 days ago", status: "active", selected: false },
    { id: "6", name: "Logo Variations.jpg", type: "jpg", size: "2.2 MB", date: "4 days ago", status: "shared", selected: false },
  ]);

  const getStatusColor = (status: FileItem["status"]) => {
    switch (status) {
      case "active":
        return "bg-success";
      case "processing":
        return "bg-primary";
      case "archived":
        return "bg-warning";
      case "shared":
        return "bg-accent";
      default:
        return "bg-muted";
    }
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

  const handleDownload = (fileName: string) => {
    toast.success(`Downloading ${fileName}`);
  };

  const handleDelete = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    toast.success("File deleted successfully");
  };

  const handleShare = (fileName: string) => {
    toast.success(`Sharing ${fileName}`);
  };

  return (
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {files.map((file) => {
          const Icon = fileIcons[file.type] || File;
          return (
            <Card key={file.id} className="group hover:shadow-lg transition-all">
              <div className="p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      checked={file.selected}
                      onCheckedChange={() => handleSelectFile(file.id)}
                    />
                    <div className="rounded-lg bg-secondary p-3">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleDownload(file.name)}>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleShare(file.name)}>
                        <Share2 className="mr-2 h-4 w-4" />
                        Share
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => handleDelete(file.id)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                
                <div className="flex items-start gap-2 mb-3">
                  <div className={`w-2 h-2 rounded-full mt-1.5 ${getStatusColor(file.status)}`} />
                  <h4 className="font-medium text-sm flex-1 line-clamp-2">{file.name}</h4>
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{file.size}</span>
                  <span>{file.date}</span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
