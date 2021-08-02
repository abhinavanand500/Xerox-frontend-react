import axios from "axios";
const instanceApi = axios.create({
    baseURL: "http://9aabba8c2518.ngrok.io/api",
});
// instanceApi.interceptors.request.use(
//     async (config) => {
//         const token = await AsyncStorage.getItem("token");
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (err) => {
//         console.log("Here error");
//         return Promise.reject(err);
//     },
// );
export default instanceApi;
