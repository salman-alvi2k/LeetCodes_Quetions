function computeAmount() {
  this.TotalAmount = 0;

  this.crore = function (amountToBeAdded) {
    this.TotalAmount += amountToBeAdded * 10000000;
    return this;
  };

  this.lacs = function (amountToBeAdded) {
    this.TotalAmount += amountToBeAdded * 100000;
    return this;
  };

  this.thousands = function (amountToBeAdded) {
    this.TotalAmount += amountToBeAdded * 1000;
    return this;
  };

  this.value = function () {
    console.log(this.TotalAmount);
    return this;
  };

  return this;
}

computeAmount()
  .lacs(15)
  .crore(5)
  .crore(2)
  .lacs(20)
  .thousands(45)
  .crore(7)
  .value();
