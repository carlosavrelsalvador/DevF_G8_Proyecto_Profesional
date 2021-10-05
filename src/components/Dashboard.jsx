import React from "react";
import { 
  Button,
  Typography
 } from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { Switch, Route, useRouteMatch } from "react-router";
import Profile from "./core/Profile";
import PrivateRoute from "./helpers/PrivateRoute";
import Main from "./Main";
import NavBar from "./NavBar";
import itemsService from "../services/Items.services";

async function items() {
  // eslint-disable-next-line no-unused-vars
  // const [loginObject, setLoginObject] = useState({});

  // itemsService()
  //   .then(({ data }) => {
  //     console.log(data)
  //     data.forEach(element => {
  //       console.log(element)
  //     });
  //   })
    // .catch((error) => {
    //   console.log("error", error.data);
    // });
    try {
      const result = await itemsService()
      .then(({ data }) => {
        return data
      })
    console.log(result)

    } catch (error) {
      console.log("error al recuperar info", error);
    }


}

const Dashboard = () => {
  const { path } = useRouteMatch();

  return (
    <>
      <NavBar />

      <Switch>
        <PrivateRoute exact component={() => <Main />} path={`${path}`} />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              Nuevos usuarios
            </Typography>
          )}
          path={`${path}/nuevo-usuario`}
        />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              usuarios
            </Typography>
          )}
          path={`${path}/usuarios`}
        />

        <PrivateRoute
          exact
          component={() => (
            <Typography
              variant="h6"
              style={{ textAlign: "center", color: "orange" }}
            >
              Items
              <Button
              variant="contained"
              style={{ marginTop: 80 }}
              onClick={() => items()}
            >
              Listar los registros
            </Button>
            </Typography>
          )}
          path={`${path}/items`}
        />

        <PrivateRoute
          exact
          component={() => <Profile />}
          path={`${path}/mi-perfil`}
        />

        <Route>
          <Typography
            variant="h6"
            style={{ textAlign: "center", color: "red" }}
          >
            404 not found de dashboard
          </Typography>
        </Route>
      </Switch>
    </>
  );
};

export default Dashboard;
