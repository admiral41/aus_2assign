import axios from "axios";
const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export const bookingApi= (data) => Api.post("/api/appointments/book", data);
