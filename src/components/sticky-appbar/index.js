import { AppBar, Slide, withStyles, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Typo from '../typo';
import onScroll from 'gatsby-plugin-smoothscroll';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StickyAppBar = ({
  classes,
}) => (
    <HideOnScroll>
      <AppBar position='fixed' className={classes.headerBar}>
        <Typo className={classes.menuItem} onClick={() => onScroll('#about-section')}>About</Typo>
        <Typo className={classes.menuItem} onClick={() => onScroll('#project-section')}>Projects</Typo>
        <Typo className={classes.menuItem} onClick={() => onScroll('#contact-section')}>Contact</Typo>
      </AppBar>
    </HideOnScroll>
  );

const styles = {
  headerBar: {
    backgroundColor: '#000',
    paddingLeft: '5vw',
    paddingRight: '5vw',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  menuItem: {
    marginLeft: '3vw',
    fontSize: 16,
    fontWeight: '700',
    cursor: 'pointer'
  }
}


export default withStyles(styles)(StickyAppBar);
