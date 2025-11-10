// tools-data.ts
export type Tool = {
  title: string;
  videoSrc: string;
  posterSrc: string;
  href: string;
  previewAt?: number;
};

export const videoToolsData: Tool[] = [
  {
    title: "Lip Sync AI",
    videoSrc: '/tools/lip_sync_303beea674.mp4',
    posterSrc: '/tools/lip_sync_01_s_a39f7003d2.jpg',
    href: "/app?target=tool&code=lip-sync",
  },
  {
    title: "Image to Animation AI",
    videoSrc: '/tools/animate-a-picture-1.mp4',
    posterSrc: '/tools/animate_a_picture_landing_page_01_1_452346f8f5.jpg',
    href: "/app?target=tool&code=animate-a-picture",
    previewAt: 3
  },
  {
    title: "Video Upscaler",
    videoSrc: '/tools/video-upscaler.mp4',
    posterSrc: '/tools/video_upscaler_1_cf89046d3c.jpg',
    href: "/app?target=tool&code=video-upscaler",
  },
  {
    title: "Video Enhancer",
    videoSrc: '/tools/video-enhancer.mp4',
    posterSrc: '/tools/video_enhancer_01_6aada103e1.jpg',
    href: "/app?target=tool&code=video-enhancer",
  },
  {
    title: "Face Swap Video",
    videoSrc: '/tools/face-swap-2.mp4',
    posterSrc: '/tools/face_swap_2_b94fa33515.jpg',
    href: "/app?target=tool&code=face-swap-video",
  },
  {
    title: "AI Talking Baby Podcast Generator",
    videoSrc: '/tools/video_4736be8da8.mp4',
    posterSrc: '/tools/cover_2x_72455aab6c.jpg',
    href: "/app?target=tool&code=ai-talking-baby-podcast-generator",
  },
  {
    title: "AI Pet Podcast Generator",
    videoSrc: '/tools/animal_podcast_3436c2e91e.mov',
    posterSrc: '/tools/animal_podcast_2_42ba8c539c.png',
    href: "/app?target=tool&code=ai-pet-podcast-generator",
  },
  {
    title: "Denoise Video",
    videoSrc: '/tools/denoise-video.mp4',
    posterSrc: '/tools/denoise_video_01_4b8bb95229.jpg',
    href: "/app?target=tool&code=denoise-video",
  },
  {
    title: "AI Dance Generator",
    videoSrc: '/tools/dance_video_7466d9f26e.mp4',
    posterSrc: '/tools/dance_image_7fcbd5c659.jpg',
    href: "/app?target=tool&code=ai-dance-generator",
  },
  {
    title: "Video Subtitle Remover",
    videoSrc: '/tools/remove_subtitle_from_video_cover_5f49cc2925.mp4',
    posterSrc: '/tools/remove_subtitle_from_video_cover_ea229850e9.png',
    href: "/app?target=tool&code=remove-subtitles-from-video",
  },
  {
    title: "Video to Anime",
    videoSrc: '/tools/video-to-anime.mp4',
    posterSrc: '/tools/video_to_anime_converter_01_2_9b5741838a.jpg',
    href: "/app?target=tool&code=video-to-anime-ai",
  },
  {
    title: "AI Face Enhancer",
    videoSrc: '/tools/face-enhancer.mp4',
    posterSrc: '/tools/face_enhancer_01_11a665b057.jpg',
    href: "/app?target=tool&code=face-enhancer",
  },
  {
    title: "AI Video Filters",
    videoSrc: '/tools/video-filters.mp4',
    posterSrc: '/tools/ai_video_filters_01_c3bfa28158.jpg',
    href: "/app?target=tool&code=ai-video-filters",
  },
  {
    title: "Anime Video Enhancer",
    videoSrc: '/tools/anime-video-enhancer.mp4',
    posterSrc: '/tools/anime_video_enhancer_01_1d51d236ed.jpg',
    href: "/app?target=tool&code=anime-video-enhancer",
  },
  {
    title: "Video Background Remover",
    videoSrc: '/tools/video_background_remover_01_e2f88fe200.mov',
    posterSrc: '/tools/video_background_remover_01_4228059d2f.jpg',
    href: "/app?target=tool&code=video-background-remover",
  },
  {
    title: "Restyle Dance Video",
    videoSrc: '/tools/dance-generator.mp4',
    posterSrc: '/tools/ai_dance_generator_01_b9ea87bef3.jpg',
    href: "/app?target=tool&code=restyle-dance-video",
  },
  {
    title: "Remove Object from Video",
    videoSrc: '/tools/remove_object_from_video_60286c1017.mp4',
    posterSrc: '/tools/remove_object_ffrom_video_01_1d4432b565.jpg',
    href: "/app?target=tool&code=remove-object-from-video",
  },
  {
    title: "Motion Brush",
    videoSrc: '/tools/motion_brush_01_1369b24993.mp4',
    posterSrc: '/tools/motion_brush_01_115d6e9049.jpg',
    href: "/motion-brush",
  },
  {
    title: "AI Video Extender",
    videoSrc: '/tools/palace.mp4',
    posterSrc: '/tools/palace.jpg',
    href: "/app?target=tool&code=ai-video-extender",
  },
];