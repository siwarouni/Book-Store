import React from 'react' //{ StrictMode }
import ReactDom from 'react-dom/client' //{ createRoot }
import './index.css'
import App from './App.jsx'
import { RouterProvider} from 'react-router-dom'
import router from './routers/router.jsx'
import AuthProvider from './contects/AuthProvider.jsx'

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
