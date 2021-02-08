import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  CardMedia,
  Grid,
  Card,
  Button,
  CardActions,
  CardContent,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: theme.palette.secondary.main,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "100%",
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    color: "#90caf9",
  },
}));

const Album = ({ userData }) => {
  const classes = useStyles();
  const {
    gender,
    name: { first, last },
    picture: { large },
    dob: { age },
  } = userData;
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={large}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" color="primary">
            {`${first} ${last}`}
          </Typography>
          <Typography color="primary">{`Gender: ${gender} | Age: ${age}`}</Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.button} size="small">
            View
          </Button>
          <Button className={classes.button} size="small">
            Edit
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

Album.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    gender: PropTypes.string,
    picture: PropTypes.shape({
      medium: PropTypes.string,
    }),
    dob: PropTypes.shape({
      age: PropTypes.number,
    }),
  }),
};

Album.defaultProps = {
  userData: {
    name: { first: "", last: "" },
    gender: "",
    picture: { large: "" },
    dob: { age: 0 },
  },
};
export default Album;
