module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["prettier", "react"],
    "rules": {
        "prettier/prettier": "error",
        "indent": ["off", "tab"],
        "linebreak-style": ["off", "windows"],
        "quotes": ["warn", "single"],
        "semi": ["off", "always"]
    }
}
