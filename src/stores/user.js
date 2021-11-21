import { atom } from "nanostores";

export const isLoggedIn = atom(false);

export async function checkLogin(objCredential) {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const result = await response.json();
  let loginFlag = false;

  // Logic for login here
  result.forEach((user) => {
    if (
      user.username === objCredential.username &&
      user.name === objCredential.password
    ) {
      loginFlag = true;
    }
  });

  if (loginFlag) {
    isLoggedIn.set(true);
  }
}
