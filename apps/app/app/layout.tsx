import { env } from "@/env";
import "./styles.css";
// import { AnalyticsProvider } from "@repo/analytics/provider";
import { DesignSystemProvider } from "@repo/design-system";
import { fonts } from "@repo/design-system/lib/fonts";
// import { Toolbar } from "@repo/feature-flags/components/toolbar";
import type { ReactNode } from "react";
import NextTopLoader from "nextjs-toploader"

type RootLayoutProperties = {
  readonly children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProperties) => (
  <html className={fonts} lang="en" suppressHydrationWarning>
    <head>
      <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
    </head>
    <body>

      {/* Top Loader */}
      <NextTopLoader
        color="#C721FF"           // matches your Shadcn gradient theme
        initialPosition={0.08}     // where the bar starts
        crawlSpeed={200}           // speed of automatic crawling
        height={3}                 // bar thickness
        crawl={true}               // auto-progress
        showSpinner={false}        // usually spinner is unnecessary
        easing="ease"              // smooth easing
        speed={200}                // bar speed
        shadow="0 0 10px #C721FF,0 0 5px #FF3466" // subtle glow
        template={`
        <div class="bar" role="bar">
          <div class="peg"></div>
        </div>
      `}
        zIndex={1600}              // ensures bar stays on top
        showAtBottom={false}       // keep at top
      />


      {/* <AnalyticsProvider> */}
      <DesignSystemProvider
        // helpUrl={env.NEXT_PUBLIC_DOCS_URL}
        helpUrl={""}
        privacyUrl={new URL(
          "/legal/privacy",
          env.NEXT_PUBLIC_WEB_URL
        ).toString()}
        termsUrl={new URL("/legal/terms", env.NEXT_PUBLIC_WEB_URL).toString()}
      >
        {children}
      </DesignSystemProvider>
      {/* </AnalyticsProvider> */}
      {/* <Toolbar /> */}
    </body>
  </html>
);

export default RootLayout;
