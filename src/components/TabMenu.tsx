import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FileList } from "./FileList";
import { FileUpload } from "./FileUpload";
import { Grid, List, Upload } from "lucide-react";

export const TabMenu = () => {
  return (
    <Tabs defaultValue="grid" className="w-full">
      <TabsList className="grid w-full max-w-md grid-cols-3">
        <TabsTrigger value="grid" className="flex items-center gap-2">
          <Grid className="w-4 h-4" />
          Grid View
        </TabsTrigger>
        <TabsTrigger value="list" className="flex items-center gap-2">
          <List className="w-4 h-4" />
          List View
        </TabsTrigger>
        <TabsTrigger value="upload" className="flex items-center gap-2">
          <Upload className="w-4 h-4" />
          Upload
        </TabsTrigger>
      </TabsList>

      <TabsContent value="grid" className="mt-6">
        <FileList />
      </TabsContent>

      <TabsContent value="list" className="mt-6">
        <FileList />
      </TabsContent>

      <TabsContent value="upload" className="mt-6">
        <FileUpload />
      </TabsContent>
    </Tabs>
  );
};
