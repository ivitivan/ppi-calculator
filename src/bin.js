import minimist from 'minimist'
import {parseResolutionString} from './parseResolutionString'
import {calculatePPI} from './calculatePPI'

const argv = minimist(process.argv.slice(2))
const helpMessage = `Usage: ppi-calculator -r <resolution> -s <screen size>

  Calculates PPI for the given screen resolution and digonal size

Options:

  -h, --help                    output usage information
  -r, --resolution              screen resolution
  -s, --screen-size             screen digonal size
`

const screenSize = argv.s || argv['screen-size']
const resolution = argv.r || argv.resolution
const help = argv.h || argv.help

if (help) {
  process.stdout.write(helpMessage)
} else if (screenSize && resolution) {
  const ppi = calculatePPI({resolutionString: resolution, diagonalSize: screenSize})

  process.stdout.write(ppi + '\n')
} else {
  process.stdout.write('requires at least two parameters -r and -s\n')
  process.stdout.write(helpMessage)
}

