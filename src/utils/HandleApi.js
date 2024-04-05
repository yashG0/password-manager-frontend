import axios from "axios";

const baseURL = "https://password-manageer-backend-production.up.railway.app/api/forms";

const getAllPass = (setForm) => {
    axios.get(baseURL, {
        withCredentials: true // Include credentials in the request
    }).then((res) => {
        // console.log("MY DATA :", res.data);
        setForm(res.data.data); // Update state with data from the response
    }).catch((err) => {
        console.error("Failed to fetch data! ,", err.message);
    })
}


const setPass = (data) => {
    axios.post(`${baseURL}/forms`, data).then((res) => {
        console.log("data sent successfully: ", res);
    }).catch((err) => {
        console.log("Failed to save data into database!");
    })
}

const updatePass = (id, newData) => {
    axios.put(`${baseURL}/forms/${id}`, newData)
        .then((res) => {
            console.log("Update successfully",res);
        })
        .catch((err) => {
            console.log("Failed to update data in the database!");
        });
}

const deletePass = (id) => {
    axios.delete(`${baseURL}/forms/${id}`)
        .then((res) => {
            console.log("delete successfully",res);
        })
        .catch((err) => {
            console.log("Failed to delete data from the database!");
        });
};


export { getAllPass, setPass, updatePass, deletePass };