@import 'tailwindcss';
@import 'tw-animate-css';
@import 'shadcn/tailwind.css';

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
  --color-ring: var(--ring);
  --color-input: var(--input);
  --color-border: var(--border);
  --color-destructive: var(--destructive);
  --color-highlight-foreground: var(--highlight-foreground);
  --color-highlight: var(--highlight);
  --color-accent-foreground: var(--accent-foreground);
  --color-accent: var(--accent);
  --color-muted-foreground: var(--muted-foreground);
  --color-muted: var(--muted);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-secondary: var(--secondary);
  --color-primary-foreground: var(--primary-foreground);
  --color-primary: var(--primary);
  --color-popover-foreground: var(--popover-foreground);
  --color-popover: var(--popover);
  --color-card-foreground: var(--card-foreground);
  --color-card: var(--card);
  --color-foreground: var(--foreground);
  --color-background: var(--background);
  --radius-sm: calc(var(--radius) * 0.6);
  --radius-md: calc(var(--radius) * 0.8);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) * 1.4);
  --radius-2xl: calc(var(--radius) * 1.8);
  --radius-3xl: calc(var(--radius) * 2.2);
}

:root {
  color-scheme: light;
  --background: oklch(0.99 0.004 240);
  --foreground: oklch(0.18 0.025 240);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.18 0.025 240);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.18 0.025 240);
  --primary: oklch(0.31 0.075 240);
  --primary-foreground: oklch(0.99 0.004 240);
  --secondary: oklch(0.95 0.018 235);
  --secondary-foreground: oklch(0.31 0.075 240);
  --muted: oklch(0.96 0.007 240);
  --muted-foreground: oklch(0.48 0.025 240);
  --accent: oklch(0.7 0.16 155);
  --accent-foreground: oklch(0.16 0.025 155);
  --highlight: oklch(0.84 0.16 85);
  --highlight-foreground: oklch(0.22 0.04 70);
  --destructive: oklch(0.58 0.22 27);
  --border: oklch(0.9 0.012 240);
  --input: oklch(0.9 0.012 240);
  --ring: oklch(0.57 0.12 238);
  --radius: 0.75rem;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-background text-foreground;
  }
}
