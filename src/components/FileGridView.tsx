import { File, FileText, Image, Music, Video, MoreVertical } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fileIcons = {
  pdf: FileText,
  doc: FileText,
  xlsx: FileText,
  jpg: Image,
  png: Image,
  mp3: Music,
  mp4: Video,
};

interface FileItem {
  id: string;
  name: string;
  type: keyof typeof fileIcons;
  size: string;
  date: string;
}

export const FileGridView = () => {
  const files: FileItem[] = [
    { id: "1", name: "Project Proposal", type: "pdf", size: "2.4 MB", date: "2 hours ago" },
    { id: "2", name: "Team Meeting Notes", type: "doc", size: "1.2 MB", date: "5 hours ago" },
    { id: "3", name: "Budget Report", type: "xlsx", size: "856 KB", date: "1 day ago" },
    { id: "4", name: "Banner Design", type: "png", size: "3.1 MB", date: "2 days ago" },
    { id: "5", name: "Presentation", type: "pdf", size: "4.8 MB", date: "3 days ago" },
    { id: "6", name: "Logo Variations", type: "jpg", size: "2.2 MB", date: "4 days ago" },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {files.map((file) => {
        const Icon = fileIcons[file.type] || File;
        return (
          <Card key={file.id} className="group hover:shadow-lg transition-all cursor-pointer">
            <div className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-secondary p-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <MoreVertical className="w-4 h-4" />
                </Button>
              </div>
              <h4 className="font-medium mb-1 truncate">{file.name}</h4>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{file.size}</span>
                <span>{file.date}</span>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};
