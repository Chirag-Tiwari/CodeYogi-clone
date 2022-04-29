import React, { useEffect } from "react";
import axios from "axios";
import ProfileLayout from "./ProfileLayout";
import { getProfile, getStorage } from "./Api";

function ProfileRow() {
  const cachedData = getStorage("profile") || [];

  const [personalProfile, updatePersonalProfile] = React.useState(cachedData);

  useEffect(() => {
    const promise = getProfile();
    promise.then((detail) => {
      updatePersonalProfile(detail);
    });
  }, []);

  return (
    <div>{personalProfile && <ProfileLayout user={personalProfile} />}</div>
  );
}

export default ProfileRow;
