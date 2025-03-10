import genericSpacing from './rules/generic-spacing'
import ifNewline from './rules/if-newline'
import importDedupe from './rules/import-dedupe'
import preferInlineTypeImport from './rules/prefer-inline-type-import'
import topLevelFunction from './rules/top-level-function'
import orderClasses from './rules/order-classes'
import noTsExportEqual from './rules/no-ts-export-equal'
import noCjsExports from './rules/no-cjs-exports'
import noConstEnum from './rules/no-const-enum'

export default {
  rules: {
    'if-newline': ifNewline,
    'import-dedupe': importDedupe,
    'prefer-inline-type-import': preferInlineTypeImport,
    'generic-spacing': genericSpacing,
    'top-level-function': topLevelFunction,
    'order-classes': orderClasses,
    'no-cjs-exports': noCjsExports,
    'no-ts-export-equal': noTsExportEqual,
    'no-const-enum': noConstEnum,
  },
}
