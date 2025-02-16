
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ChakraProvider } from '@chakra-ui/react'
import { ThemeProvider } from '@emotion/react'
import { system } from '@chakra-ui/react/preset'
import theme from './utils/themes/theme.ts'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider value={system}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ThemeProvider>
    </ChakraProvider>
  </StrictMode>,
)
