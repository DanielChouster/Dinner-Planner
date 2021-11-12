function DetailsView(props) {
    return (
        <div>


            <div class="detailsview">
                <div class="detailsviewbutton">

                    <br></br><br></br>
                    <button disabled={props.isDishInMenu} onClick={event => props.dishAdded()}>Add to menu!</button>
                    &nbsp;&nbsp;&nbsp;
                    <button >Cancel</button>
                </div>
                <h1>{props.dish.title}</h1>


                <div class="price">
                    Price : {props.dish.pricePerServing} <br></br>
                    For {props.people} guests : {(props.dish.pricePerServing * props.people).toFixed(2)}
                </div>

                <div>
                    <img src={props.dish.image} width="200" height="200" ></img>
                </div>


            </div>

            <div class="detailsview">
                <h2>Recipe</h2>
                <h3>Cooking time : {props.dish.readyInMinutes}&nbsp;min</h3>
                <div>
                    <h3>Ingredients</h3>
                    {props.dish.extendedIngredients.map(
                        function (opt) {
                            return (
                                <div>
                                    {opt.originalString}
                                </div>
                            )
                        }
                    )}


                </div>

                <h3>Instructions</h3>


                {props.dish.analyzedInstructions[0].steps.map(
                    function (opt) {
                        return (
                            <div>
                                {opt.number}.{opt.step}
                            </div>
                        )
                    }
                )}


            </div>
            <a href={props.dish.sourceUrl}>More information</a>
        </div>
    );
}
