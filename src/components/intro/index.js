import React, { PureComponent } from 'react';
import Typo from '../typo';
import './styles.scss';
import Typed from 'typed.js'
import scrollTo from 'gatsby-plugin-smoothscroll';
import { FaChevronDown } from 'react-icons/fa';
export default class Intro extends PureComponent {
  componentDidMount() {
    const strings = [
      'I can create awesome applic',
      'I can create good apps',
      'I do stuffs ^600, for a great deal  ^1000 :^800)'
    ]
    const options = {
      strings,
      typeSpeed: 90,
      showCursor: true,
      autoInsertCss: false,
      backSpeed: 60
    }
    this.typed = new Typed(this.subIntro, options)
  }

  scrollToNext() {
    scrollTo('#about-section')
  }

  render() {
    return (
      <div className="intro-container">
        <Typo className="intro-text h1">Hi there !</Typo>
        <Typo className="intro-text">I'm Son, and I'm a Front-end developer</Typo>
        <span className="intro-text" ref={ref => this.subIntro = ref} />
        <div className='scrolldown-container' onClick={this.scrollToNext}>
          <Typo className="scrolldown-text">Nothing scary down here</Typo>
          <FaChevronDown color='white' className="chevron-down" />
        </div>
      </div>
    );
  }
}