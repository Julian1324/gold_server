import moment from "moment-timezone";
import { constants } from "../context/constants";

export const momentTimeZone = () => moment().tz(constants.TIME_ZONE);

export const localeDate = () => {
    return new Date(momentTimeZone().toDate().getTime() + (momentTimeZone().utcOffset() * constants.MILLISECONDS_OFFSET));
}
