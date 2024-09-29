import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Layout from './layout/Layout.tsx'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Layout.Layout>
      <App />
    </Layout.Layout>
  </StrictMode>,
)
