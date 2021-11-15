

function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        setGuests={param => { return props.model.setNumberOfGuests(param); }
                          /* TODO custom event callback 
           that calls the method setNumberOfGuests of props.model  */}
        dishes={props.model.dishes}
        dishChoice={param => {props.model.setCurrentDish(param)}} 
        removeDish={param => {props.model.removeFromMenu(param)}}
    />;
}
