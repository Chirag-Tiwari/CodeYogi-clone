import React, { useEffect } from "react";
import { DateTime } from "luxon";
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

  //   const cleanedUpProfile = personalProfile.map((u) => {
  //     const user = {
  //       id: u.id,
  //       first_name: u.first_name,
  //       last_name: u.last_name,
  //       email: u.email,
  //       institute: u.institute.name,
  //       year_of_pass_out: u.year_of_pass_out,
  //       phone_no: u.phone_no,
  //       date_of_birth: DateTime.fromISO(u.date_of_birth).toLocaleString(
  //         DateTime.DATE_MED
  //       ),
  //       institute_roll_no: u.institute_roll_no,
  //       branch: u.branch,
  //     };
  //     return user;
  //   });

  return (
    <div>{personalProfile && <ProfileLayout user={personalProfile} />}</div>
  );
}

export default ProfileRow;
