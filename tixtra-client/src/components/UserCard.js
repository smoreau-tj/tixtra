import React from 'react';
import { Link } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const UserCard = (props) => {
  return (
    <div>
      <Grid item xs={8}>
      <Card className="user-card" style={{ height: 330, width: 250, margin: "2vw", display: "flex", flexDirection: "column", backgroundColor: "#37474F", textAlign:"center" }}>
        <CardMedia
          style={{paddingTop: "60%"}}
          className="user-avatar"
          image={props.avatar} alt={props.username}
          title={props.username}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{color: "white", justifyContent: "center"}}>
            {props.username}
          </Typography>
          <Typography style={{color: "white"}}>
            {<span>"{props.bio}"</span>}
          </Typography>
        </CardContent>
        <CardActions style={{justifyContent:"center", paddingBottom:"15%"}}>
          {console.log("UserCard:", props)}
          <Link to={`/users/${props.id}`}>
          <Button size="small" style={{fontweight: "bold", color: "white"}}>
            View Profile
          </Button>
          </Link>
        </CardActions>
      </Card>
      </Grid>
    </div>
  )
};

export default UserCard;
