import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated} = useAuth0();

  return (
    <div>
      <h1>Your Profile</h1>
      {isAuthenticated ? (
        <p>Welcome, {user.name}!</p>
      ) : (
        <p>Login to view your profile</p>
      )}
    </div>
  );
}

export default UserProfile;
