class DinnerModel {

    constructor(guests = 2, dishes = [], currentDish = null) {
        if (typeof guests === "undefined") {
            guests = 0;
        }
        this.setNumberOfGuests(guests);
        this.dishes = []; //array with all dishes
        this.currentDish = null;
    }

    setNumberOfGuests(numberOfGuests1) {
        if (typeof numberOfGuests1 === "undefined")
            return;

        if (!Number.isInteger(numberOfGuests1) || numberOfGuests1 < 0) {
            throw 'Invalid number of guests: ' + numberOfGuests1;
        }
        this.numberOfGuests = numberOfGuests1;
    }

    addToMenu(dish) {
        this.dishes.push(dish); //add to array
    }

    removeFromMenu(dishData) {
        this.dishes = Object.values(this.dishes).filter(removeFilter); //create new array with one less element

        function removeFilter(currentElement) {
            return currentElement.id !== dishData.id; //returns true if element should be added to the new array, i.e. not filtered
        }
    }
    setCurrentDish(id) {
        this.currentDish = id;
    }

}