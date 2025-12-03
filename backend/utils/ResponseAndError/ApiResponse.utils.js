class APIResponse {
    constructor(status, message = 'success', data = undefined) {
        this.status = status;
        this.data = data;
        this.message = message;
        this.success = status >= 200 && status < 300;
    }

    toJSON() {
        const response =  {
            status: this.status,
            message: this.message,
            success: this.success,
        };
        //sometime data is optional like 404, 403
        if(this.data!==undefined && this.data!==null){
            response.data = this.data;
        }

        return response;

    }

    send(res) {
        return res.status(this.status).json(this.toJSON());
    }
}

export { APIResponse };
