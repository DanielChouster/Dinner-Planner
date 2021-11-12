function SummaryView(props) {
    return (  // a lonely return on a line returns undefined. Parentheses needed
        <div>
            <br></br>
            <div class="summaryview">
                <br></br>&#160;&#160;
                Summary for <span title="nr. guests">{props.persons}</span> guests:
                <br></br> <br></br>
            </div>
        </div>
    );
}
