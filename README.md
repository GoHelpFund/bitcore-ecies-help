# ECIES for Bitcore-Help

[![NPM Package](https://img.shields.io/npm/v/bitcore-ecies-help.svg?style=flat-square)](https://www.npmjs.org/package/bitcore-ecies-help)
[![Build Status](https://img.shields.io/travis/gohelpfund/bitcore-ecies-help.svg?branch=master&style=flat-square)](https://travis-ci.org/gohelpfund/bitcore-ecies-help)
[![Coverage Status](https://img.shields.io/coveralls/gohelpfund/bitcore-ecies-help.svg?style=flat-square)](https://coveralls.io/r/gohelpfund/bitcore-ecies-help)

A module for [bitcore-help][bitcore-help] that implements the [Elliptic Curve Integrated Encryption Scheme (ECIES)][ECIES]. Uses ECIES symmetric key negotiation from public keys to encrypt arbitrarily long data streams.

See [the main bitcore-help repo](https://github.com/gohelpfund/bitcore-help) or the [bitcore guide on ECIES](http://bitcore.io/guide/module/ecies/index.html) for more information.

Credit to [@ryanxcharles][ryan] for the original implementation.

## Getting started

ECIES will allow to securely encrypt and decrypt messages using ECDSA key pairs (bitcoin cryptography).

```javascript
var alice = ECIES()
  .privateKey(aliceKey)
  .publicKey(bobKey.publicKey);

var message = 'some secret message';
var encrypted = alice.encrypt(message);

// encrypted will contain an encrypted buffer only Bob can decrypt

var bob = ECIES()
  .privateKey(bobKey)
  .publicKey(aliceKey.publicKey);
var decrypted = bob
  .decrypt(encrypted)
  .toString();
// decrypted will be 'some secret message'
```

## Contributing

See [CONTRIBUTING.md](https://github.com/gohelpfund/bitcore-help/blob/master/CONTRIBUTING.md) on the main bitcore-help repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/bitpay/bitcore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

[bitcore-help]: http://github.com/gohelpfund/bitcore-help
[ECIES]: http://en.wikipedia.org/wiki/Integrated_Encryption_Scheme
[ryan]: http://github.com/ryanxcharles
