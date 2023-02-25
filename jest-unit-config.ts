import config from './jest.config'
const jestConfig = Object.assign({}, config, { testMatch: ['**/*.spec.ts'] })
export default jestConfig
