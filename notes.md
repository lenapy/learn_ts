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

## Difference

- JS usese 'dynamic types' resolved at runtime
- TS uses 'static types' set during development
- JS fails in runtime
- TS fails during development
- TS knows about way more types than JS
- runtime checking is not as flexible or not as powerfull as what we can do with TS

JS has no compilation step but at runtime, you can check for certain types (e.g. in if conditions). TS on the other hand allows you to catch certain errors during development since it checks types during compilation as well.

With TS you only get support during development, not in runtime, TS logic can't be executed in the browser it only can be executed when you compile the code

## Types

### Core types

| type |  example  | description |
|---------|----------------|------------------------------------------------------------|
|number|1, 5.3, -10 |All numbers, no differentiation between integers or floats|
| string  | '', "", `` | All text values                                            |
| boolean | true, false    | Just two, no "truthy" or "falsy" values                    |
|object|{age: 30}|Any JS object, more specific types (type of object) are possible|
|Array|[1, 2, 3]|Any JS array, type can be flexible or strict (regarding the element types|
|Tuple|[1, 2]|Added by TS: Fixed-length, Fixed-type array|
|Enum|{NEW, OLD}|Added by TS: Automatically enumerated global constant identifiers|
|Any|*|Any kind of value, no specific type assigment|

#### Object

In ts object we don't have key value pairs there but we have key type pairs;

ts object describes the type of object that is getting used somewhere

#### Nested Objects

Let's say we have this JavaScript object:

```js
const product = {
  id: 'abc1',
  price: 12.99,
  tags: ['great-offer', 'hot-and-new'],
  details: {
    title: 'Red Carpet',
    description: 'A great carpet - almost brand-new!'
  }
}
```

This would be the type of such an object:

```ts
{
  id: string;
  price: number;
  tags: string[],
  details: {
    title: string; 
    description: string;
  }
}
```

#### Any

It basically means you can store any kind of value

Takes away almost all advantages ts gives you

#### Type Casting

In TypeScript, you work with types like string or number all the times.
Important: It is string and number (etc.), NOT String, Number etc.
The core primitive types in TypeScript are all lowercase!

TS has a built in feature which is called: 'type inferense', this means that TS tries to understand which type you have in certan variable or constant

### Union types

If we have some place in our app, where the parametr of a function (constant/variable) can accept two different kinds of values
union type can help with that

```ts
function combine(input1: number | string, input2: number | string) {
  let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        result = input1 + input2;
    } else {
        result = input1.toString() + input2.toString();
    }
  return result;
}  
```

So we can use union types to be more flexible regarding what we do in a function or any other place in a code

### Literal types

Literal types are types where you don't just say that certain variable or parameters should hold a number or a string
but where you're very claer about the exact value it should hold

```ts
function combine(input1: number | string, input2: number | string, resultType: 'as-number' | 'as-text') {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
      result = +input1 + +input2;
  } else {
      result = input1.toString() + input2.toString();
  }
  return result;
}  
```

Here in the resultType variable we combine union type and literal type
Any other string value besides 'as-number' or 'as-text' will not be allowed

Another eaxample of literal type is:
const a = 2.8; // here expected values would be not a random number but a specific number -> 2.8
