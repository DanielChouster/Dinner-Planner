function SummaryPresenter(props){
    const [persons, setPersons] = React.useState(props.model.numberOfGuests);
    const [ingredients, setIngredients] = React.useState(getIngredients(props.model.dishes));
    React.useEffect(function(){
        function obs(){
            setPersons(props.model.numberOfGuests);
            setIngredients(getIngredients(props.model.dishes));
        }
        props.model.addObserver(obs);
        return function(){props.model.removeObserver(obs);}
    },[props.model]);
    return (<SummaryView persons={persons} ingredients={ingredients}/>)
}