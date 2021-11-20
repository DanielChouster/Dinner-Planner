//App
function RenderTest() { console.log("Vue sub-component render test"); return false; }
function App(props) {
    return (
        <div class="flexParent">
            <div class="sidebarContent debug"><SidebarPresenter model={props.model} /></div>
            <div class="maincontent debug"><SearchPresenter model={props.model} /></div>
            <RenderTest />
        </div>
    );
}