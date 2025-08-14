/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        white: '#F4F4F5',
        primary: {
          50: 'oklch(95.88% 0.019 29.62)',
          100: 'oklch(91.81% 0.039 29.71)',
          200: 'oklch(83.69% 0.083 31.76)',
          300: 'oklch(74.76% 0.144 35.82)',
          400: 'oklch(66.59% 0.185 41.5)',
          500: 'oklch(57.66% 0.161 41.19)',
          600: 'oklch(48.83% 0.135 41.63)',
          700: 'oklch(40.76% 0.113 41.23)',
          800: 'oklch(31.89% 0.088 41.32)',
          900: 'oklch(23.13% 0.064 40.68)',
          950: 'oklch(18.2% 0.052 41.14)',
          DEFAULT: 'oklch(66.59% 0.185 41.5)'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
  // Optimización de rendimiento
  corePlugins: {
    // Desactivar plugins que no se usan para reducir el tamaño del CSS
    preflight: true,
    container: true,
    accessibility: false,
    backdropBlur: true,
    backdropFilter: true,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
  },
  // Configuración de JIT para mejor rendimiento
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    options: {
      safelist: [
        // Agregar clases que se generan dinámicamente
        /^grid-cols-/,
        /^grid-rows-/,
        /^row-span-/,
        /^col-start-/,
        /^row-start-/,
      ]
    }
  }
} 