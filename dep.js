'use strict';
(function () {

  function  $DEP() {
    const dependencies = new Map();
    const self         = this;

    this.ls = function() { return [...dependencies.keys()]; };

    this.export = function(dep) {
      const {entries} = Object;
      entries(dep).forEach(([name, val]) => {
        if (dependencies.has(name)) throw new Error(`Dependency ${name} already exists`);
        dependencies.set(name, val);
      });
      return self;
    };

    this.import = function(names) {
      if (typeof names === 'string') {
        if (!dependencies.has(names)) throw new Error(`Dependency ${names} doesn't exist`);
        return {[names]: dependencies.get(names) };
      } else if(Array.isArray(names)) {
        return names.reduce((acc, name) => {
          if (!dependencies.has(name)) throw new Error(`Dependency ${name} doesn't exist`);
          acc[name] = dependencies.get(name);
          return acc;
        }, {});
      }
      throw new Error(`Invalid argument type`);
    };
  };

   const $dep    = new $DEP();
   const $import = $dep.import;
   const $export = $dep.export; 

  if(window.$dep    !== undefined) console.warn('window.$dep already exists');
  if(window.$import !== undefined) console.warn('window.$import already exists');
  if(window.$export !== undefined) console.warn('window.$export already exists');

  window.$import = $import;
  window.$export = $export;
  window.$dep    = $dep;
})();
