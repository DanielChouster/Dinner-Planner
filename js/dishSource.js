
const DishSource = {   // JS object creation literal
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",              // HTTP method
            "headers": {                  // HTTP headers
                'X-Mashape-Key': API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            }
        }).then(response => {
            if (!response.ok) { throw 'Error: ' + response.statusText; } //response.ok same as code 200. !response.ok anything else including 404
            else return response; //????? correct???? 
        })
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
