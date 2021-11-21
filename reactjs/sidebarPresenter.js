function SidebarPresenter(props){
    const [number, setGuests] = React.useState(props.model.numberOfGuests);
    const [dish, getDish] = React.useState(props.model.dishes);
    const [remDish, removeDish] = React.useState(props.model.dishes);
    const [choDish, dishChoice] = React.useState(props.model.currentDish);
    React.useEffect( function(){
        function obs(){
            setGuests(props.model.numberOfGuests);
            getDish(props.model.dishes);
            removeDish(props.model.removeFromMenu(remDish));
            dishChoice(props.model.setCurrentDish(choDish));
        }
        props.model.addObserver(obs);
        return function(){ props.model.removeObserver(obs);}
    },[props.model]);
    return (<SidebarView guests={number} dishes={dish}
        setGuests={number=>props.model.setNumberOfGuests(number)}
        removeDish={dish=>props.model.removeFromMenu(dish)}
        dishChoice={dish=>props.model.setCurrentDish(dish.id)}/>);
}