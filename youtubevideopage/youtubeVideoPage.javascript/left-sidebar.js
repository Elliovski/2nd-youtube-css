export function leftSidebarInterreact (){
    
    console.log("leftSidebarInterreact")
    function sidebarVidibilityFunction (){
        if (document.querySelector('.invisible-sidebar').classList.contains('sidebar-visibile')){
            document.querySelector('.invisible-sidebar').classList.remove('sidebar-visibile')    
        }
        else {
            document.querySelector('.invisible-sidebar').classList.add('sidebar-visibile')
        }
        console.log(document.querySelector('.invisible-sidebar').classList)
    }

    document.querySelector('.js-sidebar').addEventListener('click' , () => {
        sidebarVidibilityFunction()
        if (document.querySelector('.Sidebar').classList.contains('Sidebar-wide')){
            document.querySelector('.Sidebar').classList.remove('Sidebar-wide')
        }
        else {
            document.querySelector('.Sidebar').classList.add('Sidebar-wide')
        }
    })

}