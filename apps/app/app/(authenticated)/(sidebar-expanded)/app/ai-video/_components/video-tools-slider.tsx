import { ChevronRight } from "lucide-react"
import Link from "next/link"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@repo/design-system/components/ui/carousel"
import { Card, CardContent } from "@repo/design-system/components/ui/card"

export const VideoToolsSlider = () => {

  return (
    <div>
      <div className="text-f-text-secondary mb-3 flex items-center justify-between gap-2 text-lg font-semibold">
        <h2>Video Tools</h2>

        <Link href="#">
          View More
          <ChevronRight />
        </Link>
      </div>

      <div className="relative w-full">
        <Carousel className="w-full">
          <CarouselContent>
            {Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-20" />
          <CarouselNext className="right-20" />
        </Carousel>
      </div>
    </div>
  )
}

export default VideoToolsSlider