// new file js/views/sidebarView.js
function SearchFormView(props) {

    return (
        <div>
            <input type="search" onInput={ e=> props.onText(e.target.value) } />&#160;&#160;
            <select onChange={ e=> props.onDishType(e.target.value) }>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) {

                        return (

                            <option><div> {opt}</div></option>

                        )
                    })}
            </select>
            &#160;&#160;<button onClick={ event=> props.onSearch() }>search!</button>

        </div>
    );


    function eventPrinter(evt)
    { 
        console.log(evt);
    }








}

