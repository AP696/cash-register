// YOUR CODE
function cashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let totalCashInDrawer = 0;
    
    for (let i = 0; i < cid.length; i++) {
      totalCashInDrawer += cid[i][1];
    }
    
    if (changeDue > totalCashInDrawer) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    if (changeDue === totalCashInDrawer) {
      return {status: "CLOSED", change: cid};
    }
    
    let change = [];
    let values = {
      "PENNY": 0.01,
      "NICKEL": 0.05,
      "DIME": 0.1,
      "QUARTER": 0.25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100
    };

    if (cash < price) {
        return {status: "INCORRECT_PAYMENT", change: change};
    }
    
    for (let i = cid.length - 1; i >= 0; i--) {
      let coinName = cid[i][0];
      let coinValue = values[coinName];
      let coinTotal = cid[i][1];
      let coinAmount = 0;
      
      if (changeDue >= coinValue) {
        while (coinAmount + coinValue <= coinTotal && changeDue >= coinValue) {
          coinAmount += coinValue;
          changeDue -= coinValue;
          changeDue = Math.round(changeDue * 100) / 100;
        }
      }
      
      if (coinAmount > 0) {
        change.push([coinName, coinAmount]);
      }
    }
    
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    
    return {status: "OPEN", change: change.reverse()};
    function cashRegister(price, cash, cid) {
        let changeDue = cash - price;
        let totalCashInDrawer = 0;
        
        for (let i = 0; i < cid.length; i++) {
          totalCashInDrawer += cid[i][1];
        }
        
        if (changeDue > totalCashInDrawer) {
          return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        
        if (changeDue === totalCashInDrawer) {
          return {status: "CLOSED", change: cid};
        }
        
        let change = [];
        let values = {
          "PENNY": 0.01,
          "NICKEL": 0.05,
          "DIME": 0.1,
          "QUARTER": 0.25,
          "ONE": 1,
          "FIVE": 5,
          "TEN": 10,
          "TWENTY": 20,
          "ONE HUNDRED": 100
        };
    
        if (cash < price) {
            return {status: "INCORRECT_PAYMENT", change: change};
        }
        
        for (let i = cid.length - 1; i >= 0; i--) {
          let coinName = cid[i][0];
          let coinValue = values[coinName];
          let coinTotal = cid[i][1];
          let coinAmount = 0;
          
          if (changeDue >= coinValue) {
            while (coinAmount + coinValue <= coinTotal && changeDue >= coinValue) {
              coinAmount += coinValue;
              changeDue -= coinValue;
              changeDue = Math.round(changeDue * 100) / 100;
            }
          }
          
          if (coinAmount > 0) {
            change.push([coinName, coinAmount]);
          }
        }
        
        if (changeDue > 0) {
          return {status: "INSUFFICIENT_FUNDS", change: []};
        }
        
        return {status: "OPEN", change: change.reverse()};
      }
    
<<<<<<< HEAD

=======
    }
>>>>>>> 00251d72c0ec9103483fdf859a96915122a3a73b

// EXAMPLE INVOCATION, so you can `console.log` the outputs
console.log(cashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]));


// DO NOT EDIT BELOW