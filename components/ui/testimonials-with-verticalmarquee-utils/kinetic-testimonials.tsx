"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  name: string;
  handle: string;
  review: string;
  avatar: string;
}

export interface KineticTestimonialProps {
  testimonials: TestimonialItem[];
  title?: string;
  subtitle?: string;
  desktopColumns?: number;
  tabletColumns?: number;
  mobileColumns?: number;
  speed?: number;
  className?: string;
}

export default function KineticTestimonial({
  testimonials,
  desktopColumns = 5,
  tabletColumns = 3,
  mobileColumns = 2,
  speed = 1,
  className,
}: KineticTestimonialProps) {
  // Distribute testimonials across columns
  const getColumns = (colCount: number) => {
    const cols: TestimonialItem[][] = Array.from({ length: colCount }, () => []);
    testimonials.forEach((item, index) => {
      cols[index % colCount].push(item);
    });
    return cols;
  };

  const columns = getColumns(Math.max(desktopColumns, 3));

  // Animation duration calculated from speed
  const baseDuration = Math.round(35 / (speed || 1));

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden py-6 select-none",
        "h-[540px] md:h-[620px]",
        className
      )}
    >
      {/* Top & bottom smooth gradient mask */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-24 bg-gradient-to-b from-background via-background/80 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Columns Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 h-full">
        {columns.map((colItems, colIdx) => {
          const isReverse = colIdx % 2 === 1;
          const animationClass = isReverse ? "animate-scroll-down" : "animate-scroll-up";
          const durationStyle = {
            animationDuration: `${baseDuration + (colIdx % 3) * 5}s`,
          };

          // Duplicate items to ensure smooth infinite loop
          const repeatedItems = [...colItems, ...colItems, ...colItems, ...colItems];

          return (
            <div
              key={`col-${colIdx}`}
              className="relative overflow-hidden h-full flex flex-col"
            >
              <div
                className={cn("flex flex-col gap-4", animationClass)}
                style={durationStyle}
              >
                {repeatedItems.map((item, itemIdx) => (
                  <Card
                    key={`item-${colIdx}-${itemIdx}`}
                    className="border-border/60 bg-card/85 backdrop-blur-sm transition-all duration-300 hover:border-emerald-600/50 hover:shadow-lg dark:hover:border-emerald-500/50 p-4"
                  >
                    <CardContent className="p-0 space-y-3">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-9 w-9 border border-border">
                          <AvatarImage src={item.avatar} alt={item.name} />
                          <AvatarFallback className="bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 font-semibold text-xs">
                            {item.name.slice(0, 2).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate">
                            {item.handle}
                          </p>
                        </div>
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground line-clamp-4">
                        “{item.review}”
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
