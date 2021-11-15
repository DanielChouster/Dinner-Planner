function SummaryView(props) {
    //console.log("write " + props);
    if (typeof props.ingredients === "undefined")
        props.ingredients = [];
    return (// a lonely return on a line returns undefined. Parentheses needed
        <div class="summaryview">
            <br></br>
            <div>
                <br></br>&#160;&#160;
                Dinner for <span title="nr. guests">{props.persons}</span> guests:
                <br></br> <br></br>
            </div>
            <div>
                <table class="b">

                    <thead>
                        <tr>

                            <td class="b">
                                Ingredient
                            </td>
                            <td class="b">
                                Aisle
                            </td>
                            <td class="b">
                                Quantity
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {props.ingredients.sort(compareIngredients).map(
                            function (opt) {
                                return (

                                    <tr>

                                        <td class="b">
                                            {opt.name}
                                        </td>
                                        <td class="b">
                                            {opt.aisle}
                                        </td>
                                        <td class="b">
                                            {(opt.amount * props.persons).toFixed(1)}&#160;{opt.unit}
                                        </td>
                                    </tr>

                                )
                            }
                        )}
                    </tbody>
                </table>

            </div>

        </div>
    );
}


function getIngredients(props) {
    return (Ingredients(props));
}


function Ingredients(dishArr) {
    const result = {}; // object used as mapping
    dishArr.forEach(d => d.extendedIngredients.forEach(i => {
        if (!result[i.id])
            // ingredient not taken into account yet
            // associate the ingredient with the ID
            // {...i } is a *copy* of the ingredient (spread syntax)
            // we copy just in case, as we’ll change the object below
            result[i.id] = { ...i };
        else {
            /*TODO: add i.amount to the amount of result[i.id]*/
            result[i.id].amount += i.amount;
        }
    }))
    return Object.values(result);
}

// summaryView.js, we place the function in the view file since it’s only used there.
function compareIngredients(a, b) {
    if (a.aisle < b.aisle)
        return -1;
    // TODO return 1 if a.aisle > b.aisle. Note: not >= !!!
    if (a.aisle > b.aisle)
        return 1;

    // At this point, we know that a.aisle===b.aisle
    // TODO compare a.name with b.name, return 1 or -1 based on that
    if (a.name < b.name)
        return -1;

    if (a.name > b.name)
        return 1;


    /* if a.name===b.name throw an error because 
       ingredient names are not unique as specified, so 
       there’s a bug */
    if (a.name === b.name)
        throw 'ERROR: ingredient names are not unique';

}

