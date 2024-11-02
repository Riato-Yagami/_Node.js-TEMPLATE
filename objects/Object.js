class Object {
    constructor(arg) {
        this.arg = arg
    }
}

Object.prototype.set = function(arg){
    this.arg = arg
}

Object.prototype.get = function(){
    return arg
}