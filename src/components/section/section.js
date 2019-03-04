import React from 'react'
import "./section.css"

export default function section() {
  return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Bonjour</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">col1</div>
                <div className="col-md-4">col2</div>
                <div className="col-md-4">col3</div>
            </div>
        </div>

    </section>
  )
}
