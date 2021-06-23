import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const AnimePage = (props) => {
  const classes = useStyles();
  this.state;
  return (
    <div>
      <Paper elevation={3}>
        <Card className={classes.root}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography component="h5" variant="h5">
                {props.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                {props.description}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {props.Rating}
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                {props.genres}
              </Typography>
            </CardContent>
          </div>
          <CardMedia className={classes.cover} image={props.poster} />
        </Card>
      </Paper>
    </div>
  );
};
