import React from "react";
import { useCurrentQuery } from "../../app/services/auth";
import spinner from "../../images/spinner.svg";

export const Auth = ({ children }) => {
  const { isLoading } = useCurrentQuery();

  if (isLoading) {
    return (
      <span className="flex items-center justify-center h-screen">
        <img width="50px" height="50px" src={spinner} />
      </span>
    );
  }

  return children;
};
