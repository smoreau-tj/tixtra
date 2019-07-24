import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const TicketCard = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.avatar}
          title="avatar_url"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.artist}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Ticket Status
        </Button>
        <Button size="small" color="primary">
          Request Ticket
        </Button>
      </CardActions>
    </Card>
  );
}

export default TicketCard;
