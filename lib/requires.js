var _ = require('underscore')

//*/
try {
  var components = require('./requirements.json')
} catch (e) {
  var requirements = require('./requirements.js')
}
/*/
var requirements = require('./requirements.js')
//*/

module.exports = function requires(components) {
  return _.intersection(requirements.files,
    _.union.apply(_, _.map(components, function (component) {
      return requirements.components[component]
    })))
}
