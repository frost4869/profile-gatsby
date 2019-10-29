import React from 'react';
import Intro from '../components/intro';
import Layout from '../components/layout';
import StickyAppbar from '../components/sticky-appbar';
import About from '../components/about';
import Project from '../components/projects';
import Contact from '../components/contact';

const IndexPage = ({ classes }) => (
  <React.Fragment>
    <StickyAppbar />
    <Intro />
    <Layout>
      <About />
      <Project />
      <Contact />
    </Layout>
  </React.Fragment>
);

export default IndexPage;
