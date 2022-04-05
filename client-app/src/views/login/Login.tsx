import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { RootState } from "../../app/store";
import { fetchUserLoginAsync, updateUserName } from "./login-slice";

export function Login() {
  const loading = useAppSelector((state: RootState) => state.login.loading);
  const error = useAppSelector((state: RootState) => state.login.error);
  const isAuthenticated = useAppSelector((state: RootState) => !!state.login.token)
  
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form>
        <div>
          username:
          <input
            id="username"
            type="text"
            onChange={e => {
              setUsername(e.target.value);
            }}
            placeholder="type your username here"
          />
        </div>
        <div>
          password:
          <input
            id="password"
            type="password"
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder="type your password here"
          />
        </div>
      </form>
      <button
        onClick={() => {
          dispatch(fetchUserLoginAsync({ username, password }));
          dispatch(updateUserName(username));
        }}
      >
        login
      </button>

      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {isAuthenticated && <Navigate to="/dogs" replace />}
    </div>
  );
}
