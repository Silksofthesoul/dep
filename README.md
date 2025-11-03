# How to use $dep

Clone this repo and open the example folder in your browser.

```sh
https://github.com/Silksofthesoul/dep.git
```

Add the following to your html file:

```html
<head>
  <!-- ... -->
  <script defer src="/path/to/dep.js"></script>
</head>
<!-- ... -->
```

You can use that methods to import and export dependencies:
- $dep.ls() -- Returns an array of all the dependencies
- $dep.import(names) -- Imports the dependencies with the given names
- $dep.export(dependencies) -- Exports the dependencies

# How to use $import and $export

You can import dependencies from other files by using the $import function:

```js
const {int, rndInt } = $import(['int', 'rndInt']);
const { Example }    = $import('Example');
const { Logger }     = $dep.import('Logger');

consoel.log('You have imported the following dependencies:', $dep.ls());

new Example(int(10)).print();
//...
```

You can export dependencies to other files by using the $export function:

```js
class Example {
  //...
}

$export({ Example });
// or
$dep.export({ Example });
//...

```

