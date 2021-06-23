import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory, withRouter } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
  },
  media: {
    height: 300,
  },
});
function Cards(props) {
  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push(`/anime/${props.pack.id}`);
  }
  return (
    <div onClick={handleClick}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={props.poster} />
          <CardContent>
            <Typography gutterBottom variant="h6" component="h6">
              {props.name}
            </Typography>
            <Typography>{props.genres}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default withRouter(Cards);
