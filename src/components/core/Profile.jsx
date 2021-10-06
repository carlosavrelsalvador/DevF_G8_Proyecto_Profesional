import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import getInfoUser from "../../services/User.services";
// import @mui
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// fin import @mui



const Profile = () => {
  const [profileData, setProfileData] = useState(false);

  useEffect(() => {
    // Recuperar informacion de persona loggeada desde endpoint
    getInfoProfile();
  }, []);

  const getInfoProfile = async () => {
    const hardCodedJWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNTc0ODhjMTdjNmVkMDAxNzE2YTM1MCIsInJvbGUiOiJBRE1JTiIsImV4cCI6MTYzMzU4NjI4OSwiaWF0IjoxNjMzNDk5ODg5fQ.DVfh4rGgJ6e_2CUI0na9kVU6QTjYfMgPylsIBWaySZU";

    try {
      const result = await getInfoUser(hardCodedJWT);
      console.log("getInfoUser result", result);
      setProfileData({ data: result })
      console.log(profileData.data.role)
    } catch (error) {
      console.log("error al recuperar info", error);
    }
  };

  return (
    <div>
      <Typography variant="h6" style={{ textAlign: "center", color: "orange" }}>
        <div style={{ display: "inline-block" }}>
          <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  U
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Ficha de Usuario"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                USUARIO {profileData.data?.user?.last_name} {profileData.data?.user?.first_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ROL DE USUARIO {profileData.data?.user?.role}
              </Typography>

              <Typography variant="body2" color="text.secondary">
                EMAIL {profileData.data?.user?.email}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                GENERO {profileData.data?.user?.gender}
              </Typography>
            </CardContent>

          </Card>
        </div>
      </Typography>
    </div>
  );
};

export default Profile;
