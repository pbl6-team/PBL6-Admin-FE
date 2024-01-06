export default async function getUserOnline() {
    const response = await fetch('https://api.firar.live/api/User/total-online-users');
    console.log("response:", response);
    const data = await response.json();
    console.log("data:", data);
    return data;
}
