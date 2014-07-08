'use strict';

describe('Service: lists', function () {

  // load the service's module
  beforeEach(module('shoprApp'));

  // instantiate service
  var lists;
  beforeEach(inject(function (_lists_) {
    lists = _lists_;
  }));

  it('should do something', function () {
    expect(!!lists).toBe(true);
  });

});
