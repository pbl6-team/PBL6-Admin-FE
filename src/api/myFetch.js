import config from "../appconfig.js"
import checkRefreshTokenTimeOut from "../utils/checkRefreshTokenTimeOut.js"
export default async function ({ path, params = "", method = "GET", headers = {}, auth = true, body = "" }) {
   const token = localStorage.getItem('token')
   headers["x-apikey"] = config.apiKey
   if (auth) headers['Authorization'] = `Bearer ${token}`
   if (!headers.hasOwnProperty('accept')) headers['accept'] = 'application/json'
   const request = {
      method: method,
      headers: headers,
   }
   if (body !== "") request["body"] = body
   const res = await fetch(`${config.apiURL}/${path}?${params}`, request)
   if (res.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");

      if (!checkRefreshTokenTimeOut()) {
         console.log("da chay refresh token");
         const refreshToken = localStorage.getItem("refreshToken");
         const res = await fetch(`${config.apiURL}/auth/refreshToken`, {
            method: "POST",
            headers: {
               "x-apikey": config.apiKey,
               "Content-Type": "application/json",
            },
            body: JSON.stringify({ refreshToken: refreshToken }),
         });
         if (res.ok) {
            const data = await res.json();
            console.log(data);
            localStorage.setItem("token", data.token);
            localStorage.setItem("refreshToken", data.refreshToken);
            localStorage.setItem("tokenTimeOut", data.tokenTimeOut);
            localStorage.setItem("refreshTokenTimeOut", data.refreshTokenTimeOut);
         }
         res = await fetch(`${config.apiURL}/${path}?${params}`, request);
         return res
      }
      // OneSignal.logout()
      location.href = "/Login";
   }
   return res
}

