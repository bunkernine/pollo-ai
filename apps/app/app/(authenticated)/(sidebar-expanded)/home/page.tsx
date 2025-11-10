import { auth } from "@repo/auth/server";
// import { database } from "@repo/database";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { env } from "@/env";
import { ButtonExtra } from "../../components/buttons";
import { RiVideoOnAiLine } from "react-icons/ri";
import { ToolsCard } from "../../components/tools-card";
import { VideoCard } from "../../components/video-card";
import ModelsGrid from "../app/ai-video/_components/model-grid";

const title = "Home | Yollo AI";
const description = "My application.";

// const CollaborationProvider = dynamic(() =>
//   import("../components/collaboration-provider").then(
//     (mod) => mod.CollaborationProvider
//   )
// );

export const metadata: Metadata = {
  title,
  description,
};

const App = async () => {
  // const pages = await database.page.findMany();
  const { orgId } = await auth();

  // if (!orgId) {
  //   notFound();
  // }

  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          {/* {pages.map((page) => (
            <div className="aspect-video rounded-xl bg-muted/50" key={page.id}>
              {page.name}
            </div>
          ))} */}

          hello

        </div>
      </div>

      <ModelsGrid />


      <ButtonExtra label="Generate AI Video" icon={RiVideoOnAiLine} />


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4">
        <VideoCard
          videoSrc="/protect.mp4"
          posterSrc="/protect-poster.jpeg"
          userName="Moe Liu"
          isPortrait
          href="/app?target=tool&code=lip-sync"
        />

        <VideoCard
          videoSrc="/protect-1.mp4"
          posterSrc="/protect-1-poster.jpeg"
          userName="Anna Kim"
          isPortrait
          href="/app?target=tool&code=image-to-animation"
        />
      </div>


    </>
  );
};

export default App;
