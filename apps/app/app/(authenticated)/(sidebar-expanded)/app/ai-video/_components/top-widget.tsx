import { Card, CardContent, CardHeader, CardTitle } from "@repo/design-system/components/ui/card"
import { Tooltip, TooltipContent, TooltipTrigger } from "@repo/design-system/components/ui/tooltip"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

const links = {
  primary: [
    { url: "#", label: "Image to Video" },
    { url: "#", label: "Text to Video" },
  ],
  secondary: [
    {
      url: "#",
      label: "AI Video Editor",
      tooltip: "Transform videos with simple text prompts",
      badge: "New",
    },
    { url: "#", label: "Video to Video" },
    { url: "#", label: "Lip Sync Video" },
  ],
}

export const TopWidget = () => {
  return (
    <div className="flex gap-2">
      {/* First Card */}
      <Card className="flex-2 justify-between p-3 pt-5">
        <CardHeader className="px-0">
          <CardTitle className="p-1 text-xl">AI Video</CardTitle>
        </CardHeader>

        <CardContent className="flex items-center gap-2 px-0">
          {links.primary.map((item) => (
            <Link
              className="group relative size-full flex-1 flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-linear-to-r from-[#4A475B99] to-[#312E4099] text-foreground/75 px-2 py-3 text-sm md:text-base 2xl:px-3 2xl:py-4 hover:text-accent-foreground hover:bg-white/10 duration-300"
              href={item.url}
              key={item.label}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                {item.label}
              </span>
              <ChevronRight
                className="w-0 h-0 mt-0.5 ml-1 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"
              />
            </Link>
          ))}
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card className="flex-3 justify-between p-3 pt-5">
        <CardHeader className="px-0">
          <CardTitle className="p-1 text-xl">Features</CardTitle>
        </CardHeader>

        <CardContent className="flex items-center gap-2 px-0">
          {links.secondary.map((item) => {
            const content = (
              <>
                <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  {item.label}
                </span>
                <ChevronRight
                  className="w-0 h-0 mt-0.5 ml-1 opacity-0 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:opacity-100"
                />
              </>
            )

            // Wrap with tooltip if defined
            const linkElement = item.tooltip ? (
              <Tooltip key={item.label}>
                <TooltipTrigger asChild>
                  <div className="relative w-full flex-1">
                    {item.badge && (
                      <span className="absolute top-1 end-1 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-md z-10">
                        {item.badge}
                      </span>
                    )}
                    <Link
                      className="group relative size-full flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-linear-to-r from-[#4A475B99] to-[#312E4099] text-foreground/75 px-2 py-3 text-sm md:text-base 2xl:px-3 2xl:py-4 hover:text-accent-foreground hover:bg-white/10 duration-300"
                      href={item.url}
                    >
                      {content}
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-accent text-white text-xs"
                  side="top"
                >
                  {item.tooltip}
                </TooltipContent>
              </Tooltip>
            ) : (
              <Link
                className="group relative size-full flex-1 flex items-center justify-center gap-1 overflow-hidden rounded-lg bg-linear-to-r from-[#4A475B99] to-[#312E4099] text-foreground/75 px-2 py-3 text-sm md:text-base 2xl:px-3 2xl:py-4 hover:text-accent-foreground hover:bg-white/10 duration-300"
                href={item.url}
                key={item.label}
              >
                {item.badge && (
                  <span className="absolute -top-2 -start-2 bg-green-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full z-10">
                    {item.badge}
                  </span>
                )}
                {content}
              </Link>
            )

            return linkElement
          })}
        </CardContent>
      </Card>
    </div>
  )
}
