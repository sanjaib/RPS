const array1 = []
function addtodo(){
    let var1 = document.querySelector('.add')
    let name = var1.value

    array1.push(name)
    console.log(array1)

    var1.value=''
}