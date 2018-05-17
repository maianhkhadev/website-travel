import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-03">
        <div className="section-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="title">Lastest articles</div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-4">
                <div className="article">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-03/im-01.jpg') } alt=""/>
                  </div>
                  <div className="title">Lorem Ipsum Dolor</div>
                  <div className="content">Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</div>
                  <a  className="read-more" href="#">Read more</a>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="article article-center">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-03/im-02.jpg') } alt=""/>
                  </div>
                  <div className="title">Lorem Ipsum Dolor</div>
                  <div className="content">Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</div>
                  <a  className="read-more" href="#">Read more</a>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="article">
                  <div className="thumbnail">
                    <img className="w-100" src={ require('@/assets/images/pages/home/section-03/im-03.jpg') } alt=""/>
                  </div>
                  <div className="title">Lorem Ipsum Dolor</div>
                  <div className="content">Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.</div>
                  <a  className="read-more" href="#">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
