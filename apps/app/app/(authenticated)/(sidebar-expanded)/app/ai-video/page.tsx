import type { Metadata } from "next";
import ModelsGrid from "./_components/model-grid";
import { TopWidget } from "./_components/top-widget";
import VideoToolsSlider from "./_components/video-tools-slider";

const title = "AI Video | Yollo AI";
const description = "My application.";

export const metadata: Metadata = {
  title,
  description,
};

const AiVideoPage = () => (
  <div className="mb-10 flex flex-col gap-10">

    <TopWidget />

    <VideoToolsSlider />

    <ModelsGrid />

  </div>
)


export default AiVideoPage