function SummaryView(props) {
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <br></br>
            <div style={{ border: "black", borderWidth: "1px", borderStyle: "solid", width: "200" }}>
                <br></br>&#160;&#160;
                Summary for <span title="nr. guests">{props.persons}</span> guests:
                <br></br> <br></br>
            </div>
        </div>
    );
}
