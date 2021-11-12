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

                            <option key={ opt } >  {opt}</option>

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
        <div class="searchresultsview">

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

}
