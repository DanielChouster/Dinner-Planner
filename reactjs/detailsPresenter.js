function DetailsPresenter(props){
    
    const [number, setGuests] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);
    const [currentDish, setCurrentDish] = React.useState(props.model.currentDish);
    const [currentDishDetails, setCurrentDishDetails] = React.useState(props.model.currentDish);
    const [dishError, setDishError] = React.useState(props.model.currentDishError);
    
    
    
    React.useEffect( function(){
        function obs(){
            setGuests(props.model.numberOfGuests);
            setDishes(props.model.dishes);
            setCurrentDish(props.model.currentDish);
            setCurrentDishDetails(props.model.currentDishDetails);
            setDishError(props.model.currentDishError);
            
        }
        props.model.addObserver(obs);
        return function(){ props.model.removeObserver(obs);}
    },[props.model]);
    return (promiseNoData(currentDish, currentDishDetails, dishError) ||
            <DetailsView 
        people={number} dish={currentDishDetails} 
        isDishInMenu={dishes.includes(currentDish)}/>);
}