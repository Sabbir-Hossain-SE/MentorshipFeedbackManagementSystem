import { DateRange } from "@mui/x-date-pickers-pro";
import { addMinutes, formatDistance, subMinutes } from "date-fns";
import { format, formatInTimeZone, getTimezoneOffset, utcToZonedTime } from "date-fns-tz";

export const convertTimezone = (
    datetime: string | Date,
    currentTimezone = "UTC",
    convertTimezone = "",
    formatPattern = "yyyy-MM-dd HH:mm:ss"
) => {
    try {
        if (convertTimezone === "") {
            // eslint-disable-next-line no-param-reassign
            convertTimezone = currentTimezone;
        }

        let currentTimeInGivenTimezone;
        // eslint-disable-next-line no-param-reassign
        if (currentTimezone === "UTC") {
            currentTimeInGivenTimezone = utcToZonedTime(new Date(datetime), convertTimezone);
            return format(currentTimeInGivenTimezone, formatPattern, { timeZone: convertTimezone });
        }

        if (typeof datetime === "string") {
            // eslint-disable-next-line no-param-reassign
            datetime = new Date(datetime);
        }
        const currentTimeOffset = datetime.getTimezoneOffset() * -1;
        const difference = getTimezoneOffset(currentTimezone) / (1000 * 60);

        if (difference > 0) {
            // eslint-disable-next-line no-param-reassign
            datetime = subMinutes(datetime, difference);
        } else if (difference < 0) {
            // eslint-disable-next-line no-param-reassign
            datetime = addMinutes(datetime, difference * -1);
        }
        if (currentTimeOffset > 0) {
            // eslint-disable-next-line no-param-reassign
            datetime = addMinutes(datetime, currentTimeOffset);
        } else {
            // eslint-disable-next-line no-param-reassign
            datetime = subMinutes(datetime, currentTimeOffset);
        }
        currentTimeInGivenTimezone = datetime.toLocaleString("en-US", {
            timeZone: convertTimezone
        });
        return format(new Date(currentTimeInGivenTimezone), formatPattern, {
            timeZone: convertTimezone
        });
    } catch (e) {
        return format(new Date(), formatPattern);
    }
};

export const formatTime = (
    time: string | Date,
    formatPattern = "yyyy-MM-dd HH:mm:ss",
    timezone = ""
) => {
    if (timezone === "") return format(new Date(time), formatPattern);
    return formatInTimeZone(new Date(time), timezone, formatPattern);
};

export const getBrowserTimeZone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
};

export const formatHumanReadableFormat = (time: string | Date) => {
    const formattedTime = formatTime(time, "yyyy-MM-dd HH:mm:ss", getBrowserTimeZone());

    return formatDistance(new Date(formattedTime), new Date(), { addSuffix: true });
};

export const formatDateRange = (dateRange: DateRange<any>) => {
    return [
        `${format(dateRange[0], "yyyy-MM-dd")} 00:00:00`,
        `${format(dateRange[1], "yyyy-MM-dd")} 23:59:59`
    ];
};
