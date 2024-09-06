export function sideBarFunction (){
    
    function sidebarVidibilityFunction (){

        
        if (document.querySelector('.sidebar').classList.contains('sidebarOpen')){
            document.querySelector('.sidebar').classList.remove('sidebarOpen')
            document.getElementById('SelectedSidebarButton').style.backgroundColor = 'white'
        }
        else {
            document.querySelector('.sidebar').classList.add('sidebarOpen')
            document.getElementById('SelectedSidebarButton').style.backgroundColor = 'rgb(232, 232, 232)'
        }
     
    }
    document.querySelector('.Hamburger-menu').addEventListener('click' , () => {
        sidebarVidibilityFunction()
    })

}