// new file js/views/sidebarView.js
function SidebarView(props) {
    var b = false;
    if (props.guests < 2) { b = true };


    return (
        <div style={{border:"black", borderWidth:"1px", borderStyle:"solid", width:"200"}}>
                        <br></br>  &#160;&#160; &#160; &#160; &#160; &#160;
            <button disabled={b} onClick={e => props.setGuests(props.guests - 1)}>–</button>
            <span>&#160; {props.guests}&#160; </span>
            <button onClick={e => props.setGuests(props.guests + 1)}>+</button>
            <br></br><br></br>
        </div>
    );

}