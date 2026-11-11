import { ImageResponse } from "next/og";
import { DATA } from "@/data/resume";

export const alt = `${DATA.name} | Software Engineer & Creative Designer`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#0f0f10",
          position: "relative",
        }}
      >
        {/* subtle grid dots */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.35,
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #333 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background:
              "radial-gradient(circle at center, rgba(56,189,248,0.16), rgba(167,139,250,0.08) 55%, transparent 75%)",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            width: "100%",
            padding: "64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 56,
                height: 56,
                borderRadius: 14,
                background: "linear-gradient(135deg, #38bdf8, #a78bfa)",
                color: "#0f0f10",
                fontSize: 26,
                fontWeight: 700,
              }}
            >
              VA
            </div>
            <div
              style={{
                display: "flex",
                color: "#a1a1aa",
                fontSize: 24,
              }}
            >
              vitoaditya-portfolio-2026.netlify.app
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div
              style={{
                display: "flex",
                color: "#fafafa",
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
              }}
            >
              {DATA.name}
            </div>
            <div
              style={{
                display: "flex",
                color: "#38bdf8",
                fontSize: 30,
                fontWeight: 600,
              }}
            >
              Software Engineer & Creative Designer
            </div>
            <div
              style={{
                display: "flex",
                color: "#a1a1aa",
                fontSize: 24,
                maxWidth: 900,
                lineHeight: 1.4,
              }}
            >
              Informatics student at Universitas Airlangga who builds web
              applications people actually enjoy using.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 20,
              color: "#71717a",
              fontSize: 22,
            }}
          >
            <div style={{ display: "flex" }}>github.com/viesloxy</div>
            <div style={{ display: "flex" }}>·</div>
            <div style={{ display: "flex" }}>linkedin.com/in/vitoaditya</div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
