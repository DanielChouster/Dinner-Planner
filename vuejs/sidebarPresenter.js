

function SidebarPresenter(props) {   // assume a model prop
    return <SidebarView guests={props.model.numberOfGuests}
        setGuests={param => { return props.model.setNumberOfGuests(param); }
                          /* TODO custom event callback 
           that calls the method setNumberOfGuests of props.model  */}
    />
}
