import {parseResolutionString} from './parseResolutionString'

export const calculatePPI = ({
  resolutionString = '', // resolution string like 1920x1080
  diagonalSize, // screen diagonal size in inches
  width, // screen width in pixels
  height, // screen height in pixels
}) => {
  if (resolutionString !== '' && diagonalSize !== undefined) {
    const {width, height} = parseResolutionString({resolutionString})

    return calculatePPI({width, height, diagonalSize})
  } else if (width > 0 && height > 0 && diagonalSize > 0) {
    return Math.round(
      (Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) / diagonalSize) * 100
    ) / 100
  }
}

