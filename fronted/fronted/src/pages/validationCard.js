import joi from "joi"

const CardValidations = (validation) => {
    const schema = joi.object({

       cardName : joi.string().min(3).max(30).required(),
       cardNo : joi.string().min(16).max(16).required(),
       expireDate : joi.string().min(5).max(5).required(),
       cvv : joi.string().min(3).max(3).required(),

       })

       return schema.validate(validation)
}

        
export default CardValidations