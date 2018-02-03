// @flow

export interface EnumConstant<T : string> {
  name: T;
}

interface EnumDef<T : string> {
  $name: string;
  $names: Set<T>;
  $values: Set<EnumConstant<T>>;
}

export type EnumType<Key : string> = EnumDef<Key> & Class<Enum<Key>> & {[key: Key]: EnumConstant<Key>}

export default class Enum<T : string> implements EnumConstant<T> {
  static $name: string;
  name: T;

  constructor (name: T) {
    Object.defineProperty(this, 'name', {
      value: name
    })
  }

  toString () {
    return `${this.constructor.$name}.${this.name}`
  }

  inspect () {
    return `${this.constructor.$name}.${this.name}`
  }

  static create<T : string> (name: string, values: Array<T>): EnumType<T> {
    const enumClass: EnumDef<T> & Class<Enum<T>> = class extends Enum<T> {
      static $name: string;
      static $values: Set<EnumConstant<T>>;
      static $names: Set<T>;
      name: T;
    }

    /* eslint new-cap: off */
    const enumConstants = values.map(value => new enumClass(value))

    for (let constant of enumConstants) {
      Object.defineProperty(enumClass, constant.name, {
        value: constant,
        enumerable: true
      })
    }

    Object.defineProperty(enumClass, '$name', { value: name })
    Object.defineProperty(enumClass, '$values', { value: new Set(enumConstants) })
    Object.defineProperty(enumClass, '$names', { value: new Set(values) })

    return enumClass
  }
}
