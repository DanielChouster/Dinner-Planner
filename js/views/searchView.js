// new file js/views/sidebarView.js
function SearchFormView(props) {

    let k1 = 0; //key
    return (
        <div>
            <input type="search" onInput={e => props.onText(e.target.value)} />&#160;&#160;
            <select onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map(
                    function (opt) {

                        return (

                            <option key={k1++} >  {opt}</option>

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
    let k1 = 0; //key
    if (props.searchResults === null)
        return;
    if (typeof props.searchResults.data === "undefined")
        return;
    console.log(props.searchResults);

    return (
        <div class="searchresultsview">

            {props.searchResults.data.results.map(
                function (opt) {

                    return (

                        <span key={k1++} class="searchResult" onClick={e => props.dishChosen((opt.id))}>

                            <img src={opt.image} width="100" height="100" ></img>
                            <div>{opt.title}</div>

                        </span>

                    );
                })}

        </div>
    );

}
