function SearchPresenter(props) {
    const [promise, setPromise] = React.useState(DishSource.searchDishes({}));
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    let searchQuery = "";
    let searchType = "";


    React.useEffect(function () {
        setData(null); setError(null);
        let cancelled = false;
        if (promise)
            promise.then(function (dt) { if (!cancelled) setData(dt); })
                .catch(function (er) { if (!cancelled); });
        return function () { cancelled = true; };
    }, [promise]);
    return (<React.Fragment><SearchFormView options={["starter", "main course", "dessert"]}
        onText={txt => searchQuery = txt}
        onDishType={dishType => searchType = dishType}
        onSearch={() => setPromise((DishSource.searchDishes({ type: searchType, query: searchQuery })))}/>
        {promiseNoData(promise, data, error) ||
            <SearchResultsView searchResults={data}
            dishChosen={id=>{props.model.setCurrentDish(id); console.log("The user chose dish ", id); }}  
            />}
    </React.Fragment>);
}