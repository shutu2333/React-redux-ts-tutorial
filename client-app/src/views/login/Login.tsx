import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { fetchUserLoginAsync } from "./login-slice";

export function Login() {
  const loading = useAppSelector(state => state.login.loading);
  const error = useAppSelector(state => state.login.error);
  const isAuthenticated = useAppSelector(state => !!state.login.token)
  
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
        }}
      >
        login
      </button>

      {error && <div>Error: {error}</div>}
      {loading && <div>Loading...</div>}
      {isAuthenticated && <div>Login success</div>}
    </div>
  );
}
