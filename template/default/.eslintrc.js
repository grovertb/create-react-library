module.exports = {
  parser       : 'babel-eslint',
  parserOptions: {
    ecmaVersion : 6,
    sourceType  : 'module',
    ecmaFeatures: {
      jsx                             : true,
      arrowFunctions                  : true,
      blockBindings                   : true,
      defaultParams                   : true,
      destructuring                   : true,
      forOf                           : true,
      generators                      : true,
      objectLiteralComputedProperties : true,
      objectLiteralShorthandMethods   : true,
      objectLiteralShorthandProperties: true,
      experimentalObjectRestSpread    : true,
      restParams                      : true,
      spread                          : true,
      templateStrings                 : true,
      modules                         : true,
      classes                         : true
    }
  },
  plugins: [ 'react' ],
  rules  : {
    'react/jsx-no-bind': [
      2,
      {
        ignoreRefs         : true,
        allowArrowFunctions: true,
        allowBind          : false
      }
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        afterOpening     : 'never',
        closingSlash     : 'never',
        beforeSelfClosing: 'always'
      }
    ],
    'jsx-quotes'                        : [ 'error', 'prefer-single' ],
    'react/jsx-equals-spacing'          : [ 'error', 'never' ],
    'react/jsx-closing-bracket-location': [ 'error', 'after-props' ],
    'react/jsx-curly-spacing'           : [
      'error',
      {
        when: 'never'
      }
    ],
    'react/require-render-return'  : [ 'error', 'never' ],
    'react/jsx-filename-extension' : [ 1, { extensions: [ '.js' ] } ],
    'react/jsx-first-prop-new-line': [ 'error', 'multiline-multiprop' ],
    'react/jsx-handler-names'      : [
      'error',
      {
        eventHandlerPrefix    : '_handle',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-key'               : [ 'error' ],
    'react/jsx-max-props-per-line': [
      'error',
      { maximum: 3, when: 'always' }
    ],
    'react/jsx-no-duplicate-props': [ 'error' ],
    'react/jsx-sort-props'        : [ 'error' ],
    'react/jsx-wrap-multilines'   : [ 'error' ],
    'react/jsx-uses-react'        : [ 'error' ],
    'react/jsx-uses-vars'         : [ 'error' ],
    'react/react-in-jsx-scope'    : [ 'error' ],
    'no-unused-vars'              : [
      'error',
      { vars: 'local', args: 'after-used', ignoreRestSiblings: false }
    ],
    'no-empty': [
      2,
      {
        allowEmptyCatch: true
      }
    ],
    'no-with'                        : 2,
    'no-mixed-spaces-and-tabs'       : 2,
    'no-multiple-empty-lines'        : [ 'error', { max: 1, maxEOF: 1 } ],
    'padded-blocks'                  : [ 'error', 'never' ],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' }
    ],
    'no-multi-str'      : 2,
    'dot-location'      : [ 2, 'property' ],
    'operator-linebreak': [ 2, 'after' ],
    'quote-props'       : [
      2,
      'as-needed',
      {
        keywords: true
      }
    ],
    'space-unary-ops': [
      2,
      {
        words   : false,
        nonwords: false
      }
    ],
    'no-restricted-syntax': [
      'warn',
      {
        selector: "CallExpression[callee.object.name='console'][callee.property.name=/^(log|warn|error|info|trace)$/]",
        message : 'Unexpected property on console object was called'
      }
    ],
    'object-curly-spacing'       : [ 'error', 'always' ],
    'space-before-function-paren': [
      2,
      {
        anonymous: 'ignore',
        named    : 'never'
      }
    ],
    'no-spaced-func'    : 2,
    'space-in-parens'   : [ 2, 'never' ],
    semi                : [ 2, 'never' ],
    'comma-dangle'      : [ 2, 'never' ],
    'no-trailing-spaces': 2,
    yoda                : [ 2, 'never' ],
    'comma-style'       : [ 2, 'last' ],
    curly               : [ 2, 'multi', 'consistent' ],
    'eol-last'          : 2,
    'wrap-iife'         : 2,
    'space-infix-ops'   : 2,
    'keyword-spacing'   : [
      2,
      {
        overrides: {
          'if': {
            after: false
          },
          'while': {
            before: true
          },
          'catch': {
            before: true
          }
        }
      }
    ],
    'spaced-comment'     : [ 2, 'always' ],
    'space-before-blocks': [ 2, 'always' ],
    'key-spacing'        : [
      2,
      {
        align: 'colon'
      }
    ],
    'array-bracket-spacing': [ 2, 'always' ],
    indent                 : [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    'max-len': [
      'error',
      {
        code         : 150,
        ignoreUrls   : true,
        ignoreStrings: true,
        ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\('
      }
    ]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
}