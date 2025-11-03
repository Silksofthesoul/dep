'use strict';
(function () {

  // INFO: You can import dependencies from other files by using the $import function
  const { int, rndInt } = $import(['int', 'rndInt']);

  class Example {
    n = 0;
    constructor(n) {
      this.n = int(n) + rndInt(1000, 9999);
    }
    print() {
      console.log(`Example: ${this.n}`);
    }
  }

  // INFO: You can export dependencies to other files by using the $export function
  $export({ Example });

})();
