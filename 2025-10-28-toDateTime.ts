// 1970/1/1 0:0:0 + epochSeconds = newDate
import { CustomDateTime } from "./2025-10-27-CustomDateTime.ts";
import { addSecondsToDateTime } from "./2025-10-27-CustomDateTime.ts";
import { getCustomDate } from "./2025-10-27-CustomDateTime.ts";
import { getCustomTime } from "./2025-10-27-CustomDateTime.ts";
import { logDateTime } from "./2025-10-27-CustomDateTime.ts";

function toDateTime(epochSeconds: number): CustomDateTime {
  const startDate = getCustomDate(1970, 1, 1);
  const startTime = getCustomTime(0, 0, 0);
  const dt = new CustomDateTime(startDate, startTime);

  return addSecondsToDateTime(dt, epochSeconds);
}

logDateTime(toDateTime(1761541341)); // Date and time (GMT): 2025年10月27日Monday 05:02:21
logDateTime(toDateTime(1445354421)); // 2015年10月20日Tuesday 15:20:21
