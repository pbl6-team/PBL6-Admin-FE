export default function checkTokenTimeOut() {
    let tokenTimeOut = localStorage.getItem("tokenTimeOut");
    if (!tokenTimeOut) return true;
    tokenTimeOut = new Date(tokenTimeOut).getTime();
    const currentTime = new Date().getTime();
    console.log("tokenTimeOut", tokenTimeOut, new Date(tokenTimeOut).getTime());
    console.log(currentTime);
    if (tokenTimeOut && currentTime > tokenTimeOut) {
        return true;
    }
    return false;
}