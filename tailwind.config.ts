import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      colors: {
        ambient: {
          light: "#F2F6FA",
          base: "#D9E3EE",
          dark: "#48608B",
          deeper: "#2B4472",
        },
        primary: {
          coral: {
            light: "#FFE4E2",
            base: "#FF7066",
            dark: "#FF2A1D",
          },
          ocean: {
            light: "#D5F6FA",
            base: "#36C2E6",
            dark: "#14748F",
          },
        },
        secondary: {
          warm: {
            light: "#FFE6D1",
            base: "#FF9E56",
            dark: "#FF7A18",
          },
          cool: {
            light: "#E1F0FF",
            base: "#56ADFF",
            dark: "#0070F3",
          },
        },
        accent: {
          sunrise: {
            light: "#FFE9DB",
            base: "#FF914B",
            dark: "#FF6503",
          },
          twilight: {
            light: "#E8E0FF",
            base: "#8C66FF",
            dark: "#5E29FF",
          },
        },
        surface: {
          light: "rgba(255, 255, 255, 0.08)",
          dark: "rgba(0, 0, 0, 0.04)",
        },
        grain: {
          light: "rgba(255, 255, 255, 0.05)",
          dark: "rgba(0, 0, 0, 0.05)",
        },
      },
      backgroundImage: {
        'gradient-ambient': 'linear-gradient(165deg, var(--tw-gradient-ambient-start), var(--tw-gradient-ambient-end))',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-primary-start), var(--tw-gradient-primary-end))',
        'gradient-accent': 'linear-gradient(135deg, var(--tw-gradient-accent-start), var(--tw-gradient-accent-end))',
        'gradient-mesh': 'radial-gradient(circle at center, var(--tw-gradient-mesh-center) 0%, var(--tw-gradient-mesh-mid) 50%, var(--tw-gradient-mesh-edge) 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, var(--tw-gradient-glow-center), transparent 80%)',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)'/%3E%3C/svg%3E\")",
      },
      opacity: {
        '15': '0.15',
        '85': '0.85',
      },
      backdropBlur: {
        'xs': '2px',
        '4xl': '72px',
      },
      animation: {
        'gradient-shift': 'gradient-shift 10s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': {
            'background-position': '0% 50%',
          },
          '50%': {
            'background-position': '100% 50%',
          },
        },
        'glow-pulse': {
          '0%, 100%': {
            opacity: '0.6',
          },
          '50%': {
            opacity: '0.8',
          },
        },
      },
    },
  },
  plugins: [
    function({ addBase, theme }: any) {
      addBase({
        ':root': {
          // Light mode
          '--tw-gradient-ambient-start': theme('colors.ambient.light'),
          '--tw-gradient-ambient-end': theme('colors.ambient.base'),
          '--tw-gradient-primary-start': theme('colors.primary.coral.base'),
          '--tw-gradient-primary-end': theme('colors.primary.ocean.base'),
          '--tw-gradient-accent-start': theme('colors.accent.sunrise.base'),
          '--tw-gradient-accent-end': theme('colors.accent.twilight.base'),
          '--tw-gradient-mesh-center': theme('colors.primary.coral.light'),
          '--tw-gradient-mesh-mid': theme('colors.primary.ocean.base'),
          '--tw-gradient-mesh-edge': theme('colors.accent.twilight.base'),
          '--tw-gradient-glow-center': theme('colors.primary.coral.base'),
        },
        '.dark': {
          // Dark mode
          '--tw-gradient-ambient-start': theme('colors.ambient.dark'),
          '--tw-gradient-ambient-end': theme('colors.ambient.deeper'),
          '--tw-gradient-primary-start': theme('colors.primary.coral.dark'),
          '--tw-gradient-primary-end': theme('colors.primary.ocean.dark'),
          '--tw-gradient-accent-start': theme('colors.accent.sunrise.dark'),
          '--tw-gradient-accent-end': theme('colors.accent.twilight.dark'),
          '--tw-gradient-mesh-center': theme('colors.primary.coral.base'),
          '--tw-gradient-mesh-mid': theme('colors.primary.ocean.dark'),
          '--tw-gradient-mesh-edge': theme('colors.accent.twilight.dark'),
          '--tw-gradient-glow-center': theme('colors.primary.coral.dark'),
        },
      });
    },
  ],
};

export default config;