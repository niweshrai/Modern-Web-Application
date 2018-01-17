const item = {
	"name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price" : 2
}

const applyCoupon = category => discount => object => {
	object.price = object.price - (discount*object.price);
  return object;
}
console.log(applyCoupon('food')(0.1)(item).price);