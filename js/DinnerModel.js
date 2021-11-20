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
                this.notifyObservers();
            }

        addToMenu(dish)
            {
                this.dishes.push(dish); //add to array
                this.notifyObservers(); //Should skip if already in menu
            }

        removeFromMenu(dishData)
            {
                this.dishes = Object.values(this.dishes).filter(removeFilter); //create new array with one less element

                function removeFilter(currentDish)
                {
                    return currentDish.id !== dishData; //returns true if the element should be added to the new array, i.e. not to be filtered
                }
                this.notifyObservers(); //Should skip if if not in menu
            }
        setCurrentDish(id)
            {
                this.currentDish = id;
                this.notifyObservers(); //Should skip if id is same as before
            }
        
        addObserver(callback){
            this.observers = [...this.observers,callback];
            
        }
        removeObserver(callback){
            this.observers = this.observers.filter(removeFilter);
            function removeFilter(currentCallback){
                return currentCallback !== callback;
            }
        }
        notifyObservers(){
            this.observers.forEach(cb=>cb.call());
        }
    }