import React from "react";
import {useFetchUserData} from "./userService";

export const UserQuery = () => {
  const { isLoading, isError, data ,refetch} = useFetchUserData();
  console.log("isLoading", isLoading);
  console.log("isError", isError);
  console.log("data", data);
  return (
    <div>
      <h1>Query</h1>
      {isLoading && <div>Loading...</div>}
      <button onClick={refetch}>Refetch</button>
    </div>
  );
};
