export const ACT_USER_REGISTER = 'ACT_USER_REGISTER';
export const ACT_USER_LOGIN = 'ACT_USER_LOGIN';
export const ACT_USER_FETCH_ME = 'ACT_USER_FETCH_ME';
export const ACT_USER_NOT_FETCH_ME='ACT_USER_NOT_FETCH_ME'
export function actUserRegister(data) {
  console.log(data);
  return {
    type: ACT_USER_REGISTER,
    payload: data,
  }
}

// export function actUserLogin(token) {
//   return {
//     type: ACT_USER_LOGIN,
//     payload: token,
//   }
// }

export function actUserFetchMe(currentUser, token) {
  return {
    type: ACT_USER_FETCH_ME,
    payload: {
      currentUser,
      token
    },
  }
}
export function actUserNotFetchMe(token) {
  return {
    type: ACT_USER_NOT_FETCH_ME,
    payload: token
  }
}

