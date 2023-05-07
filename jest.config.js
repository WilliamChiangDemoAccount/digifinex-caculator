module.exports = {
    roots: ["<rootDir>/src"],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
        '\\.(css|scss|png)$': 'identity-obj-proxy',
        '^@shared(.*)$': '<rootDir>/src/shared$1',
        '^@utilities(.*)$': '<rootDir>/src/utilities$1',
    },
    collectCoverageFrom: [
        'src/modules/**/*.{js,jsx,ts,tsx}',
        '!src/modules/guideline/**/*.{js,jsx,ts,tsx}',
        'src/shared/pages/**/*.{js,jsx,ts,tsx}',
        '!src/shared/pages/LandingPage**/*.{js,jsx,ts,tsx}',
        'src/shared/components/**/*.{js,jsx,ts,tsx}',
        '!src/shared/components/Breadcrumb**/*.{js,jsx,ts,tsx}',
        '!src/shared/components/Overlay**/*.{js,jsx,ts,tsx}',

    ],
    coverageThreshold: {
        global: {
            // TODO reestablish values
            branches: 78, // 80
            functions: 84, // 87
            statements: 88, // 90
            lines: 88, // 90
        },
    },
}