// The Date object represents a single moment in time. 
// It contains a number that reprsents the milliseconds 
// since January 1, 1970 UTC.

// The following shows how to create a new Date object 
// that represents the currend date and time.

const now = new Date()

// how to call the getTIme() method of the Date object.
// number of milliseconds since January 1, 1970 00:00:00 UTC:

const time = now.getTime();
console.log(time);
//change