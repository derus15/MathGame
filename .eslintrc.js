module.exports = {
    env: {
        browser: true,
        jest: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'plugin:storybook/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        requireConfigFile: false,
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        indent: [2, 4],
        camelcase: 'off',
        'react/prop-types': 'off',
        'no-console': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-trailing-spaces': 'off',
        'padded-blocks': 'off',
        'max-len': ['error', { code: 110, ignoreComments: true }],
        'no-param-reassign': 'off',
        'react/jsx-no-bind': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'jsx-a11y/no-autofocus': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
        'react/jsx-props-no-spreading': 'off',
        'object-curly-newline': 'off',
        'quote-props': 'off',
        'react/function-component-definition': [2, { 'namedComponents': 'arrow-function' }],
        'import/no-unresolved': 'off',
        'no-underscore-dangle': 'off',
        'import/order': 'off',
        'import/no-absolute-path': 'off',
        'react/jsx-wrap-multilines': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'consistent-return': 'off',
        'no-nested-ternary': 'off',
        'react/no-array-index-key': 'off',
    },
    globals: {
        __IS_DEV__: true,
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx,js,jsx}'],
        },
    ],
};
