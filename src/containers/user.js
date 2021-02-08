import React, { useEffect, useState, useCallback } from "react";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import Album from "../components/Album";
import { getUserList } from "../api/user";
import {
  AppBar,
  Container,
  Typography,
  Toolbar,
  Grid,
  CssBaseline,
} from "@material-ui/core";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const UserContainer = () => {
  const classes = useStyles();

  const [userData, setUserData] = useState([]);
  const [size, setSize] = useState(10);

  useEffect(() => {
    fetchAdminList(size);
  }, [size]);

  const fetchAdminList = useCallback(async (size = 10) => {
    const response = await getUserList({ results: size });
    setUserData(response?.data?.results);
  }, []);

  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Album layout
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {userData.map((user) => (
              <Album key={`${user?.name?.first}`} userData={user} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default UserContainer;
