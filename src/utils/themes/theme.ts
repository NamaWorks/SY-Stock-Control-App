import { createSystem, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px"
    },
    tokens: {
      colors: {
        brand: {
          50: {value: '#1C1E1F'},
          100: {value: '#C2D6DB'},
          200: {value: '#FF9C00'},
          300: {value: '#FFFBF5'},
          400: {value: '#4A565A'},
          500: {value: '#1C1E1F'},
          600: {value: '#C2D6DB'},
          700: {value: '#FF9C00'},
          800: {value: '#FFFBF5'},
          900: {value: '#4A565A'},
          950: {value: '#4A565A'},
        }
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          solid: { value: "{colors.brand.500}" },
          contrast: { value: "{colors.brand.100}" },
          fg: { value: "{colors.brand.700}" },
          muted: { value: "{colors.brand.100}" },
          subtle: { value: "{colors.brand.200}" },
          emphasized: { value: "{colors.brand.300}" },
          focusRing: { value: "{colors.brand.500}" },
          orange:{value: "{colors.brand.200}"},
          lightBlue:{value: "{colors.brand.100}"},
          dark:{value: "{colors.brand.50}"},
          cream:{value: "{colors.brand.300}"},
          iron:{value: "{colors.brand.400}"},
        },
      },
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
  },
})

export default createSystem(config)