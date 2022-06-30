'use strict';

module.exports = {
    env: {
        browser: true,
        es2022: true,
        jest: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: 2022
    },
    plugins: [
        'jsx-a11y',
        'react-hooks',
        'import'
    ],
    extends: [
        'plugin:jsx-a11y/recommended',
        'plugin:import/recommended',
        'plugin:@hapi/recommended',
        'plugin:react/jsx-runtime'
    ],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-uses-vars': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        'react/jsx-no-undef': 'error',
        // compromise between usual ESM style of declaring functions for components as default exports
        // and still allowing function expressions for non-component work (though note that the linter
        // doesn't detect function style for assignment to object properties e.g. on internals.* )
        'func-style': ['error', 'declaration', { 'allowArrowFunctions': true }],
        // vendored from eslint-config-standard-react: https://github.com/standard/eslint-config-standard-react/blob/master/eslintrc.json
        'react/jsx-no-bind': ['error', {
            allowArrowFunctions: true,
            allowBind: false,
            ignoreRefs: true
        }],
        'react/no-did-update-set-state': 'error',
        'react/no-unknown-property': 'error',
        'react/no-unused-prop-types': 'error',
        'react/prop-types': 'error'
    },
    overrides: [
        // adapted from https://github.com/fabgrel10/vite-react-starter/blob/main/.eslintrc.json
        {
            files: ['src/**/*.{js,jsx}'],
            rules: {
                'import/order': [
                    'error',
                    {
                        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
                        pathGroups: [
                            {
                                pattern: './**/**\\.css',
                                group: 'type',
                                position: 'after'
                            }
                        ],
                        pathGroupsExcludedImportTypes: ['builtin'],
                        alphabetize: {
                            order: 'asc',
                            caseInsensitive: true
                        },
                        warnOnUnassignedImports: true
                    }
                ]
            }
        },
        {
            files: ['!src/**'],
            excludedFiles: ['vite.config.js'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ]
};
