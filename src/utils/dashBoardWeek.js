export default function dashBoardWeek(data) {
    // Tạo một mảng chứa 7 ngày gần nhất
    let recentDays = [];
    for (let i = 6; i >= 0; i--) {
        let date = new Date();
        date.setDate(date.getDate() - i);
        let day = date.getDate(); // Lấy ngày từ ngày (1-31)
        let month = date.getMonth() + 1; // Lấy tháng từ ngày (1-12)
        let year = date.getFullYear(); // Lấy năm từ ngày
        recentDays.push(`${day}/${month}/${year}`);
    }

    // Khởi tạo một đối tượng để đếm số lượng cho mỗi ngày
    let dayCounts = {};
    recentDays.forEach(day => dayCounts[day] = 0);

    data.forEach(dateString => {
        let date = new Date(Date.parse(dateString));
        let day = date.getUTCDate(); // Lấy ngày từ ngày (1-31)
        let month = date.getUTCMonth() + 1; // Lấy tháng từ ngày (1-12)
        let year = date.getUTCFullYear(); // Lấy năm từ ngày
        let key = `${day}/${month}/${year}`; // Tạo khóa là ngày/tháng/năm

        if (dayCounts[key] !== undefined) {
            dayCounts[key]++; // Tăng số lượng cho ngày tương ứng
        }
    });

    let result = recentDays.map(day => {
        return {
            name: day,
            value: dayCounts[day]
        };
    });

    console.log("new data weekkkkkkkkkkkkk: ", result);
    return result;
}