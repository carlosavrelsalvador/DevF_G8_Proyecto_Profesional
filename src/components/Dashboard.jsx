import React, { useEffect, useState } from "react";
import {
  // Button,
  Typography
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { Switch, Route, useRouteMatch } from "react-router";
import Profile from "./core/Profile";
import PrivateRoute from "./helpers/PrivateRoute";
import Main from "./Main";
import NavBar from "./NavBar";
import itemsService from "../services/Items.services";
// import Items from "./Items";
import BasicTable from "./ItemsTable"

const Dashboard = () => {
  const { path } = useRouteMatch();
  const [itemsData, setItemsData] = useState(false);

  useEffect(() => {
    // Recuperar informacion de persona loggeada desde endpoint
    getItemsData();
  }, []);

  const getItemsData = async () => {
    const hardCodedJWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTc0ODhjMTdjNmVkMDAxNzE2YTM1MCIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTYzMzU4NjI4OSwiaWF0IjoxNjMzNDk5ODg5fQ.DVfh4rGgJ6e_2CUI0na9kVU6QTjYfMgPylsIBWaySZU";

    try {
      const result = await itemsService(hardCodedJWT);
      console.log("getInfoUser result", result);
      setItemsData({ data: result })
      console.log("itemsData.data --> ", itemsData.data)
      // itemsData.data.forEach(element => {
      //   console.log(element)
      // });
    } catch (error) {
      console.log("error al recuperar info", error);
    }
  };

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
              <BasicTable itemsData={itemsData}></BasicTable>
              {/* <Items itemsData={itemsData}></Items> */}
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
