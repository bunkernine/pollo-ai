import { GridList } from "@/app/(authenticated)/components/grid-list";


const models = [
  {
    name: "Google Nano Banana",
    modelName: "nano-banana",
    description: "Ultra-high character consistency",
    icon: "/models/gemini.svg",
  },
  {
    name: "Midjourney",
    modelName: "midjourney-image",
    description: "Flexible, detailed and vibrant image generation",
    icon: "/models/midjourney.svg",
    tag: "New",
  },
  {
    name: "Seedream 4.0",
    modelName: "seedream-4-0",
    description: "Support images with cohesive styles",
    icon: "/models/seedream.svg",
    tag: "New",
  },
  {
    name: "Wan 2.5",
    modelName: "wan2.5-i2i-preview",
    description: "For photorealism and creative control",
    icon: "/models/wan.svg",
  },
  {
    name: "Flux Dev",
    modelName: "flux-dev",
    description: "For short and basic scenes",
    icon: "/models/flux-dev.svg",
  },
  {
    name: "Flux Dev Lora",
    modelName: "flux-dev-lora",
    description: "For general art and design",
    icon: "/models/flux-dev.svg",
  },
  {
    name: "Flux Kontext Pro",
    modelName: "flux-kontext-pro",
    description: "For consistent and in-context outputs",
    icon: "/models/flux-dev.svg",
    tag: "Hot",
  },
  {
    name: "Wan 2.1",
    modelName: "wanx-v2-1",
    description: "Flexible image transformation",
    icon: "/models/wan.svg",
    tag: "New",
  },
];

export default function ModelsGrid() {
  return <GridList items={models} previewOnHover={false} />;
}
