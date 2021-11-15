

function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        dishes={props.model.dishes}    
        setGuests={param => { return props.model.setNumberOfGuests(param);}} 
        dishChoice={param => { return props.model.setCurrentDish(param);}}
        removeDish={param => { return props.model.removeFromMenu(param);}}
        />;
}
function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        setGuests={param => { return props.model.setNumberOfGuests(param); }
                          /* TODO custom event callback 
           that calls the method setNumberOfGuests of props.model  */}
        dishes={props.model.dishes}
        dishChoice={param => {props.model.setCurrentDish(param)}} 
        removeDish={param => {props.model.removeFromMenu(param)}}
    />;
<<<<<<< HEAD
}
=======
}
>>>>>>> ad6eab72913e20e1dd17957ba8372141aeb8c370
