
const checkTimeConflict = (course, timeListSplited) => {
    var courseTime = course.meets.split(" ");
    var courseTimeNumber = courseTime[1].replace(/:/g, "").split("-");
    var courseTimeNumberStart = courseTimeNumber[0];
    var courseTimeNumberEnd = courseTimeNumber[1];
    var courseTimeDay = courseTime[0];

    var isTimeConflict = false;
    timeListSplited.forEach((time) => {
        if (courseTimeDay.length >= time[0].length ? courseTimeDay.includes(time[0]) : time[0].includes(courseTimeDay)) {
            if (courseTimeNumberStart < time[1]) {
                isTimeConflict = courseTimeNumberEnd > time[1] || isTimeConflict;
            }else{
                isTimeConflict = courseTimeNumberStart < time[2] || isTimeConflict;
            }
        }
    });
    return isTimeConflict;
}

export default checkTimeConflict;