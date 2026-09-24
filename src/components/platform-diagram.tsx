const nodes = [
  { label: "Visitor Mgmt", x: 160, y: 56 },
  { label: "HRMS", x: 600, y: 56 },
  { label: "ERP", x: 160, y: 190 },
  { label: "CRM", x: 600, y: 190 },
  { label: "Asset Mgmt", x: 160, y: 324 },
  { label: "Car Parking", x: 600, y: 324 },
];

const NODE_GAP = 10;
const NODE_WIDTH = 136;
const NODE_HEIGHT = 32;

const hub = { x: 380, y: 190 };

export function PlatformDiagram() {
  return (
    <svg
      viewBox="0 0 760 380"
      className="w-full max-w-3xl"
      role="img"
      aria-label="Diagram showing workplace and enterprise modules connected to one Varexa platform hub"
    >
      <defs>
        <linearGradient id="pd-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-400)" stopOpacity="0.7" />
          <stop offset="100%" stopColor="var(--accent-400)" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="pd-hub" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--brand-500)" />
          <stop offset="100%" stopColor="var(--accent-500)" />
        </linearGradient>
      </defs>

      {nodes.map((node, i) => (
        <line
          key={node.label}
          x1={hub.x}
          y1={hub.y}
          x2={node.x}
          y2={node.y}
          stroke="url(#pd-line)"
          strokeWidth="1.5"
          className="animate-fade-in"
          style={{ animationDelay: `${i * 80 + 200}ms` }}
        />
      ))}

      {nodes.map((node, i) => (
        <g
          key={node.label}
          className="animate-float"
          style={{
            transformOrigin: `${node.x}px ${node.y}px`,
            animationDelay: `${i * 300}ms`,
          }}
        >
          <circle cx={node.x} cy={node.y} r="4" fill="var(--accent-400)" />
          <rect
            x={node.x > hub.x ? node.x + NODE_GAP : node.x - NODE_GAP - NODE_WIDTH}
            y={node.y - NODE_HEIGHT / 2}
            width={NODE_WIDTH}
            height={NODE_HEIGHT}
            rx="16"
            fill="var(--ink-900)"
            stroke="rgba(255,255,255,0.12)"
          />
          <text
            x={
              node.x > hub.x
                ? node.x + NODE_GAP + NODE_WIDTH / 2
                : node.x - NODE_GAP - NODE_WIDTH / 2
            }
            y={node.y + 4}
            textAnchor="middle"
            fontSize="12"
            fontWeight="600"
            fill="rgba(255,255,255,0.85)"
          >
            {node.label}
          </text>
        </g>
      ))}

      <g className="animate-pulse-glow">
        <circle cx={hub.x} cy={hub.y} r="64" fill="url(#pd-hub)" opacity="0.18" />
      </g>
      <rect
        x={hub.x - 78}
        y={hub.y - 34}
        width="156"
        height="68"
        rx="18"
        fill="url(#pd-hub)"
      />
      <text
        x={hub.x}
        y={hub.y - 4}
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="white"
      >
        Varexa
      </text>
      <text
        x={hub.x}
        y={hub.y + 16}
        textAnchor="middle"
        fontSize="11"
        fill="rgba(255,255,255,0.85)"
      >
        Platform
      </text>
    </svg>
  );
}
