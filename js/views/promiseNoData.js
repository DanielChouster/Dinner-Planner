function promiseNoData(promise, data, error){
    //Are the three parameters truthy or falsy
    /*if(promise === null) return <span>no data</span>;
    else if(typeof data === "undefined") return <img src="http://www.csc.kth.se/~cristi/loading.gif"></img>;
    else if(data === null) return <span>{error}</span>;
    else return false; */
    if(promise && data && !error) return false;
    else{
        return ((error && <span>{error}</span>)
        || (promise && <img src="http://www.csc.kth.se/~cristi/loading.gif"/>) 
        || (data || <span>no data</span>));
    }
}
