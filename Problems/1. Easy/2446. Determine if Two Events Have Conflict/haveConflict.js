var haveConflict = function (event1, event2) {
    let driffTime1 = [];
    let driffTime2 = [];
    for (let i = 0; i < 2; i++) {
        const time1 = event1[i].split(":");
        driffTime1.push(Number(time1[0]) * 60 + Number(time1[1]));
        const time2 = event2[i].split(":");
        driffTime2.push(Number(time2[0]) * 60 + Number(time2[1]));
    }
    if (
        (driffTime1[0] <= driffTime2[0] && driffTime2[0] <= driffTime1[1]) ||
        (driffTime1[0] <= driffTime2[1] && driffTime2[1] <= driffTime1[1]) ||
        (driffTime1[0] >= driffTime2[0] && driffTime1[1] <= driffTime2[1])
    ) {
        return true;
    } else return false;
};
