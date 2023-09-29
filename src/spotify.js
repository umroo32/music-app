import axios from 'axios'


const authEndPoint = "https://accounts.spotify.com/authorize?"
const clientId = '3bfc4b683937484ea38ecb98d93957c9'
const redirectUrl = "http://localhost:5173"
const scopes = ["user-library-read","playlsit-read-private"]

export const loginEndpoint = `${authEndPoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apliClient = axios.create(
    {
        baseURL: "https://api.spotify.com/v1/", 
    }
);

export const setClientTOken = (token) =>{
    apliClient.interceptors.request.use(async (config)=>{
        config.headers.Authorization = "Bearer " + token;
        return config;
    })
}
export default apliClient