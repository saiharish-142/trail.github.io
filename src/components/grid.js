import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedCard from './card';
import Maps from '../maps/maps';
import './grid.css';

const useStyles = makeStyles((theme) => ({
  root: {
      overflow: 'auto',
      width: 350,
      backgroundColor: 'rgb(176,224,230)',
      height: 660,
      paddingTop: 10,
      paddingBottom: 10,
  },
  gridList: {
    width: 800,
    height: 850,
  },
  sa: {
      paddingTop:3,
      paddingBottom: 3,
      paddingLeft: 10,
      paddingRight: 10,
  },
  right: {
      width: '100%',
  },
  map: {
      width: '100%',
  },
  bottom: {
      width: '100%',
      backgroundColor: '#3f51b5',
      color: 'white',
      height: '35%',
      justifyContent: 'spaceAround',
      alignItems: 'center', 
      textAlign: 'center',  
  },
  body: {
      display: 'flex',
      height: 660,
  }
}));


export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.body}>
        <div className={classes.root}>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
            <div className={classes.sa}>
                <OutlinedCard />
            </div>
        </div>
        <div className={classes.right}>
            <div className={classes.map}>
                <Maps />
            </div>
            <div className={classes.bottom}>
                <h2 className={classes.bottom}>Driver Details</h2>
            </div>
        </div>
    </div>
    
  );
}
