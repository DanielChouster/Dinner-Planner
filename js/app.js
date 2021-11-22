function RenderTest() {
    console.log("Vue sub-component render test");
    return false;
}
function App(props) {
    window.location.hash ="";
    defaultRoute();
    
    return (
        <div class="flexParent">
            <div class="sidebarContent debug"><SidebarPresenter model={props.model} /></div>
            <div class="maincontent debug">
                <Show hash="#search"><SearchPresenter model={props.model} /></Show>
                <Show hash="#summary"><SummaryPresenter model={props.model} /></Show>
                <Show hash="#details"><DetailsPresenter model={props.model} /></Show>



            </div>
            <RenderTest />
        </div>
    );
}

function defaultRoute() {

    if (window.location.hash === "" || !["#search", "#summary", "#details"].includes(window.location.hash))
        window.location.hash = "#search";
    /*
    if (["#search", "#summary", "#details"].find((knownRoute) => knownRoute = window.location.hash)) window.location.hash = "#search";*/
}