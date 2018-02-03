# js-enum

An implementation of an Enum type in JavaScript (ES6) with [Flow](https://flow.org/) type-checking.

See [order.js](./order.js) for an usage example.

Some issues with the current implementation:

* Enum constant names have to be repeated for Flow type-checking to work: once for the type definition, then again for the enum type creation. Couldn’t find any Flow construct to deal with this.
* The enum type has to be given as a string in order for pretty-printing with the enum type name to work.
