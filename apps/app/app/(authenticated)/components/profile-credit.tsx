import { Button } from "@repo/design-system/components/ui/button"
import { NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@repo/design-system/components/ui/navigation-menu"
import { Database } from "lucide-react"

export const ProfileCredit = () => {

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="[&>svg]:hidden">
            <span className="flex items-center gap-1.5">4 <Database className="w-3 h-3" /></span>
          </NavigationMenuTrigger>

          <NavigationMenuContent className="md:w-3xs">
            <p>Free</p>

            <div className="bg-card">
              <div>Daily Credits</div>
              <div className="flex items-center justify-between">
                <p>Credits used</p>
                <p className="flex items-center">0/4 <Database className="w-3 h-3" /></p>
              </div>
            </div>

            <Button>Add More</Button>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuIndicator />
      </NavigationMenuList>
    </NavigationMenu>
  )
}