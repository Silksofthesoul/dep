'use strict';
(function () {

  const int = v => parseInt(v);

  const rndInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

  // INFO: You can export dependencies to other files by using the $dep.export function
  $dep.export({ int, rndInt });

})();
