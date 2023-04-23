import joi from "joi"

const CardValidations = (validation) => {
    const schema = joi.object({

       cardNo : joi.string().min(16).max(16).required(),
       cardName : joi.string().min(5).max(6).required(),
       expireDate : joi.string().min(5).max(5).required(),
       cvv : joi.string().min(3).max(3).required(),

       })

       return schema.validate(validation)
}

        
export default CardValidations