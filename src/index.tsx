import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import './shared/styles/style.css'
import Home from './modules/home'
import Header from './shared/components/header'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="baseStyle">
        <Header />
        <Home />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
