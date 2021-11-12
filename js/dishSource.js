
const DishSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            }
        }).then(response => {
            if (!response.ok) { throw 'Error: ' + response.statusText; }
            return response; //????? correct????

        /*TODO check response and throw an error if not OK (compose error msg from  
        response.statusText), 
Otherwise if response contains 200/OK just return response */ })
            // from HTTP response headers to HTTP response data
            .then(response => response.json());
    }
    ,   // comma between object entries
    searchDishes(params) {
        return DishSource.apiCall("/recipes/complexSearch?" + new URLSearchParams(params))
            .then(data => { return { data } });
    }

    ,
    getDishDetails(id) { return DishSource.apiCall("/recipes/" + id + "/information?"); }


};
