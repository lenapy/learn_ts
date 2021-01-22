# What's TS

TypeScript's type system only helps you during development (i.e. before the code gets copiled)
It doesn't change the runtime code
The core task of TS checking types and yelling at us if we're using them incorrectly.

- a JS superset
- a language built upon JS, adds new features and advantages to it
- can't be executed by JS environment like browser as well as node.js
- compiles code to JS, TS compiles new features to JS environment

## TS adds

- Types!
- Next-gen JS features (compiled down forolder browsers)
- Non-javaScript Features like Interfaces or Generics
- Meta-Programming Features like Decorators
- Rich Configuration Options
- Modern Tooling that helps even in non-TS Projects

## Difference:

- JS usese 'dynamic types' resolved at runtime
- TS uses 'static types' set during development
- JS fails in runtime
- TS fails during development
- TS knows about way more types than JS
- runtime checking is not as flexible or not as powerfull as what we can do with TS

JS has no compilation step but at runtime, you can check for certain types (e.g. in if conditions). TS on the other hand allows you to catch certain errors during development since it checks types during compilation as well.

With TS you only get support during development, not in runtime, TS logic can't be executed in the browser it only can be executed when you compile the code

# Types

## Core types

| type |  example  | description |
|---------|----------------|------------------------------------------------------------|
|number|1, 5.3, -10 |All numbers, no differentiation between integers or floats|
| string  | 'Hi', "Hi", `` | All text values                                            |
| boolean | true, false    | Just two, no "truthy" or "falsy" values                    |
|object|{age: 30}|Any JS object, more specific types (type of object) are possible|

## Type Casing

In TypeScript, you work with types like string or number all the times.
Important: It is string and number (etc.), NOT String, Number etc.
The core primitive types in TypeScript are all lowercase!

TS has a built in feature which is called: 'type inferense', this means that TS tries to understand which type you have in certan variable or constant
