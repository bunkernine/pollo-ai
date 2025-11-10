import { Button } from "@repo/design-system/components/ui/button"
import { cn } from "@repo/design-system/lib/utils"
import { ChevronRight } from "lucide-react"
import { IconType } from "react-icons/lib"

export const ButtonExtra = ({
  label,
  icon: Icon
}: {
  label: string,
  icon: IconType
}) => {

  return (
    <Button className="bg-[#1e1c2a] flex flex-col gap-3 p-5 h-auto max-w-96 items-start rounded-xl border border-white/10 hover:bg-[#272531] transition-all group">
      <span className="w-6 h-6">
        {Icon && <Icon className="w-6! h-6!" />}
      </span>

      <span className="flex text-base items-center">
        {label}
        <ChevronRight
          className="mt-0.5 ml-6 transform transition-all duration-300 ease-in-out group-hover:translate-x-2"
        />
      </span>
    </Button>
  )
}
