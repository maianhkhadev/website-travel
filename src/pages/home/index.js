import React, { Component } from 'react'
import '@/assets/scss/pages/home/index.scss'
import Section01 from './section-01'
import Section02 from './section-02'
import Section03 from './section-03'
import Section04 from './section-04'
import Section05 from './section-05'

class Page extends Component {
  render() {
    return (
      <div>
        <Section01 />

        <Section02 />

        <Section03 />

        <Section04 />

        <Section05 />
      </div>
    )
  }
}

export default Page
