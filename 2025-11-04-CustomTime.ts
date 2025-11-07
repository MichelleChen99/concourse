import { modulo } from "./2025-10-21-CustomTime.ts";

class CustomTime {
  hour: number = 0;
  minute: number = 0;
  second: number = 0;
}

const t = new CustomTime();
t.hour = 9;
t.minute = 10;
t.second = 50;

function logTime(t: CustomTime): void {
  console.log(`${t.hour}:${t.minute}:${t.second}`);
}

function copyCustomTime(t: CustomTime): CustomTime {
  const result = new CustomTime();
  result.hour = t.hour;
  result.minute = t.minute;
  result.second = t.second;

  return result;
}

function addHours(t: CustomTime, numOfHours: number): CustomTime {
  const result: CustomTime = copyCustomTime(t);
  addByHours(result, numOfHours);

  return result;
}

function addByHours(t: CustomTime, numOfHours: number): void {
  t.hour = modulo(t.hour + numOfHours, 24);
}
// logTime(addHours(t, 12));

function addMinutes(t: CustomTime, numOfMinutes: number): CustomTime {
  const result: CustomTime = copyCustomTime(t);
  addByMinutes(result, numOfMinutes);

  return result;
}

function addByMinutes(t: CustomTime, numOfMinutes: number): void {
  const totalMinutes: number = t.minute + numOfMinutes;

  if (totalMinutes >= 0 && totalMinutes < 60) {
    t.minute = totalMinutes;
  } else {
    t.hour = addHours(t, Math.floor(totalMinutes / 60)).hour;
    t.minute = modulo(totalMinutes, 60);
  }
}
// logTime(addMinutes(t, 40));

function addSeconds(t: CustomTime, numOfSeconds: number): CustomTime {
  const result: CustomTime = copyCustomTime(t);
  addBySeconds(result, numOfSeconds);

  return result;
}

function addBySeconds(t: CustomTime, numOfSeconds: number): void {
  const totalSeconds: number = t.second + numOfSeconds;

  t.minute = addMinutes(t, Math.floor(totalSeconds / 60)).minute;
  t.second = modulo(totalSeconds, 60);
}
// logTime(addSeconds(t, 444));
