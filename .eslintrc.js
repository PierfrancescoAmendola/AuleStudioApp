module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'security'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:security/recommended' // Regole per scovare vulnerabilità e best practices di sicurezza
    ],
    rules: {
        // Disabilita regole troppo stringenti della sicurezza se causano falsi positivi nel front-end
        // 'security/detect-object-injection': 'warn',
    },
    env: {
        node: true,
        browser: true,
    },
};
