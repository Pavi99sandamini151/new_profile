import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {ConfigProvider} from "antd";

createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
      <ConfigProvider
          theme={{
              token: {
                  colorPrimary: '#720808',
              },
          }}
      >
      <App />
      </ConfigProvider>
  </React.StrictMode>,
)
