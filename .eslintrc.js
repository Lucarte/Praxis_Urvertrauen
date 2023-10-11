export default {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        'immutable',
    ],
    "rules": {
        'immutable/no-mutation': 2 // 1 would be just a warning and 0 a cancel of it
    }
}
