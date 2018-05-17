import React, { Component } from 'react'
import './Root.scss'
import Home from './pages/home/index'

class Root extends Component {
  render() {
    return (
      <div className="Root">
        <header>
        </header>

        <main className="main">
          <Home />
        </main>

        <footer>
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <a href="#">
                  <img className="img-fluid" src={ require('@/assets/images/icon-01.png') } alt=""/>
                </a>
                <a href="#">
                  <img className="img-fluid" src={ require('@/assets/images/icon-02.png') } alt=""/>
                </a>
                <a href="#">
                  <img className="img-fluid" src={ require('@/assets/images/icon-03.png') } alt=""/>
                </a>
                <a href="#">
                  <img className="img-fluid" src={ require('@/assets/images/icon-04.png') } alt=""/>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Root
