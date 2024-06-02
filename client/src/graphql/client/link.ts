import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import axios from "axios";
import JWTManager from '../../utils/jwt';
import { IPADDRESS, PORTSERVER } from "../../utils/variable";

const httpLink = createHttpLink({
  uri: `http://${IPADDRESS}:${PORTSERVER}/graphql`,
  credentials: "include",
});

const authLink = setContext(async (_, { headers }) => {
  // get the authentication token from local storage if it exists
  let access_token = JWTManager.getToken();
  if (!access_token) {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:5000/refresh_token",
        withCredentials: true,
      });
      access_token = result.data.access_token as string

      JWTManager.setToken(access_token)
      // isLoginVar(true)
    } catch (error) {
      // isLoginVar(false)
      console.log(error)
    }
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: access_token ? `Bearer ${access_token}` : "",
    },
  };
});

export default authLink.concat(httpLink);




// // const checkToken = async () => {
// //     let token = getCookie('token')
// //     let refresh_token = getCookie('refresh_token')
// //     if (jwt_decode(token).exp - 10 <= (Date.now() / 1000) && refresh_token !== '') {
// //         const result = await CALLAPI('post', 'sign/refresh_token', { refresh_token })
// //         token = result.data.token
// //         setCookie('token', token, 1)
// //     }
// //     accountVar(jwt_decode(token).username)
// //     roleUserVar(jwt_decode(token).role)
// //     return token
// // }