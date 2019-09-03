if (typeof module !== 'undefined') {
    var assert = require('assert'),
        sinon = require('sinon'),
        faker = require('../index');
}describe("book.js", function() {

  describe("bookName())", function() {
      it("returns random random book namey", function() {
          var bookName = faker.book.bookName();
          assert.ok(faker.definitions.book.bookName.indexOf(bookName) !== -1);
      });
  }); 
describe("bookAuthor())", function() {

    it("returns random book author", function() {
        var bookAuthor = faker.book.bookAuthor();
        assert.ok(faker.definitions.book.bookAuthor.indexOf(bookAuthor) !== -1);
    });
});
    describe("bookPublisher())", function () {

        it("returns random book publisher", function () {
            var bookPublisher = faker.book.bookPublisher();
            assert.ok(faker.definitions.book.bookPublisher.indexOf(bookPublisher) !== -1);
        });
    });
    describe("price(min, max, dec, symbol)", function () {
        it("should use the default amounts when not passing arguments", function () {
            var price = faker.book.price();

            assert.ok(price);
            assert.equal((price > 0), true, "the amount should be greater than 0");
            assert.equal((price < 1001), true, "the amount should be less than 1000");
        });
});
});
