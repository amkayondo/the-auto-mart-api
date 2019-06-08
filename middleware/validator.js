class Validator{
    constructor (){
        this.not_empty = (req, next) =>{
            if(req === ""){
                res.json({
                    status: 400,
                    massage: "A field is missing"
                });
            }
        }
    }
}


module.exports = Validator;
