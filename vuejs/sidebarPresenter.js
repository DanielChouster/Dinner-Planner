

function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        dishes={props.model.dishes}    
        setGuests={param => { return props.model.setNumberOfGuests(param);}} 
        dishChoice={param => { return props.model.setCurrentDish(param);}}
        removeDish={param => { return props.model.removeFromMenu(param);}}
        />;
}
