import type { Metadata } from "next";
import { ToolsCard } from "@/app/(authenticated)/components/tools-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/design-system/components/ui/tabs"
import { imageToolsData } from "./_constants/image-tools"
import { imageGenerationToolsData } from "./_constants/image-generation"
import { videoToolsData } from "./_constants/video-tools"

const title = "AI Tools | Yollo AI";
const description = "My application.";

export const metadata: Metadata = {
  title,
  description,
};

const ToolsPage = async () => {

  const tabs = [
    { value: "video", label: "Video Tools" },
    { value: "image", label: "Image Tools" },
    { value: "image-gen", label: "Image Generators" },
  ];

  return (
    <div className="flex flex-col gap-3">
      <Tabs defaultValue="video">
        <TabsList className="mb-3 rounded-4xl py-5">
          {tabs.map((tab, key) => (
            <TabsTrigger
              key={key}
              value={tab.value}
              className="rounded-4xl px-3 py-5 text-sm font-medium transition-colors
              data-[state=active]:bg-foreground! data-[state=active]:text-background!
              data-[state=active]:shadow-sm
              hover:bg-foreground/10! "
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>

        <TabsContent value="video">
          <div className="grid grid-cols-6 gap-6">
            {videoToolsData.map((tool) => (
              <ToolsCard key={tool.title} {...tool} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="image">
          <div className="grid grid-cols-6 gap-6">
            {imageToolsData.map((tool) => (
              <ToolsCard key={tool.title} {...tool} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="image-gen">
          <div className="grid grid-cols-6 gap-6">
            {imageGenerationToolsData.map((tool) => (
              <ToolsCard key={tool.title} {...tool} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ToolsPage;
