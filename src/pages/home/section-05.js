import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-05">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 mx-auto">
              <img className="w-100" src={ require('@/assets/images/pages/home/section-05/im-01.jpg') } alt=""/>
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="section-content">
                <div className="title">Contact</div>
                <div className="line"></div>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Your name</label>
                      <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group col-md-6">
                      <label>Your email</label>
                      <input type="email" className="form-control"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Message</label>
                    <textarea className="form-control" rows="3"></textarea>
                  </div>
                  <button className="btn btn-outline-reno-sand">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
