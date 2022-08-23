
const cart = ["shoes", "pants", "jacket"];
//call back hell (call as pyramid of doom)
api.createCart(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet(function () {});
    });
  });
});
//inversion of control