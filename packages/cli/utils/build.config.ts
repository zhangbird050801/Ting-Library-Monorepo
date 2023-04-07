// @ts-ignore
import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index', 'src/pkg', 'src/log'],
  rollup: {
    inlineDependencies: true
  },
  clean: true,
  declaration: true
})
