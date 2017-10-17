var shopper = {
  name: "Olivia",
  age: 17,
  enjoysShopping: true,
  willShop: function() {
      if (this.enjoysShopping === true) {
      return this.name + " will shop soon!";
    } else {
      return this.name + "won't shop today.";
    }
  },
  groceryCart: ["earrings", "make-up", "shampoo", "nail polish"]
};

console.log(shopper.willShop());
