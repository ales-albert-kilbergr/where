/* eslint-disable */
export default {
  displayName: 'where',
  collectCoverage: true,
  coverageReporters: ['text', 'lcov'],
  coverageDirectory: './dist/coverage',
  testEnvironment: 'node',
  preset: 'ts-jest',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50,
    },
  },
};
