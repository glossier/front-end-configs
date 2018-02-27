import test from 'ava'
import { CLIEngine } from 'eslint'
import eslintrc from '../eslintrc.json'

const cli = new CLIEngine({
  useEslintrc: false,
  baseConfig: eslintrc,
  rules: {
    'no-unused-vars': 0,
    'eol-last': 0
  }
})

const lint = text => {
  const linter = cli.executeOnText(text)
  return linter.results[0]
}

test('disallow line longer than 100 characters', t => {
  const result = lint("const books = ['JavaScript: The Good Parts', 'ES6 & Beyond', 'Eloquent JavaScript A Modrn Introduction to Programming']")
  t.is(result.errorCount, 1)
  t.is(result.messages[0].ruleId, 'max-len')
})

test('prefer const', t => {
  const result = lint("let foo = 'bar'")
  t.is(result.errorCount, 1)
  t.is(result.messages[0].ruleId, 'prefer-const')
})

test('disallow var', t => {
  const result = lint("var foo = 'bar'")
  t.is(result.errorCount, 1)
  t.is(result.messages[0].ruleId, 'no-var')
})
