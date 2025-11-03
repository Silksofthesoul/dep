'use strict';
(function () {


  // INFO: You can import dependencies from other files by using the $dep.import function
  const { int, Example } = $dep.import(['int', 'Example']);

  console.log('You have imported the following dependencies:', $dep.ls());

  new Example(int(10)).print();

})();
