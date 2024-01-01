export default function convertDateTime(time) {
    const dateTime = new Date(time);
    const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
    const formattedDate = dateTime.toLocaleDateString('vi-VN', options);
    return formattedDate.replace(',', '');
}
