import React, { Component } from 'react'

class Section extends Component {
  render() {
    return (
      <section className="section-04">
        <div className="section-header">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="title">Gallery</div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 text-center">
                <svg viewBox="0 0 1300 1100">
                  <image href={ require('@/assets/images/pages/home/section-04/im-01.jpg') } x="70" y="70" width="370" height="349"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-02.jpg') } x="470" y="0" width="370" height="349"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-03.jpg') } x="870" y="145" width="370" height="204"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-04.jpg') } x="0" y="450" width="442" height="558"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-05.jpg') } x="470" y="380" width="853" height="349"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-06.jpg') } x="470" y="760" width="370" height="349"/>
                  <image href={ require('@/assets/images/pages/home/section-04/im-07.jpg') } x="870" y="760" width="370" height="204"/>
                </svg>

                <button className="btn btn-outline-reno-sand">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Section
// <div className="photos">
//   <div className="photo photo-01">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-01.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-02">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-02.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-03">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-03.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-04">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-04.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-05">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-05.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-06">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-06.jpg') } alt=""/>
//   </div>
//   <div className="photo photo-07">
//     <img className="w-100" src={ require('@/assets/images/pages/home/section-04/im-07.jpg') } alt=""/>
//   </div>
