module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.test.{js,jsx,ts,tsx}'],
  extensionsToTreatAsEsm: ['.jsx, .tsx, .ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverage: true,
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
};
