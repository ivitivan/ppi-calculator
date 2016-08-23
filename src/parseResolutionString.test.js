import test from 'ava'
import {parseResolutionString} from './parseResolutionString'

test('parse resolution string correctly', t => {
  const resolutionString = '1920x1080'
  const actual = parseResolutionString({resolutionString})
  const expected = {
    width: 1920,
    height: 1080
  }

  t.deepEqual(actual, expected)
})

test('parse resolution string if X in upper case', t => {
  const resolutionString = '1920X1080'
  const actual = parseResolutionString({resolutionString})
  const expected = {
    width: 1920,
    height: 1080
  }

  t.deepEqual(actual, expected)
})

