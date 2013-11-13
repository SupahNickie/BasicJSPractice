function FavoriteDrink(name, type, regularity) {
  this.name = name,
  this.type = type,
  this.regularity = regularity
}

FavoriteDrink.prototype.toString = function () {
  return 'I\'m a fan of ' + this.name + ', which is a type of ' + this.type + '. I have it ' + this.regularity + '.';
};

var beer = new FavoriteDrink( 'Kostritzer', 'beer', 'on special occasions' );
var pepsi = new FavoriteDrink( 'Pepsi-Cola', 'cola', 'very rarely' );
var mixedDrink = new FavoriteDrink( 'Jagerbombs', 'mixed drink', 'almost never' );

console.log(beer.toString());
console.log(pepsi.toString());
console.log(mixedDrink.toString());
