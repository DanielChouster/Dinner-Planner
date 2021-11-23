// new file js/views/sidebarView.js
function SidebarView(props)
    {
        var b = false;
        if (props.guests < 2)
            {
                b = true;
            }

        if (typeof props.dishes === "undefined")
            {
                props.dishes = [];
            }

        var totalPrice = props.dishes.reduce(reducer,0); //call function reducer, start from 0
        function reducer(total, dish) 
        {
        return total + props.guests * dish.pricePerServing;
        }

        let k1=0;

        return (
                <div className="sidebar">
                    <p>Guests</p>
                    <button disabled={b} onClick={e => props.setGuests(props.guests - 1)}>–</button>
                    <span>&nbsp;{props.guests}&nbsp;</span>
                    <button onClick={e => props.setGuests(props.guests + 1)}>+</button>
                    
                    <table>
                        <tbody>
                           {[...props.dishes].sort(compareDishes).map(
                            function (opt)
                                {
                                    return (
                                                    <tr key={k1++}>
                                                        <td>
                                                            <button onClick={e => props.removeDish(opt)}>X</button>
                                                        </td>
                                                        <td>
                                                            <a href="#details" onClick={e => {e.preventDefault();props.dishChoice(opt.id);window.location.hash="#details";}}> {opt.title}</a>
                                                        </td>
                                                        <td>
                                                            {dishType(opt.dishTypes)}
                                                        </td>
                                                        <td className="price">
                                                           {opt.pricePerServing}
                                                        </td>
                                                    </tr>

                                            );
                                }
                            )}
                            <tr>
                                <td>
                
                                </td>
                                <td>
                                    Total
                                </td>
                                <td>
                
                                </td>
                                <td className="price">
                                    {totalPrice.toFixed(2)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                
                </div>
                );
    }


const types = ["starter", "main course", "dessert"];
function dishType(dishTypes)
    {
        if (dishTypes)
            {
                const tp = dishTypes.filter(value => types.includes(value));
                if (tp.length)
                    return tp[0];
            }
        return "";
    }


function compareDishes(a, b)
    {
        let ai = dishType(a.dishTypes);
        let bi = dishType(b.dishTypes);

        if (ai < bi)
            return 1;
        if (ai > bi)
            return -1;
        if (ai === bi)
            {
                ai = a.title;
                bi = b.title;
                if (ai < bi)
                    return -1;
                if (ai > bi)
                    return 1;
                return 0;
            }
    }