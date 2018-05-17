import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-02">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 align-self-center">
              <div className="section-content">
                <div className="title">About me</div>
                <div className="line"></div>
                <p className="content">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p className="content">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                <button className="btn btn-outline-reno-sand">Read more</button>
              </div>
            </div>
            <div className="col-xl-5 mx-auto">
              <img className="w-100" src={ require('@/assets/images/pages/home/section-02/im-01.jpg') } alt=""/>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
