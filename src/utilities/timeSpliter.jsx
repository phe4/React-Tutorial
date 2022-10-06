const timeSpliter= (courses, selectedCourses) => {
    var timeList = Object.entries(courses)
                    .map(([id, course]) => course)
                    .filter(([id, course]) => selectedCourses.includes(id))
                    .map(([id, course]) => course.meets);

    var timeListSplited = timeList.map((time) => {
        var timeArray = [];
        var timeSplited = time.split(" ");
        timeArray.push(timeSplited[0]);
        var timeNumber = timeSplited[1].replace(/:/g, "").split("-");
        timeArray.push(timeNumber[0]);
        timeArray.push(timeNumber[1]);
        return timeArray;
    });

    return timeListSplited;
}

export default timeSpliter;