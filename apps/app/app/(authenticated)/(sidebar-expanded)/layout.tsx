import { auth, currentUser } from "@repo/auth/server";
import { SidebarProvider } from "@repo/design-system/components/ui/sidebar";
// import { showBetaFeature } from "@repo/feature-flags";
import { secure } from "@repo/security";
import type { ReactNode } from "react";
import { env } from "@/env";
import { NotificationsProvider } from "../components/notifications-provider";
import { SidebarExpanded } from "../components/sidebar-expanded";
import { Header } from "../components/header";

type AppLayoutProperties = {
  readonly children: ReactNode;
};

const AppLayout = async ({ children }: AppLayoutProperties) => {
  // if (env.ARCJET_KEY) {
  //   await secure(["CATEGORY:PREVIEW"]);
  // }

  const user = await currentUser();
  const { redirectToSignIn } = await auth();
  // const betaFeature = await showBetaFeature();

  if (!user) {
    return redirectToSignIn();
  }

  return (
    <NotificationsProvider userId={user.id}>
      <Header page="Data Fetching" pages={["Building Your Application"]} />


      {/* {env.LIVEBLOCKS_SECRET && (
                <CollaborationProvider orgId={orgId}>
                  <AvatarStack />
                  <Cursors />
                </CollaborationProvider>
              )} */}


      <SidebarProvider>
        <SidebarExpanded>
          {/* {betaFeature && (
            <div className="m-4 rounded-full bg-blue-500 p-1.5 text-center text-sm text-white">
              Beta feature now available
            </div>
          )} */}
          <div className="mx-auto w-full lg:flex-1 lg:px-4 lg:pl-10 xl:pt-3 pb-16">
            {children}
          </div>
        </SidebarExpanded>
      </SidebarProvider>
    </NotificationsProvider>
  );
};

export default AppLayout;
