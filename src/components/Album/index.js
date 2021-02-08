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

const useStyles = makeStyles(() => ({
  card: {
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
          <Typography gutterBottom variant="h5" component="h2">
            {`${first} ${last}`}
          </Typography>
          <Typography>{`Gender: ${gender} | Age: ${age}`}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
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
