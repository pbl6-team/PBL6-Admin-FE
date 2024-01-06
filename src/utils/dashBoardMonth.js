export default function dashBoardMonth(data) {
    // Tạo một mảng chứa 12 tháng gần nhất
    let recentMonths = [];
    for (let i = 11; i >= 0; i--) {
        let date = new Date();
        date.setMonth(date.getMonth() - i);
        let month = date.getMonth() + 1; // Lấy tháng từ ngày (1-12)
        let year = date.getFullYear(); // Lấy năm từ ngày
        recentMonths.push(`${month}/${year}`);
    }

    // Khởi tạo một đối tượng để đếm số lượng cho mỗi tháng/năm
    let monthCounts = {};
    recentMonths.forEach((month) => (monthCounts[month] = 0));

    data.forEach((dateString) => {
        let date = new Date(Date.parse(dateString));
        let month = date.getUTCMonth() + 1; // Lấy tháng từ ngày (1-12)
        let year = date.getUTCFullYear(); // Lấy năm từ ngày
        let key = `${month}/${year}`; // Tạo khóa là tháng/năm

        if (monthCounts[key] !== undefined) {
            monthCounts[key]++; // Tăng số lượng cho tháng/năm tương ứng
        }
    });

    let result = recentMonths.map((month) => {
        return {
            name: month,
            value: monthCounts[month],
        };
    });

    console.log("new data: ", result);
    return result;
}