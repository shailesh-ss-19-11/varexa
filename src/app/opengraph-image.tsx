import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logoData = await readFile(join(process.cwd(), "public/logo-icon.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #040c26 0%, #081a52 55%, #0b2570 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            color: "rgba(255,255,255,0.6)",
            fontSize: 26,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 10,
              background: "white",
              overflow: "hidden",
            }}
          >
            <img src={logoSrc} width={36} height={36} alt="" />
          </div>
          {siteConfig.shortName}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 68,
            fontWeight: 700,
            color: "white",
            maxWidth: 950,
            lineHeight: 1.1,
          }}
        >
          Technology that simplifies business
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
            maxWidth: 850,
          }}
        >
          Workplace management, enterprise systems, and custom software from
          one technology partner.
        </div>
      </div>
    ),
    { ...size },
  );
}
