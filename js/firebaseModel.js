function persistModel(model){
    model.addObserver(function(){
         	firebase.database().ref("dinnerModel").set({  // object literal
			guests: model.numberOfGuests,
			dishes: model.dishes,
            currentDish: model.currentDish
		});
    });
}
