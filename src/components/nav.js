import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/MoveToInbox';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@material-ui/core';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    color: 'inherit',
  },
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.listitem}>
          <Link style={navStyle} to="/" >
            <ListItem button>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
          </Link>
          <Link style={navStyle} to="/activedrivers">
            <ListItem button>
              <ListItemText>Active Drivers</ListItemText>
            </ListItem>
          </Link>
          <Link style={navStyle}>
            <ListItem button>
              <ListItemText>Completed Rides</ListItemText>
            </ListItem>
          </Link>
          <Link style={navStyle}>
            <ListItem button>
              <ListItemText>Failed Rides</ListItemText>
            </ListItem>
          </Link>
      </List>
      <Divider />
    </div>
  );

  const navStyle = {
    color: 'black',
    textDecoration: 'none'
  }

  return (
    <div>

      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button variant="contained" color="primary" disableElevation onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
