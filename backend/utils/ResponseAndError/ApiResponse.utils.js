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
        if (this.data === undefined || this.data === null) {
            return response;
        }

        if (typeof this.data === "object" && !Array.isArray(this.data)) {
            const keys = Object.keys(this.data);

            if (keys.length > 1) {
                Object.assign(response, this.data); // spread multiple keys
            } 
            else if (keys.length === 1 && this.data.constructor === Object) {
                Object.assign(response, this.data);
            } 
            else {
                response.data = this.data;
            }
        } 
        else {
            response.data = this.data;
        }

        return response;

    }

    send(res) {
        return res.status(this.status).json(this.toJSON());
    }
}

export { APIResponse };
