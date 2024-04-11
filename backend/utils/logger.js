const winston = require('winston');
const { createLogger, format, transports } = winston;
const { combine, timestamp, printf } = format;
const DailyRotateFile = require('winston-daily-rotate-file');

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

const logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [
    new DailyRotateFile({
      filename: 'logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH-mm',
      maxSize: '20m',
      maxFiles: '5m',
      level: 'error',
    }),
  ],
});

module.exports = logger;