
// YOUR CODE



const cashRegister = (price, cash, cid) => {
    let changeDue = cash - price;
    let change = [];
    let cidTotal = 0;
    let obj = {};

    const currency = [
        { name: "ONE HUNDRED", value: 100.0 },
        { name: "TWENTY", value: 20.0 },
        { name: "TEN", value: 10.0 },
        { name: "FIVE", value: 5.0 },
        { name: "ONE", value: 1.0 },
        { name: "QUARTER", value: 0.25 },
        { name: "DIME", value: 0.1 },
        { name: "NICKLE", value: 0.05 },
        { name: "PENNY", value: 0.01 }
    ];

    cid.forEach((unit) => {
        cidTotal += unit[1]
    })
    const available = cid.reduce((acc, billType) => {
        return acc + billType[1]
    }, 0)
    console.log(available)

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

    //Calculate change 

    currency.forEach((unit) => {
        let value = 0;
        let roundedChange = 0;
        while (changeDue > unit.value && cid.length > 0 && cid[cid.length - 1]) {
            roundedChange = Math.floor(changeDue)
            let change1 = roundedChange % 5;
            if (unit.value > 0.01) {
                cid[i]++
            }
            cid[cid.length - 1][1] >= unit.value;  
            changeDue -= unit.value;
            changeDue = Math.floor(changeDue)
            
            value += unit.value
            changeDue - roundedChange;

        }

        if (value > 0) {
            change.push([unit.name, value]);
        }
    })

    // Return "INSUFFICIENT_FUNDS" if change can't be made with available cash in draw
    if ( changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: []};
    }

    //Return change 
    return { status: "OPEN", change: change };
}


// EXAMPLE INVOCATION, so you can `console.log` the outputs
cashRegister(21.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
])

// DO NOT EDIT BELOW
