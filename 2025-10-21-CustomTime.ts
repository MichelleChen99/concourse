class CustomTime {
    hour: number = 0
    minute: number = 0
    second: number = 0
}

const t = new CustomTime(); // 建立新的實例
t.hour = 20;
t.minute = 12;
t.second = 59;

function logTime(t: CustomTime) {
    console.log(`${t.hour}:${t.minute}:${t.second}`)
}

function addHours(t: CustomTime, numOfHours: number): CustomTime {
    const result = new CustomTime(); // 建立新的實例 (不直接修改t)
    result.hour = t.hour + numOfHours;
    result.minute = t.minute;
    result.second = t.second;

    // 整日的倍數
    if (Math.abs(numOfHours % 24) === 0) {
        result.hour = t.hour;
    }
    // 正向跨日（未來日）
    else if (result.hour > 24) {
        result.hour = result.hour % 24;
    }
    // 負向跨日（過去日）
    else if (numOfHours < 0 && Math.abs(numOfHours) > t.hour) {
        result.hour = (t.hour + (24 + numOfHours % 24)) % 24;
        // 避免numOfHours太大，造成result.hour仍>=24，再取一次餘數
    }
    // 該日內（含正、負數）
    else {
        result.hour = result.hour % 24;
        // 24 => 0
    }
    return result;
}
// logTime(addHours(t, 5)); // 1
// logTime(addHours(t, 4)); // 0
// logTime(addHours(t, 12)); // 8
// logTime(addHours(t, 9));  // 5
// logTime(addHours(t, 2)); // 22
// logTime(addHours(t, 24)); // 20
// logTime(addHours(t, 47)); // 19
// logTime(addHours(t, -4)); // 16
// logTime(addHours(t, 500)); // 16
// logTime(addHours(t, -24)); // 20
// logTime(addHours(t, -23)); // 21
// logTime(addHours(t, -46)); // 22
// logTime(addHours(t, -499)); // 1
// 錯誤寫法
// console.log(addHours(t, 5)); // CustomTime { hour: 1, minute: 12, second: 59 }

function addMinutes(t: CustomTime, numOfMinutes: number): CustomTime {
    const result = new CustomTime();
    result.hour = t.hour;
    result.minute = t.minute + numOfMinutes;
    result.second = t.second;

    // 正向跨時
    if (result.minute >= 60) {
        result.hour = addHours(result, Math.floor(result.minute / 60)).hour;
        // 注意依賴性的可能錯誤，避免用t當參數：addHours(t, Math.floor(result.minute / 60)).hour;
        result.minute = result.minute % 60;
    }
    // 負向跨時
    else if (result.minute < 0) {
        result.hour = addHours(result, Math.floor(result.minute / 60)).hour;
        result.minute = (60 + result.minute % 60) % 60;
        // 避免numOfMinutes太大，造成result.minute仍>=60，再取一次餘數
    }
    // 該小時內
    else {
        result.minute = result.minute % 60;
    }
    return result;
}
// logTime(addMinutes(t, 19)); // 20:31:59
// logTime(addMinutes(t, 48)); // 21:00:59
// logTime(addMinutes(t, 107)); // 21:59:59
// logTime(addMinutes(t, 360)); // 2:12:59
// logTime(addMinutes(t, -18)); // 19:54:59
// logTime(addMinutes(t, -12)); // 20:00:59
// logTime(addMinutes(t, -120)); // 18:12:59
// logTime(addMinutes(t, -355)); // 14:17:59
// logTime(addMinutes(t, -552)); // 11:00:59
// logTime(addMinutes(t, -360)); // 14:12:59

function addSeconds(t: CustomTime, numOfSeconds: number): CustomTime {
    const result = new CustomTime();
    result.hour = t.hour;
    result.minute = t.minute;
    result.second = t.second + numOfSeconds;
    
    // 正向跨分
    if (result.second >= 60) {
        result.minute = addMinutes(result, Math.floor(result.second / 60)).minute;
        result.second = result.second % 60;
    }
    // 負向跨分
    else if (result.second < 0) {
        result.minute = addMinutes(result, Math.floor(result.second / 60)).minute;
        result.second = (60 + result.second % 60) % 60;
    }
    // 該分鐘內
    else {
        result.second = result.second % 60;
    }
    return result;
}
// logTime(addSeconds(t, 1)); // 20:13:00
// logTime(addSeconds(t, 31)); // 20:13:30
// logTime(addSeconds(t, 1200)); // 20:32:59
// logTime(addSeconds(t, -31)); // 20:12:28
// logTime(addSeconds(t, -360)); // 20:06:59
// logTime(addSeconds(t, -552)); // 20:03:47