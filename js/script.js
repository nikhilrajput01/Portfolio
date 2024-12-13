
/////////////// find car ////////////////////////
document.querySelectorAll('.find-car-box-section').forEach((find) => {
    find.addEventListener('mouseover',function(){
        const select=this.querySelectorAll('.find-car-icon span')
        select.forEach((apply) =>{
            apply.style.color='#F4F5F8'
        })
    })
    find.addEventListener('mouseout',function(){
        const remove= this.querySelectorAll('.find-car-icon span')
        remove.forEach((out) => {
            
            out.style.color=''
        });
    })
});
/////////////// find car ////////////////////////