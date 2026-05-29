"use client";

import * as React from "react";
import * as Recharts from "recharts";
import { cn } from "@/lib/utils";

/* -------------------------------------------------------
   TYPES SAFE (Recharts 3.x compatible)
------------------------------------------------------- */

const THEMES = { light: "", dark: ".dark" } as const;

export type ChartConfig = Record<
  string,
  {
    label?: React.ReactNode;
    icon?: React.ComponentType;
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme?: Record<keyof typeof THEMES, string> }
  )
>;

type ChartContextValue = {
  config: ChartConfig;
};

const ChartContext = React.createContext<ChartContextValue | null>(null);

function useChart() {
  const ctx = React.useContext(ChartContext);
  if (!ctx) throw new Error("useChart must be used within ChartContainer");
  return ctx;
}

/* -------------------------------------------------------
   CONTAINER
------------------------------------------------------- */

type ChartContainerProps = React.ComponentProps<"div"> & {
  config: ChartConfig;
  children: React.ReactNode;
};

export const ChartContainer = React.forwardRef<
  HTMLDivElement,
  ChartContainerProps
>(({ className, config, children, id, ...props }, ref) => {
  const uid = React.useId();
  const chartId = `chart-${id || uid.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        ref={ref}
        data-chart={chartId}
        className={cn("relative aspect-video w-full text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <Recharts.ResponsiveContainer width="100%" height="100%">
          {children}
        </Recharts.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
});
ChartContainer.displayName = "ChartContainer";

/* -------------------------------------------------------
   STYLE (CSS VARIABLES)
------------------------------------------------------- */

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const entries = Object.entries(config).filter(([, c]) => c.color || c.theme);

  if (!entries.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            return `
${prefix} [data-chart=${id}] {
${entries
  .map(([key, item]) => {
    const color = item.theme?.[theme as keyof typeof item.theme] || item.color;
    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`;
          })
          .join("\n"),
      }}
    />
  );
};

/* -------------------------------------------------------
   TOOLTIP (SAFE TYPES - NO RECHARTS TYPES)
------------------------------------------------------- */

type TooltipItem = {
  dataKey?: string;
  name?: string;
  value?: any;
  color?: string;
  payload?: any;
};

type ChartTooltipProps = {
  active?: boolean;
  payload?: TooltipItem[];
  label?: any;
  className?: string;

  hideLabel?: boolean;
  hideIndicator?: boolean;
  indicator?: "dot" | "line" | "dashed";
};

export const ChartTooltipContent = React.forwardRef<
  HTMLDivElement,
  ChartTooltipProps
>(
  (
    {
      active,
      payload,
      label,
      className,
      hideLabel,
      hideIndicator,
      indicator = "dot",
    },
    ref,
  ) => {
    const { config } = useChart();

    if (!active || !payload?.length) return null;

    return (
      <div
        ref={ref}
        className={cn(
          "rounded-md border bg-background px-3 py-2 text-xs shadow-md",
          className,
        )}
      >
        {!hideLabel && label !== undefined && (
          <div className="mb-1 font-medium">{String(label)}</div>
        )}

        <div className="grid gap-1">
          {payload.map((item, index) => {
            const key = item.dataKey ?? item.name ?? "value";
            const cfg = config[key];

            const color = item.color;

            return (
              <div
                key={`${key}-${index}`}
                className="flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2">
                  {!hideIndicator && (
                    <span
                      className={cn("h-2 w-2 rounded-sm", {
                        "rounded-full": indicator === "dot",
                      })}
                      style={{ backgroundColor: color }}
                    />
                  )}

                  <span className="text-muted-foreground">
                    {cfg?.label ?? item.name ?? key}
                  </span>
                </div>

                <span className="font-mono tabular-nums">
                  {item.value?.toLocaleString?.() ?? item.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  },
);
ChartTooltipContent.displayName = "ChartTooltipContent";

/* -------------------------------------------------------
   LEGEND (SAFE)
------------------------------------------------------- */

type ChartLegendItem = {
  value?: string;
  dataKey?: string;
  color?: string;
};

type ChartLegendProps = {
  payload?: ChartLegendItem[];
  className?: string;
};

export const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  ChartLegendProps
>(({ payload, className }, ref) => {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div
      ref={ref}
      className={cn("flex flex-wrap items-center gap-4", className)}
    >
      {payload.map((item, index) => {
        const key = item.dataKey ?? item.value ?? "";
        const cfg = config[key];

        return (
          <div key={`${key}-${index}`} className="flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-sm"
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm text-muted-foreground">
              {cfg?.label ?? item.value}
            </span>
          </div>
        );
      })}
    </div>
  );
});
ChartLegendContent.displayName = "ChartLegendContent";

/* -------------------------------------------------------
   EXPORT RECHARTS PRIMITIVES
------------------------------------------------------- */

export const ChartTooltip = Recharts.Tooltip;
export const ChartLegend = Recharts.Legend;
export const ChartLine = Recharts.Line;
export const ChartBar = Recharts.Bar;
export const ChartXAxis = Recharts.XAxis;
export const ChartYAxis = Recharts.YAxis;
export const ChartGrid = Recharts.CartesianGrid;
