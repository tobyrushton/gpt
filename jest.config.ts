import nextJest from 'next/jest'

const createJestConfig = nextJest({
    dir: './',
})

const jestConfig = {
    clearMocks: true,
    coverageProvider: 'v8',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(css|scss|less|sass)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>/$1',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['\\\\node_modules\\\\', 'resolve.ts'],
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            // required due to custom location of tsconfig.json configuration file
            // https://kulshekhar.github.io/ts-jest/docs/getting-started/options/tsconfig
            {tsconfig: './__tests__/tsconfig.json'},
          ],
    },
}

export default createJestConfig(jestConfig)