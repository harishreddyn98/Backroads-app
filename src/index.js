import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './app'
import "./index.css";

const Backroads = () => {
  return(
    <div>
     <App/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Backroads/>)