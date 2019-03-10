module.exports = {
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended",
        "tslint-config-prettier"
    ],
    "rulesDirectory": [
        "tslint-plugin-prettier"
    ],
    "jsRules": {},
    "rules": {
        "interface-name": false,
        "object-literal-sort-keys": false,
        "prettier": [true, { "singleQuote": true }]
    }
};