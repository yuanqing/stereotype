'use strict';

var stereotype = function(str) {

  if (Object.prototype.toString.call(str) !== '[object String]') {
    return str;
  }

  switch (str) {
  case 'undefined':
    return undefined;
  case 'null':
    return null;
  case 'NaN':
    return NaN;
  case 'Infinity':
    return Infinity;
  case 'true':
    return true;
  case 'false':
    return false;
  }

  var num = parseFloat(str);
  if (!isNaN(num) && isFinite(str)) {
    if (str.toLowerCase().indexOf('0x') === 0) {
      return parseInt(str, 16);
    }
    return num;
  }

  return str;

};

exports = module.exports = stereotype;
