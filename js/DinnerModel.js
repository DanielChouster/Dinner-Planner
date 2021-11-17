class DinnerModel
    {

        constructor(guests = 2, dishes = [], currentDish = null)
            {
                this.observers = [];
                if (typeof guests === "undefined")
                    {
                        guests = 2;
                    }
                this.setNumberOfGuests(guests);
                //if (typeof dishes === "undefined")
                    this.dishes = [];
                //if (typeof currentDish === "undefined")
                    this.currentDish = null;
            }

        setNumberOfGuests(numberOfGuests1)
            {
                if (typeof numberOfGuests1 === "undefined")
                    return;

                if (!Number.isInteger(numberOfGuests1) || numberOfGuests1 < 0)
                    {
                        throw 'Invalid number of guests: ' + numberOfGuests1;
                    }
                this.numberOfGuests = numberOfGuests1;
            }

        addToMenu(dish)
            {
                this.dishes.push(dish); //add to array
            }

        removeFromMenu(dishData)
            {
                this.dishes = Object.values(this.dishes).filter(removeFilter); //create new array with one less element

                function removeFilter(currentDish)
                    {
                        return currentDish.id !== dishData; //returns true if the element should be added to the new array, i.e. not to be filtered
                    }
            }
        setCurrentDish(id)
            {
                this.currentDish = id;
            }
        
        addObserver(callback){
            this.observers.push(callback);
        }
        removeObserver(callback){
            
        }
        notifyObservers(){

        }
    }
