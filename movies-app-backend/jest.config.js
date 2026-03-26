export default {
    testEnvironment: 'node',
    injectGlobals: true,
    transform: {
        '^.+\\.(js|mjs|cjs)$': ['@swc/jest'],
    },
    setupFilesAfterEnv: ['./tests/setup.js'],
    // Añade esto para estar seguros de las rutas en el monorepo:
    moduleDirectories: ['node_modules', 'src'], 
}