const router = require("express").Router();
const {validationRules, validate} = require("../validations/user-validator");
const { login, register, changePassword } = require("../controllers/auth-controller");
const { ensureAuthenticated } = require("../middleware/auth-middleware");
const { validationRules: passwordValidationRules, validate: passwordValidate } = require("../validations/change-password-validator");
 
router.post('/login', async (req, res) => {
    /*  #swagger.tags = ['Auth']
        #swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/LoginModel" }
    } */
    await login(req.body, res);
});
 
router.post('/register', validationRules(), validate, async (req, res) => {
    /*  #swagger.tags = ['Auth']
        #swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/RegisterModel" }
    } */
 
    await register(req.body, "user", res);
});
 
router.post("/changePassword", ensureAuthenticated, passwordValidationRules(), passwordValidate, async (req, res) => {   
    /*  #swagger.tags = ['Auth']
        #swagger.security = [{
        "Authorization": []
        }]
        #swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: "#/definitions/ChangePasswordModel" }
    } */  
     
    await changePassword(req, res);
});
 
module.exports = router;