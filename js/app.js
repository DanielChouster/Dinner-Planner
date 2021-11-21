//App
function defaultRoute(){
    if(["#search", "#summary", "#details"].find((knownRoute)=>knownRoute = window.location.hash)) window.location.hash="#search";
}
function RenderTest() { console.log("Vue sub-component render test"); defaultRoute(); return false; }
function App(props) {
    window.addEventListener("hashchange", defaultRoute());
    return (
        <div class="flexParent">
            <div class="sidebarContent debug"><Show hash="#search"><SearchPresenter model={props.model} /></Show></div>
            <div class="maincontent debug"><Show hash="#details"><DetailsPresenter model={props.model} /></Show></div>
            <RenderTest />
        </div>
    );
}