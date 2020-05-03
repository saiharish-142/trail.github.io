import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 250,
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  title: {
    fontSize: 15,
    color: 'rgb(175,238,238)'
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h6" component="h5">
          Medam Sai Harish
        </Typography>
        <Typography className={classes.title} color="textSecondary">
          ambulence
        </Typography>
        <Typography variant="body2" component="p">
          <div>Hospital Name</div>
          <div>Location Picked</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
