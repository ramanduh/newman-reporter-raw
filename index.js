PostmanRawReporter = function (emitter, reporterOptions, collectionRunOptions) {
  // emitter is is an event emitter that triggers the following events: https://github.com/postmanlabs/newman#newmanrunevents
  // reporterOptions is an object of the reporter specific options. See usage examples below for more details.
  // collectionRunOptions is an object of all the collection run options:
  // https://github.com/postmanlabs/newman#newmanrunoptions-object--callback-function--run-eventemitter
  emitter.on('request', function (err, o) {
    process.stdout.write(o.response.text())
  })
};

module.exports = PostmanRawReporter;
