import execa from 'execa'
import { resolve } from 'path'

const bin = resolve(__dirname, './bin.js')

describe('pzmod', () => {
  it('should display the help contents', async () => {
    const { stdout } = await execa(bin, ['--help'])

    expect(stdout).toContain('Usage: pzmod [options]')
  })
})
