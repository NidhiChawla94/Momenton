var assert = require('assert');
let PrintHierarchyController = require('../helper/printHierarchy').Print;
let seed = require('../helper/seeddata');

let data = seed.seedData();
  describe('findHighestLevelManagers', function() {
    it('should return the list of managers', function() {
        assert.equal(PrintHierarchyController.findHighestLevelManagers().length, 1);
    });
  });
