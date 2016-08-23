export const parseResolutionString = ({
  resolutionString // string like '1920x1080' or '1920X1080'
}) => {
  const [width, height] = resolutionString.toLowerCase().split('x')

  return {
    height: Number.parseInt(height),
    width: Number.parseInt(width)
  }
}

