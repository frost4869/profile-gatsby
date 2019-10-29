import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import React, { Component } from 'react';
import Footer from '../footer';
import './styles.scss';
import Intro from '../intro';

export default class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl">{this.props.children}</Container>
        <Footer />
      </React.Fragment>
    );
  }
}
