// A function to mock an async login request for data
export const fetchUserLogin = async (username: string, password: string) => {
  if (username && password) {
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const resJson = await response.json();
    if (resJson.token) {
      return resJson.token;
    } else {
      return Promise.reject(resJson);
    }
  } else {
    return Promise.reject("Please enter valiad username and password");
  }
};