import User from "../model/user.model.js"
import { APIError } from "../utils/ResponseAndError/ApiError.utils.js";
import { APIResponse } from "../utils/ResponseAndError/ApiResponse.utils.js";

export const handleGoogleAuth = async(req, res)=>{
    try {
        //maintain user session here at own server level
    //callback after user give concent and google will give me token here i have to verify it and proceed further

        // req.session.user = {
        //     id:user._id,
        //     email: user.email,
        //     name:user.name
        // }

        console.log(req);

        //after receiving google auth token, redirecting to frontend url
        res.redirect(`${process.env.FRONTEND_URL}/auth-success`); 
    } catch (error) {
        console.log(error);
        res.redirect(`${process.env.FRONTEND_URL}/login?error=google_failed`)

        
    }
}


export const registerUser = async(req, res)=>{
    try {

        console.log(req.body);
        const {name, email, password, phone, website, profileImageUrl, companyName, GSTNumber, address, timezone, language, subscriptionPlan} = req.body;

        if(!email || !name || !password ){
            return new APIResponse(400, "Please enter required data").send(res);
            // return next(new APIError(400, "Please enter required filed"));
        }

        
        const existingUser = await User.findOne({email});

        console.log(existingUser);
        
        if(existingUser){
            return new APIResponse(400, "Email already registered. Please login").send(res);
            
        }

        const user = await User.create({
            name, email, password, phone, website, profileImageUrl, GSTNumber, companyName, address, timezone, language, subscriptionPlan
        });

        const createdUser = user.toObject();
        delete createdUser.password;

        return new APIResponse(201, "User Registered successfully", {user: createdUser}).send(res);
        
        
    } catch (error) {

        console.log(error);
        
        return new APIError(500, "Failed to create customer", error).send(res);
        
    }
}

export const loginUser = async(req, res)=>{
    try {
        const { email, password:enteredPassword } = req.body;

        const user = await User.findOne({email}).select("+password");

        if(!user){
          return new APIResponse(401, "Invalide credentials").send(res);
        }
        
        const isMatched = await user.comparePassword(enteredPassword); 
        
        if(!isMatched){
            return new APIResponse(401, "Invalide credentials").send(res);
        }

        //automatically manage by npm package
        //storing user information in session
        req.session.user = {
            id:user._id,
            email: user.email,
            name:user.name
        }
       
        return new APIResponse(200, "Login Successfull", {user:req.session.user}).send(res); //verify the data 
        
} catch (error) {
    console.log(error);

   return new APIError(500, "Failed to Login", error).send(res);

}
}

export const logoutUser = async(req, res)=>{
    // have to free the user session

    
}

export const myProfile = async (req, res)=>{
    try {
        const {id} = req.session.user;
    
        const user = await User.findOne({_id: id});

       
        return new APIResponse(200, "your profile", {user}).send(res);

    } catch (error) {
        console.log(error);

        return new APIError(500, "Failed to fetch my profile", error).send(res);
    }
}