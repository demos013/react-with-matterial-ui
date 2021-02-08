import React, { useEffect, useState, useCallback, useContext } from "react";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";
import Album from "../components/Album";
import CopyRight from "../components/CopyRight";
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
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(8, 0, 6),
  },
  selectBox: {
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(1),
    textAlign: "right",
  },
  select: {
    color: theme.palette.primary.main,
    fontSize: "2rem",
    "&:before": {
      borderColor: theme.palette.primary.main,
    },
    "&:after": {
      borderColor: theme.palette.primary.main,
    },
  },
  icon: {
    fill: theme.palette.primary.main,
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
    backgroundColor: theme.palette.secondary.main,
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
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album
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
              color="primary"
              gutterBottom
            >
              Album
            </Typography>
          </Container>
        </div>
        <Container maxWidth="md">
          <div className={`${classes.selectBox}`}>
            <Select
              color="primary"
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
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
      <footer className={classes.footer}>
        <Typography color="primary" variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="primary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <CopyRight />
      </footer>
    </React.Fragment>
  );
};

export default UserContainer;
