// @flow

import Enum from './enum'
import type { EnumType } from './enum'

type OrderStatusValue = 'AwaitingPayment' | 'Paid' | 'AwaitingShipment' | 'Shipped'

export const OrderStatus: EnumType<OrderStatusValue> =
  Enum.create('OrderStatus', ['AwaitingPayment', 'Paid', 'AwaitingShipment', 'Shipped'])

console.log(OrderStatus.$names)
console.log(OrderStatus.Paid)
console.log(OrderStatus.Paid.name)
