import { createLogger, transports, format } from 'winston';
import { momentTimeZone } from '../helpers/timeZoneHandler';

export const myLogger = createLogger({
    format: format.combine(
        format.printf((myInfo) => `${momentTimeZone().format()} - ${myInfo.level}: ${myInfo.message}`),
    ),
    transports: [
        new transports.File(
            { filename: 'gold_server' + momentTimeZone().format().substring(0, 10) + '.log' }
        ),
    ],
});