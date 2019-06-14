//help the cashier return the right of change


//Programme input: 
    //Amount due
    var total = prompt('Total due:');
    
    //Amount paid by the customer
    var moneyPaid = prompt('Amount paid');

    // Convert collected values to float numbers
    //Make sure the decimal part has 2 digits
    total = parseFloat(total).toFixed(2);
    moneyPaid = parseFloat(moneyPaid).toFixed(2);

//Programme output:
    //Print change amount
    var change = (moneyPaid - total).toFixed(2);

    // Make sure the decimal part has 2 digits
    var change = (moneyPaid - total).toFixed(2)
    console.log('Due: $' + total + '/Paid: $' + moneyPaid + '/Change: $' + change);

    //Print change breakdown: notes and coins
    var note_coins = [{
        value: 50, 
        name: '$50 notes '
    },
    {
        value: 20, 
        name: '$20 notes '
    },
    {
        value: 10, 
        name: '$10 notes '
    },
    {
        value: 5, 
        name: '$5 notes '
    },
    {
        value: 2, 
        name: '$2 coins '
    },
    {
        value: 1, 
        name: '$1 coins '
    },
    {
        value: 0.5, 
        name: '50c coins '
    },
    {
        value: 0.2, 
        name: '20c coins '
    },
    {
        value: 0.1, 
        name: '10c coins '
    },
    {
        value: 0.05, 
        name: '5c coins '
    },{
        value: 0.01, 
        name: '1c coins '
    }];
    
    var i  = 0;
   while(change > 0) {
    note_coins[i].return = Math.floor(change/note_coins[i].value);
    change = (change%note_coins[i].value).toFixed(2);
    note_coins[i].return > 0 ? console.log(note_coins[i].name + note_coins[i].return): 0;
    i++;
   }
  









