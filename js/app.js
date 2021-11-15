
<div>
<script src="js/views/summaryView.js" type="text/jsx"></script>
    <script src="js/views/sidebarView.js" type="text/jsx"></script>
    <script src="js/views/searchView.js" type="text/jsx"></script>
    <script src="js/DinnerModel.js" type="text/jsx"></script>
    <script src="vuejs/sidebarPresenter.js" type="text/jsx"></script>
    <script src="vuejs/summaryPresenter.js" type="text/jsx"></script>
</div>


function RenderTest() { console.log("Vue sub-component render test"); return false; }
function App(props) {
    return (
        <div class="flexParent">
            <div class="sidebar debug"><SidebarPresenter model={props.model} /></div>
            <div class="maincontent debug"><SummaryPresenter model={props.model} /></div>
            <RenderTest />
        </div>
    );
}
