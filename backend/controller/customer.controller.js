import Customer from "../model/customer.model.js";
import { APIError } from "../utils/ResponseAndError/ApiError.utils.js";
import { APIResponse } from "../utils/ResponseAndError/ApiResponse.utils.js";// statusCode, message, data, success(automatic)

export const createCustomer = async (req, res) => {
    try {
        //client have to send required data otherwise it wil produce error
        //have to implement here bulk update using csv also here, currently supporting one by one
        const customerData = req.body;
        const newCustomer = new Customer(customerData);
        await newCustomer.save();
        return new APIResponse(201, "Customer created successfully", newCustomer).send(res);
    } catch (error) {
      return new APIError(500, "Failed to create customer", error).send(res);
}
};

export const getCustomers = async(req, res)=>{
    try {
        const {page = 1 , limit = 10} = req.query;
        const offset = (page - 1)*limit;

        const customers = await Customer.find({}).skip(offset).limit(limit); 

        return new APIResponse(200, "Fetched all customers", customers).send(res); // have to check response 
        
    } catch (error) {
        return new APIError(500, "Failed to fetch the customers data", error).send(res); // have to check res
        
    }
}

//api/v1/customer/?CId_004
//doubt: for customer there is _id and CustomerId do i need here boolean check
export const getCustomersById = async(req, res)=>{
    try {
        const {customerId } = req.params;
        
        const customer = await Customer.find({customerId: customerId});
    

        if(!customer.length){
            return new APIResponse(404, `No customer found for this Id ${customerId}`).send(res); 
        }
        
        return new APIResponse(200, "Customer found", customer).send(res); 

        
    } catch (error) {
        
        return new APIError(500, "Failed to get Customer by given CustomerId", error).send(res);
    }
}

export const updateCustomer = async(req, res)=>{
    try {
        //have to discuss what we are allowing to update 
        
    } catch (error) {
        
    }
}

export const deleteCustomers = async(req, res)=>{
    try {
        const {customerId} = req.body;

        const customer = await Customer.find(customerId);

        if(!customer){
            return new APIResponse(404, "Customer not found").send(res);
        }

        const result = await Customer.findByIdAndDelete(customerId);

        return new APIResponse(200, `Customer with this Id: ${customerId} is deleted`, result).send(res); 


    } catch (error) {
        return new APIError(500, "Failed to delete customer", error).send(res);
        
    }
}