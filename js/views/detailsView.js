function DetailsView(props) {
    //keys
    let k1 = 0;
    let k2 = 0;

    let step_array = [];
    if (props.dish.analyzedInstructions.length !== 0)
        step_array = props.dish.analyzedInstructions[0].steps;

    return (
        <div>


            <div class="detailsview">
                <div class="detailsviewbutton">

                    <br></br><br></br>
<<<<<<< HEAD
                    <button disabled={props.isDishInMenu} onClick={event => { props.dishAdded(); window.location.hash = "#search"; }}>Add to menu!</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={e => window.location.hash = "#search"}>Cancel</button>
=======
                    <button disabled={props.isDishInMenu} onClick={event => {props.dishAdded();window.location.hash="#search";}}>Add to menu!</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={e=>window.location.hash="#search"}>Cancel</button>
>>>>>>> c21b264362632093ee4f874c48d98473c8db209c
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
                                <div key={k1++}>
                                    {opt.originalString}
                                </div>
                            )
                        }
                    )}


                </div>

                <h3>Instructions</h3>


                {step_array.map(
                    function (opt) {
                        return (
                            <div key={k2++}>
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