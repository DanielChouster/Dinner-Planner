// new file js/views/sidebarView.js
function SearchFormView(props) {

    return (
        <div>
            <input type="search" onInput={e => props.onText(e.target.value)} />&#160;&#160;
            <select onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) {

                        return (

                            <option><div> {opt}</div></option>

                        )
                    })}
            </select>
            &#160;&#160;<button onClick={event => props.onSearch()}>search!</button>

        </div>
    );


    function eventPrinter(evt) {
        console.log(evt);
    }

}


function SearchResultsView(props) {
    //console.log("write " + props.searchResults.data.results[0]);

    return (
        <div /*style={{ border: "black", borderWidth: "1px", borderStyle: "solid", width: "200" }}*/>

            {props.searchResults.data.results.map(
                function (opt) {

                    return (

                        <span class="searchResult" onClick={e=>props.dishChosen((opt.id))}>

                            <img src={opt.image} width="100" height="100" ></img>
                            <div>{opt.title}</div>

                        </span>

                    )
                })}

        </div>
    );

}//<img src={props.searchResults.data.results[1].image} width="100" height="100" ></img>
//<div>{props.searchResults.data.results[1].title}</div>
//                            <div>{opt.title}</div>
