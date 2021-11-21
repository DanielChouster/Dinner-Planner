function Show(props){
    const [hashState, setHash] = React.useState(props.hash);
    React.useEffect(function(){
        const listener = function(){setHash(window.location.hash);}
        window.addEventListener("hashchange", listener);
        return function(){ window.removeEventListener("hashchange", listener);}
    },[]);
    return(<div class={props.hash === hashState ? "" : "hidden"}>
        {props.children}
    </div>)
}