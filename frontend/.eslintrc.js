module.exports = {
    extends: ["airbnb"],
    parser: "babel-eslint",
    env: {
        amd: true,
        browser: true,
        es6: true
    },
    plugins: ["html"],
    ecmaFeatures: {
        modules: true,
        jsx: true
    },
    rules: {
        indent: ["error", 4, {SwitchCase: 1}],
        "comma-dangle": "off",
        "import/prefer-default-import": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "func-names": ["warn", "as-needed"],
        "import/no-extraneous-dependencies": "off",
        "react/jsx-curly-spacing": ["error", "always"],
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/require-default-props": "off",
        "jsx-a11y/no-static-element-interactions": "off"
    },
    settings: {
        "import/resolver": {
            webpack: { config: "webpack.config.js" }
        },
    }
}
