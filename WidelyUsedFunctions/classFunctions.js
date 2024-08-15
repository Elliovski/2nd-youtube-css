export function ClassAdderAndRemoverFunction (RequestedClass , ClassAddedAndRemoved){
    if (document.querySelector(RequestedClass).classList.contains(ClassAddedAndRemoved)){
        document.querySelector(RequestedClass).classList.remove(ClassAddedAndRemoved)    
    }
    else {
        document.querySelector(RequestedClass).classList.add(ClassAddedAndRemoved)
    }
    console.log(document.querySelector(RequestedClass).classList)
    console.log("ClassAdderAndRemoverFunction working")
}
export function ClassAdder (RequestedClass , ClassAddedAndRemoved){
        document.querySelector(RequestedClass).classList.add(ClassAddedAndRemoved)
    console.log(document.querySelector(RequestedClass).classList)
    console.log("ClassAdderAndRemoverFunction working")
}

export function ClassRemover (RequestedClass , ClassAddedAndRemoved){
        document.querySelector(RequestedClass).classList.remove(ClassAddedAndRemoved)
    console.log(document.querySelector(RequestedClass).classList)
    console.log("ClassAdderAndRemoverFunction working")
}
