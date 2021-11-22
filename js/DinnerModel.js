class DinnerModel {

    constructor(guests = 2, dishes = [], currentDish = null) {
        this.observers = [];
        if (typeof guests === "undefined") {
            guests = 2;
        }
        this.setNumberOfGuests(guests);
        //if (typeof dishes === "undefined")
        this.dishes = [];
        //if (typeof currentDish === "undefined")
        this.currentDish = null;
    }

    setNumberOfGuests(numberOfGuests1) {
        if (typeof numberOfGuests1 === "undefined")
            return;

        if (!Number.isInteger(numberOfGuests1) || numberOfGuests1 < 0) {
            throw 'Invalid number of guests: ' + numberOfGuests1;
        }
        if (this.numberOfGuests !== numberOfGuests1) {
            this.numberOfGuests = numberOfGuests1;
            this.notifyObservers();
        }
    }

    addToMenu(dish) {
        if (!this.dishes.includes(dish)) {
            this.dishes.push(dish); //add to array
            this.notifyObservers(); //Should skip if already in menu
        }
    }

    removeFromMenu(dishData) {
        if (this.dishes.includes(dishData)) {
            this.dishes = Object.values(this.dishes).filter(removeFilter); //create new array with one less element

            function removeFilter(currentDish) {
                return currentDish.id !== dishData.id; //returns true if the element should be added to the new array, i.e. not to be filtered
            }
            this.notifyObservers(); //Should skip if if not in menu
        }
    }

    setCurrentDish(id) {
        if (this.currentDish === id || id === null)
            return;

        this.currentDish = id;
        this.currentDishDetails = null;
        this.currentDishError = null;
        this.notifyObservers();

        if (this.currentDish !== null/* check that currentDish is truthy for getDishDetails() to make sense */)
            DishSource.getDishDetails(this.currentDish)
                .then(result => {
                    this.currentDishDetails = result;
                    this.notifyObservers();
                }
                    /* if currentDish is still id, set currentDishDetails  from promise results and notify observers */
                )
                .catch(error => {
                    this.currentDishError = error;
                    this.notifyObservers();
                }
                    /* if currentDish is still id, set currentDishError from promise error and notify observers */
                )
    }

    isDishInMenu(id) {
        let b = false;
        this.dishes.forEach(d => {
            if (d.id === id)
                b = true;
        }
        )

        return b;
    }


    setDishes(dishes) { this.dishes = [...dishes]; this.notifyObservers(); }



    addObserver(callback) {
        this.observers = [...this.observers, callback];

    }
    removeObserver(callback) {
        this.observers = this.observers.filter(removeFilter);
        function removeFilter(currentCallback) {
            return currentCallback !== callback;
        }
    }
    notifyObservers() {
        this.observers.forEach(cb => cb.call());
    }

}