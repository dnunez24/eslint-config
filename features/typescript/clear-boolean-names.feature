@typescript

Feature: Clear boolean names

  Boolean variables must be named with a prefix that clearly identifies them
  as containers of true/false values. This makes it immediately obvious to
  people reading the code that they can expect a true or false value, especially
  when the library is used outside of a Typescript context. Semantically this reads
  more like an English sentence, which makes code more interpetable for humans.

  Inspired by https://dart.dev/guides/language/effective-dart/design#prefer-a-non-imperative-verb-phrase-for-a-boolean-property-or-variable

  """
  const person = new Person();
  person.isAdult(); // true
  """

  Scenario Outline: Class methods
    Given code that looks like
      """typescript
      class Person {
        <method>(): boolean {
          return true;
        }
      }
      """
    When lint rule "@typescript-eslint/naming-convention" is run
    Then the result is <result>

      Examples: BAD
        | method   | result |
        | adult    | error  |
        | children | error  |

      Examples: GOOD
        | method      | result |
        | isAdult     | pass   |
        | hasChildren | pass   |
