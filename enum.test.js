import test from 'ava'
import util from 'util'
import Enum from './enum'

const createType = () =>
    Enum.create('OrderStatus', ['AwaitingPayment', 'Paid', 'AwaitingShipment', 'Shipped'])

test('constructor', t => {
  /*eslint no-unused-vars: off */
  const OrderStatus = createType()
  t.pass()
})

test('all defined constants are instances of the enum type', t => {
  const OrderStatus = createType()
  t.true(OrderStatus.AwaitingPayment instanceof OrderStatus)
  t.true(OrderStatus.Paid instanceof OrderStatus)
  t.true(OrderStatus.AwaitingShipment instanceof OrderStatus)
  t.true(OrderStatus.Shipped instanceof OrderStatus)
})

test('name property', t => {
  const OrderStatus = createType()
  t.is(OrderStatus.$name, 'OrderStatus')
})

test('names property', t => {
  const OrderStatus = createType()
  const expectedNames = new Set(['AwaitingPayment', 'Paid', 'AwaitingShipment', 'Shipped'])
  t.deepEqual(OrderStatus.$names, expectedNames)
})

test('values property', t => {
  const OrderStatus = createType()
  const expectedValues = new Set([
    OrderStatus.AwaitingPayment,
    OrderStatus.Paid,
    OrderStatus.AwaitingShipment,
    OrderStatus.Shipped
  ])
  t.deepEqual(OrderStatus.$values, expectedValues)
})

test('toString', t => {
  const OrderStatus = createType()
  t.is('' + OrderStatus.Paid, 'OrderStatus.Paid')
})

test('inspect', t => {
  const OrderStatus = createType()
  t.is(util.inspect(OrderStatus.Paid), 'OrderStatus.Paid')
})
