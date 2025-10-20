import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'

import { router } from './Router/Router.jsx'
import AuthProvider from './context/AuthContext/AuthProvider.jsx'

// auth context provider in single page example
// export const AuthContext = createContext(null)
// const authInfo = {
//   email: 'potato@alu.com'
// }
// <StrictMode>
//     <AuthContext value={authInfo}>
//       <RouterProvider router={router}>
//       </RouterProvider>
//     </AuthContext>
//   </StrictMode>,



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
