function SidebarPresenter(props) {
    const [number, setGuests] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);
    const [choDish, dishChoice] = React.useState(props.model.currentDish);
    const [dishesL, setDishesL] = React.useState(props.model.dishes.length);

    React.useEffect(function () {
        function obs() {
            setGuests(props.model.numberOfGuests);
            setDishes(props.model.dishes);
            dishChoice(props.model.setCurrentDish(choDish));
            setDishesL(props.model.dishes.length);
        }
        props.model.addObserver(obs);
        return function () { props.model.removeObserver(obs); }
    }, [props.model]);
    return (<SidebarView guests={number} dishes={dishes}
        setGuests={number => props.model.setNumberOfGuests(number)}
        removeDish={dish => props.model.removeFromMenu(dish)}
        dishChoice={dishid => props.model.setCurrentDish(dishid)} />);
}