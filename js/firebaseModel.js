const REF = "dinnerModel" + 50;
function persistModel(model) {
	let loadingFromFirebase = false;// boolean flag, used in a JS closure
	model.addObserver(function () {
		if (loadingFromFirebase) {
			return;
		}
		firebase.database().ref("dinnerModel").set({  // object literal
			guests: model.numberOfGuests,
			dishes: model.dishes,
			currentDish: model.currentDish
		});
	});

	firebase.database().ref(REF).on("value", function (data) {
		loadingFromFirebase = true;
		if (data.val()) {
			model.setNumberOfGuests(data.val().guests);
			model.setDishes(data.val().dishes || []);
			model.setCurrentDish(data.val().CurrentDish || null)

		}
		loadingFromFirebase = false;
	});

}

firebase.initializeApp(firebaseConfig);





