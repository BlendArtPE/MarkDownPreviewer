//import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className="container-fluid text-center text-bg-secondary ">
        <div className="row vh-100">
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                  <div className="card-title">
                    <h2>Editor</h2>
                  </div>
                  <div className="card-text">
                    <textarea className='form-control' name="" id="editor" cols="50" rows="15"></textarea>
                  </div>
              </div>
            </div>
          </div>
          <div className="col-md-2 text-bg-info">
            
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <div className="card">
              <div className="card-body">
                  <div className="card-title">
                    <h2>Previewer</h2>
                  </div>
                  <div className="card-text" id='preview'>
                  </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
