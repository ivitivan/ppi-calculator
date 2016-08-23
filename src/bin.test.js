import test from 'ava'
import {spawn} from 'child_process'
import {resolve} from 'path'
import sinon from 'sinon';

const helpMessage = `Usage: ppi-calculator -r <resolution> -s <screen size>

  Calculates PPI for the given screen resolution and digonal size

Options:

  -h, --help                    output usage information
  -r, --resolution              screen resolution
  -s, --screen-size             screen digonal size
`

let sandbox
test.beforeEach(t => {
  sandbox = sinon.sandbox.create()
  sandbox.stub(process.stdout, 'write', sandbox.spy())
})

test.afterEach(t => {
  sandbox.restore()
  delete require.cache[require.resolve('./bin')]
})

test('calculate PPI for given -s and -r', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '-s',
    '17',
    '-r',
    '1920x1080'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], '129.58\n')
})

test('calculate PPI for given --screen-size and -r', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '--screen-size',
    '17',
    '-r',
    '1920x1080'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], '129.58\n')
})

test('calculate PPI for given --screen-size and --resolution', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '--screen-size',
    '17',
    '--resolution',
    '1920x1080'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], '129.58\n')
})

test('calculate PPI for given -s and --resolution', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '-s',
    '17',
    '--resolution',
    '1920x1080'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], '129.58\n')
})

test('print help if given -h', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '-h'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], helpMessage)
})

test('print help if given --help', t => {
  sandbox.stub(process, 'argv', [
    '',
    '',
    '-h'
  ])
  require('./bin')
  t.is(process.stdout.write.args[0][0], helpMessage)
})

