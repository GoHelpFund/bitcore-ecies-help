'use strict';

var spec = {
  name: 'ECIES',
  message: 'Internal Error on bitcore-ecies Module {0}',
  errors: [{
    name: 'InvalidPadding',
    message: 'Invalid padding: {0}'
  }]
};


module.exports = require('@gohelpfund/helpcore-lib').errors.extend(spec);

