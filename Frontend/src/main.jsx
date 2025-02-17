// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { OrderProvider } from './Component/User/SubmitOrder/OrderContext'
import App from './App'
createRoot(document.getElementById('root')).render(
<OrderProvider>

    <App />
</OrderProvider>
  
)
