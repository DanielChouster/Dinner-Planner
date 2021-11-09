class DinnerModel {

    constructor(guests) {
        if (typeof guests === "undefined")
        {guests = 0;}
        this.setNumberOfGuests(guests);
    }
    setNumberOfGuests(numberOfGuests1) {

        if (typeof numberOfGuests1 === "undefined")
            return;

        if (!Number.isInteger(numberOfGuests1) || numberOfGuests1 < 0) {
            throw 'Invalid number of guests: ' + numberOfGuests1;
        }
        this.numberOfGuests = numberOfGuests1;
    }



}
