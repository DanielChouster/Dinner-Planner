// new file js/views/sidebarView.js
function SidebarView(props) {
    var b = false;
    if (props.guests < 2) { b = true };
    if (typeof props.dishes === "undefined") {
        props.dishes = [];
    }
    console.log("TEST!!!!!!!!!!!!!!!!!!!!!" + props.dishes);
    var totalPrice = 0;

    return (
        <div /*style={{ border: "black", borderWidth: "1px", borderStyle: "solid", width: "200" }}*/>
            <br></br>  &#160;&#160; &#160; &#160; &#160; &#160;
            <button disabled={b} onClick={e => props.setGuests(props.guests - 1)}>–</button>
            <span>&#160; {props.guests}&#160; </span>
            <button onClick={e => props.setGuests(props.guests + 1)}>+</button>
            <br></br><br></br>
            <table>
                <tbody>
                    {props.dishes.map(
                        function (opt) {
                            return (
                            <tr>
                                <td>
                                    <button>X</button>
                                </td>
                                <td>
                                    {opt.title}
                                </td>
                                <td>
                                    {opt.dishTypes}
                                </td>
                                <td>
                                    {opt.pricePerServing}

                                </td>
                            </tr>

                            )
                        }
                    )};
                    <tr>
                        <td>

                        </td>
                        <td>
                            Total
                        </td>
                        <td>

                        </td>
                        <td>
                            {totalPrice}
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

/*TABLE
                         TBODY
               TR           (repeated)
            TD
                BUTTON
                    x
                TD
                dishName
            TD
                dishType
            TD
                dishPrice
                TR
            TD (empty)
            TD
                Total:
            TD (empty)
            TD
                totalPrice
*/


/*<table>
                <tbody>
                    {props.dishes.map(
                        function (opt)
                        {
                            <tr>
                                <TD>
                                    <button>X</button>
                                </TD>
                            </tr>

                        }
                        )};
                </tbody>
            </table>
 */