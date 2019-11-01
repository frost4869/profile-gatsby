import scrollTo from 'gatsby-plugin-smoothscroll';
import React, { PureComponent } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import TypeIt from 'typeit';
import Typo from '../typo';
import './styles.scss';
export default class Intro extends PureComponent {
  componentDidMount() {
    new TypeIt(this.subIntro, {
      speed: 120,
      waitUntilVisible: true,
    })
      .type('I can create awesome applications...')
      .pause(1500)
      .delete(23)
      .type('good apps')
      .pause(1500)
      .delete(20)
      .type('make stuffs')
      .pause(1000)
      .type(', with a great price ')
      .pause(1500)
      .type(':)')
      .go();
  }

  scrollToNext() {
    scrollTo('#about-section');
  }

  render() {
    return (
      <div className="intro-container">
        <Typo className="intro-text h1">Hi there !</Typo>
        <Typo className="intro-text">I'm Son, and I'm a Front-end developer</Typo>
        <span className="intro-text" ref={ref => (this.subIntro = ref)} />
        <div className="scrolldown-container" onClick={this.scrollToNext}>
          <Typo className="scrolldown-text" customStyles={{ color: '#fff' }}>
            Nothing scary down here
          </Typo>
          <FaChevronDown color="white" className="chevron-down" />
        </div>
      </div>
    );
  }
}
