//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="well"></div>
            <textarea name="" id="editor" cols="30" rows="10"></textarea>
          </div>
          <div className="col-md-6">
            <div id="preview">
              
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
