import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ColorList from "./list.jsx"

const root=createRoot(document.getElementById("root"));
/*createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)*/

root.render(<div>

  <h2>Color List</h2>
  <ColorList/>
</div>);
