import {
  AppBar,
  Slide,
  withStyles,
  useScrollTrigger,
  Hidden,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import React, { useState } from 'react';
import Typo from '../typo';
import onScroll from 'gatsby-plugin-smoothscroll';
import styles from './styles';
import { FaBars } from 'react-icons/fa';

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const StickyAppBar = ({ classes }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = status => {
    setMenuOpen(status);
  };

  return (
    <HideOnScroll>
      <AppBar position="fixed" className={classes.headerBar}>
        <div className={classes.profileContainer}>
          <img src={require('../../images/avatar.jpg')} className={classes.avatar} />
          <Typo className={classes.username}>Son Nguyen</Typo>
        </div>
        <Hidden smDown>
          <div className={classes.menuItemContainer}>
            <Typo className={classes.menuItem} onClick={() => onScroll('#about-section')}>
              About
            </Typo>
            <Typo
              className={classes.menuItem}
              onClick={() => onScroll('#project-section')}
            >
              Projects
            </Typo>
            <Typo
              className={classes.menuItem}
              onClick={() => onScroll('#contact-section')}
            >
              Contact
            </Typo>
          </div>
        </Hidden>
        <Hidden mdUp>
          <div className={classes.clickable} onClick={() => toggleMenu(true)}>
            <FaBars size={27} />
          </div>
        </Hidden>
        <Drawer anchor="top" open={menuOpen} onClose={() => toggleMenu(false)}>
          <List>
            {['About', 'Projects', 'Contact'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </HideOnScroll>
  );
};

export default withStyles(styles)(StickyAppBar);
