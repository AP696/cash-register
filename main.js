// YOUR CODE
const cashRegister = (price, cash, cid) => {
    let changeDue = cash - price;
    let change = [];
    let cidTotal = 0;
    let obj = {};

    const currency = [
        { name: "ONE HUNDRED", value: 10000 },
        { name: "TWENTY", value: 2000 },
        { name: "TEN", value: 1000 },
        { name: "FIVE", value: 500 },
        { name: "ONE", value: 100 },
        { name: "QUARTER", value: 25 },
        { name: "DIME", value: 10 },
        { name: "NICKLE", value: 5 },
        { name: "PENNY", value: 1 }
    ];

    cid.forEach((unit) => {
        cidTotal += unit[1]
    })

    // Return "Closed" if total cash in draw is equal to change due
    if (cidTotal === changeDue) {
        return { status: "CLOSED", change: cid }
    };

    //Return "INCORRECT_PAYMENT" if cash is less than the price
    if (changeDue < 0) {
        return { status: "INCORRECT_PAYMENT", change: [] };
    }

    // Return "INSUFFICIENT FUNDS" if cid is less than the change due or if you cannot return the exact change

    if (cidTotal < changeDue) {
        return { status: "INSUFFICIENT FUNDS", change: [] };
    }

    //Calculate change in drawer at one particular time

    let available = cid.reduce((acc, billType) =>{
        return acc += billType[1];
    },0);
    available = available.toFixed(2);

    // if cash is greater than price, give change back
            
        for (let i = cid.length - 1; i >= 0; i--) {
            let currencySize = cid[i][0];
            let currencyAmount = cid[i][1];
            let cidValue = currencyAmount * 100;

            for (let currencyValue = 0; currencyValue < currency.length; currencyValue++) {
                if (currencyValue > cidValue) {
                    return currencyValue;
                } else {
                    return currencyValue;
                }
            } // if it is greater than, we continue iterating, then stop when it is greater than or equal to, then return that value with the correct amount of change needed
            
            while (changeDue > currencySize) {
                changeDue -= currencyAmount;
                available -= currencyAmount;
                
            }
            change.push(currencySize, currencyAmount);
        }

        
    





    // if (value > 0) {
    //     change.push([unit.name, value]);
    // }
    


    // Return "INSUFFICIENT_FUNDS" if change can't be made with available cash in draw
    if ( changeDue > available) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    }

    //Return change 
    return { status: "OPEN", change: change };
}


// EXAMPLE INVOCATION, so you can `console.log` the outputs
console.log(cashRegister(20, 30, [
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
