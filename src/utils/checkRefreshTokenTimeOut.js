export default function checkRefreshTokenTimeOut() {
    let refreshTokenTimeOut = localStorage.getItem("refreshTokenTimeOut");
    if (!refreshTokenTimeOut) return true;
    refreshTokenTimeOut = new Date(refreshTokenTimeOut).getTime();
    const currentTime = new Date().getTime();
    console.log("refreshTokenTimeOut", refreshTokenTimeOut, new Date(refreshTokenTimeOut).getTime());
    console.log(currentTime);
    if (refreshTokenTimeOut && currentTime > refreshTokenTimeOut) {
        return true;
    }
    return false;
}