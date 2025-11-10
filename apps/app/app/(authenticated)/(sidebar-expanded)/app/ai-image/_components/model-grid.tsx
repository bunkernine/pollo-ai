import { GridList } from "@/app/(authenticated)/components/grid-list";


export const models = [
  {
    name: "Wan 2.5",
    modelName: "wan-v2-5-preview",
    url: "/app?target=image-to-video&modelName=wan-v2-5-preview",
    icon: "https://videocdn.pollo.ai/model-icon/svg/Group.svg",
    tags: ["Audio"],
    description: "High-quality videos with synchronized audio",
    tryButton: "hover", // shown only on hover
  },
  {
    name: "Sora 2",
    modelName: "sora",
    url: "/app?target=image-to-video&modelName=sora",
    icon: "https://videocdn.pollo.ai/web-cdn/pollo/test/cm3pol28q0000ojuuyeo77e36/image/1759998830447-10c6484e-786d-4d05-a2c4-f0c929b1042b.svg",
    tags: ["New", "Audio"],
    description: "Realistic world & audio simulation",
    tryButton: "hover",
  },
  {
    name: "Google Veo 3.1",
    modelName: "google-veo3-1",
    url: "/app?target=image-to-video&modelName=google-veo3-1",
    icon: "https://videocdn.pollo.ai/web-cdn/pollo/production/cm3po9yyf0003oh0c2iyt8ajy/image/1753259785486-de7c53b0-9576-4d3e-a76a-a94fcac57bf1.svg",
    tags: ["New", "Audio"],
    description: "Frame to frame control & multi-image reference",
    tryButton: "hover",
  },
  {
    name: "Vidu Q2",
    modelName: "vidu-q2",
    url: "/app?target=image-to-video&modelName=vidu-q2",
    icon: "https://videocdn.pollo.ai/model-icon/svg/com-logo-vidu.svg",
    tags: ["Audio"],
    description: "Cinematic flair and dynamic motion",
    tryButton: "hover",
  },
  {
    name: "Hailuo 2.3",
    modelName: "hailuo-2-3",
    url: "/app?target=image-to-video&modelName=hailuo-2-3",
    icon: "https://videocdn.pollo.ai/model-icon/svg/com-logo-hailuo.svg",
    tags: ["New"],
    description: "Superior motion control & artistic stylization",
    tryButton: "hover",
  },
  {
    name: "Seedance 1.0",
    modelName: "seedance-1-0",
    url: "/app?target=image-to-video&modelName=seedance-1-0",
    icon: "https://videocdn.pollo.ai/web-cdn/pollo/test/cm97uxg1v000m1490lu4pqgla/image/1757657474045-284b1752-9960-45ee-bc8b-99e383e8798e.svg",
    tags: ["New"],
    description: "Stable fluid motion and lifelike dynamics",
    tryButton: "hover",
  },
  {
    name: "Kling 2.5 Turbo",
    modelName: "kling-v2-5-turbo",
    url: "/app?target=image-to-video&modelName=kling-v2-5-turbo",
    icon: "https://videocdn.pollo.ai/web-cdn/pollo/test/cm3pol28q0000ojuuyeo77e36/image/1745926765907-7c4dc9d5-3f81-47d0-87f7-6b97b4bdf80f.svg",
    tags: [],
    description: "Cinematic video with emotional depth",
    tryButton: "hover",
  },
  {
    name: "Hailuo 02",
    modelName: "minimax-hailuo-02",
    url: "/app?target=image-to-video&modelName=minimax-hailuo-02",
    icon: "https://videocdn.pollo.ai/model-icon/svg/com-logo-hailuo.svg",
    tags: ["Hot"],
    description: "Extreme physics simulations",
    tryButton: "hover",
  },
  {
    name: "Pixverse V5",
    modelName: "pixverse-v5",
    url: "/app?target=image-to-video&modelName=pixverse-v5",
    icon: "https://videocdn.pollo.ai/model-icon/svg/com-logo-pixverse(1).svg",
    tags: ["Audio"],
    description: "Smooth, expressive movements",
    tryButton: "hover",
  },
]


export default function ModelsGrid() {
  return <GridList items={models} previewOnHover={false} />;
}
