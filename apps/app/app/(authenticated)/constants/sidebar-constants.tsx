import { ImagePlay } from "lucide-react";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { CiMobile4 } from "react-icons/ci";
import { GoFileDirectory } from "react-icons/go";
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineExplore, MdVideoSettings } from "react-icons/md";
import { PiCodesandboxLogo, PiFolderSimpleUser, PiHeadCircuit } from "react-icons/pi";
import { RiVideoOnAiLine } from "react-icons/ri";
import { SiYoutubeshorts } from "react-icons/si";
import { TbApi, TbPhotoBolt } from "react-icons/tb";

const sidebarData = {
  navMain: [
    {
      title: "Home",
      url: "/home",
      icon: GrHomeRounded,
    },
    {
      title: "Explore",
      url: "#",
      icon: MdOutlineExplore,
    },
    {
      title: "Projects",
      url: "#",
      icon: GoFileDirectory,
    },
  ],
  navCreation: [
    {
      title: "AI Video",
      url: "/app/ai-video",
      icon: RiVideoOnAiLine,
    },
    {
      title: "AI Image",
      url: "/app/ai-image",
      icon: ImagePlay,
    },
    {
      title: "AI Avatar",
      url: "#",
      icon: PiHeadCircuit,
    },
    {
      title: "AI Shorts",
      url: "#",
      icon: SiYoutubeshorts,
      beta: true
    },
    {
      title: "Pro Effects",
      url: "#",
      icon: AiOutlineVideoCameraAdd,
    },
  ],
  navEntertainment: [
    {
      title: "Fun Effects",
      url: "#",
      icon: MdVideoSettings
    },
    {
      title: "Photo Effects",
      url: "#",
      icon: TbPhotoBolt
    },
  ],
  navSecondary: [
    {
      title: "AI Tools",
      url: "/app/tool",
      icon: PiCodesandboxLogo
    },
    {
      title: "My Creations",
      url: "#",
      icon: PiFolderSimpleUser
    },
  ],
  navExtra: [
    {
      title: "App",
      url: "#",
      icon: CiMobile4
    },
    {
      title: "API",
      url: "#",
      icon: TbApi
    },
  ]
};


export default sidebarData