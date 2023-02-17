/*
After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

Write a code that gives out the total amount for different days(d).

INPUT:
$40 per day
$50 off total for over 7 days

$20 off 3>= + 

*/

function rentalCarCost(d) {
  let costPerDay = 40;
  let totalCost = costPerDay * d;

  if (d >= 7) {
    totalCost -= 50;
  } else if (d >= 3) {
    totalCost -= 20;
  }

  return totalCost;
}
