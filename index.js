exports.LOGGING_LEVELS = LOGGING_LEVELS = {
  NOTSET: 0,
  DEBUG: 10,
  INFO: 20,
  WARNING: 30,
  ERROR: 40,
  CRITICAL: 50
};

var loggingLevel = LOGGING_LEVELS.NOTSET;

function log (message) {
  console.log(message);
}

//region [ Logger ]
const logger = {};

logger.setLevel = function setLoggingLevel(level) {
  var intLevel = parseInt(level);
  if (intLevel)
    loggingLevel = level;
  else throw new Error("Invalid logging level");
};

logger.debug = function logDebug(message) {
  if (loggingLevel <= LOGGING_LEVELS.DEBUG) log(message)
};

logger.info = function logInfo(message) {
  if (loggingLevel <= LOGGING_LEVELS.INFO) log(message)
};

logger.warning = function logWarning(message) {
  if (loggingLevel <= LOGGING_LEVELS.WARNING) log(message)
};

logger.error = function logError(message) {
  if (loggingLevel <= LOGGING_LEVELS.ERROR) log(message)
};

logger.critical = function logCritical(message) {
  if (loggingLevel <= LOGGING_LEVELS.CRITICAL) log(message)
};

exports.logger = logger;
//endregion


