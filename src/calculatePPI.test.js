import test from 'ava'
import {calculatePPI} from './calculatePPI';
import {parseResolutionString} from './parseResolutionString'

test('calculate PPI if given width, heigth and diagonalSize', t => {
  const diagonalSize = 17
  const resolutionString = '1280x1024'
  const {width, height} = parseResolutionString({resolutionString})
  const actual = calculatePPI({width, height, diagonalSize})
  const expected = 96.42

  t.is(actual, expected)
})

test('calculate PPI if given resolutionString and diagonalSize', t => {
  const diagonalSize = 17
  const resolutionString = '1920x1080'
  const actual = calculatePPI({resolutionString, diagonalSize})
  const expected = 129.58

  t.is(actual, expected)
})

