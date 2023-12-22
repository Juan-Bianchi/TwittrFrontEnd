import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.test.(ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
    coverageDirectory: '<rootDir>/coverage',
    collectCoverageFrom: ['src/**/*.{ts,tsx}'],
};

export default config;
