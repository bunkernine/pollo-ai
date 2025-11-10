// app/api/proxy/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const target = url.searchParams.get("url");
  if (!target) return new NextResponse("Missing url", { status: 400 });

  const res = await fetch(target);
  const buffer = await res.arrayBuffer();

  return new NextResponse(buffer, {
    headers: {
      "Content-Type": res.headers.get("content-type") || "application/octet-stream",
      "Access-Control-Allow-Origin": "*",
    },
  });
}
