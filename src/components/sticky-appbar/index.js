import { AppBar, Slide, withStyles, useScrollTrigger } from '@material-ui/core';
import React from 'react';
import Typo from '../typo';
import onScroll from 'gatsby-plugin-smoothscroll';
import styles from './styles';

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
        <div className={classes.profileContainer}>
          <img src={require('../../images/avatar.jpg')} className={classes.avatar} />
          <Typo className={classes.username}>Son Nguyen</Typo>
        </div>
        <div className={classes.menuItemContainer}>
          <Typo className={classes.menuItem} onClick={() => onScroll('#about-section')}>About</Typo>
          <Typo className={classes.menuItem} onClick={() => onScroll('#project-section')}>Projects</Typo>
          <Typo className={classes.menuItem} onClick={() => onScroll('#contact-section')}>Contact</Typo>
        </div>
      </AppBar>
    </HideOnScroll>
  );

export default withStyles(styles)(StickyAppBar);
