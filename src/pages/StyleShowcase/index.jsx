import React from "react";
import { ModeToggle } from "../../components";

const colorPairs = [
  { name: "background", bg: "bg-background", text: "text-foreground" },
  { name: "foreground", bg: "bg-foreground", text: "text-background" },
  { name: "card", bg: "bg-card", text: "text-card-foreground" },
  { name: "popover", bg: "bg-popover", text: "text-popover-foreground" },
  { name: "primary", bg: "bg-primary", text: "text-primary-foreground" },
  { name: "secondary", bg: "bg-secondary", text: "text-secondary-foreground" },
  { name: "muted", bg: "bg-muted", text: "text-muted-foreground" },
  { name: "accent", bg: "bg-accent", text: "text-accent-foreground" },
  { name: "destructive", bg: "bg-destructive", text: "text-destructive-foreground" },
  { name: "input", bg: "bg-input", text: "text-foreground" },
  { name: "border", bg: "bg-border", text: "text-foreground" },
  { name: "ring", bg: "bg-ring", text: "text-background" },
  { name: "chart-1", bg: "bg-chart-1", text: "text-background" },
  { name: "chart-2", bg: "bg-chart-2", text: "text-background" },
  { name: "chart-3", bg: "bg-chart-3", text: "text-background" },
  { name: "chart-4", bg: "bg-chart-4", text: "text-background" },
  { name: "chart-5", bg: "bg-chart-5", text: "text-background" },
  { name: "sidebar", bg: "bg-sidebar", text: "text-sidebar-foreground" },
  { name: "sidebar-primary", bg: "bg-sidebar-primary", text: "text-sidebar-primary-foreground" },
  { name: "sidebar-accent", bg: "bg-sidebar-accent", text: "text-sidebar-accent-foreground" },
  { name: "sidebar-border", bg: "bg-sidebar-border", text: "text-foreground" },
  { name: "sidebar-ring", bg: "bg-sidebar-ring", text: "text-background" },
];

const fontClasses = [
  { name: "font-sans", className: "font-sans" },
  { name: "font-serif", className: "font-serif" },
  { name: "font-mono", className: "font-mono" },
];

const shadowClasses = [
  { name: "shadow-2xs", className: "shadow-2xs" },
  { name: "shadow-xs", className: "shadow-xs" },
  { name: "shadow-sm", className: "shadow-sm" },
  { name: "shadow", className: "shadow" },
  { name: "shadow-md", className: "shadow-md" },
  { name: "shadow-lg", className: "shadow-lg" },
  { name: "shadow-xl", className: "shadow-xl" },
  { name: "shadow-2xl", className: "shadow-2xl" },
];

const radiusClasses = [
  { name: "radius-sm", className: "rounded-sm" },
  { name: "radius-md", className: "rounded-md" },
  { name: "radius-lg", className: "rounded-lg" },
  { name: "radius-xl", className: "rounded-xl" },
];

export  function StyleShowcase() {
  return (
    <div className="p-6 space-y-12 bg-background text-foreground min-h-screen font-sans">
        <ModeToggle/>
      <h1 className="text-3xl font-bold mb-4">Tailwind Theme Showcase</h1>

      {/* Colors */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {colorPairs.map(({ name, bg, text }) => (
            <div key={name} className={`${bg} ${text} p-4 rounded-lg shadow-md`}>
              <div className="font-semibold">{name}</div>
              <div className="text-xs italic">{bg} + {text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Fonts */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Fonts</h2>
        <div className="space-y-4">
          {fontClasses.map(({ name, className }) => (
            <div key={name} className={`${className} text-lg`}>
              <strong>{name}:</strong> The quick brown fox jumps over the lazy dog.
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Shadows</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {shadowClasses.map(({ name, className }) => (
            <div key={name} className={`bg-card text-card-foreground p-4 ${className} rounded-lg`}>
              <div className="font-semibold">{name}</div>
              <div className="text-xs italic">{className}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Radius */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Border Radius</h2>
        <div className="flex flex-wrap gap-6">
          {radiusClasses.map(({ name, className }) => (
            <div key={name} className={`bg-primary text-primary-foreground p-4 ${className}`}>
              {name}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
