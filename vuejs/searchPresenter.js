function SearchPresenter(props)
{
    const PromisePresenter = {
        data() {
            return {promise: null, data: null, error: null};
        },
        created() {
            this.promise = DishSource.searchDishes({});
        }, // lifecycle 1, execute at creation
        watch: {
            'promise': {// note: not this.promise! 
                immediate: true,
                handler() {
                    this.data = this.error = null;
                    if (this.promise) {
                        const p = this.promise;
                        this.promise.then(dt => {
                            if (this.promise === p)
                                this.data = dt;
                        })
                                .catch(er => {
                                    if (this.promise === p)
                                        this.error = er
                                });
                    }
                }
            }
        },
        render() {
            return (promiseNoData(this.promise, this.data, this.error) || <SearchResultsView searchResults={this.data} />);
        }
    }

    let searchQuery = "";
    let searchType = "";

    // assume a model prop
    return(
            <div class="flexParent">  
            
                <SearchFormView options={["starter", "main course", "dessert"]} 
                                onSearch={() => PromisePresenter.promise = DishSource.searchDishes({type: searchType, query: searchQuery}).
                                                then(result => {
                                                    PromisePresenter.data = result;
                                            PromisePresenter.render();
                                                    //Vue.render(promiseNoData(promise, data, error) || <SearchResultsView searchResults={data} />, document.getElementById("app"));
                                                }).catch(e => {
                                            PromisePresenter.error = {e};
                        console.error(PromisePresenter.error)
                    })}
            
                                onText={txt => searchQuery = txt}
                                onDishType={dishType => searchType = dishType }
                                />
            
                {<SearchResultsView searchResults={PromisePresenter.data}/>}
            </div>

            );



}