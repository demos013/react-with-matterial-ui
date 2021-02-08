import React, { useEffect, useState, useCallback, useContext } from "react";
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
  Select,
  MenuItem,
} from "@material-ui/core";
import { Context } from "../store";

const userSelectItem = [1, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  header: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  selectBox: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textAlign: "right",
  },
  select: {
    fontSize: "2rem",
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
  const [{ userSize }, dispatch] = useContext(Context);

  useEffect(() => {
    fetchAdminList(userSize);
  }, [userSize]);

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
        <div className={classes.header}>
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
        <Container maxWidth="md">
          <div className={`${classes.selectBox}`}>
            <Select
              className={classes.select}
              value={userSize}
              onChange={({ target: { value } }) => {
                dispatch({ type: "SET_USER_SIZE", payload: value });
              }}
            >
              {userSelectItem.map((value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </div>
        </Container>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {userData.map((user, index) => (
              <Album key={`${user?.name?.first} ${index}`} userData={user} />
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default UserContainer;
