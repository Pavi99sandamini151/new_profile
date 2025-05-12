import axios, { AxiosResponse } from "axios";

if(import.meta.env.VITE_REACT_APP_SERVER_URL){
    axios.defaults.baseURL = import.meta.env.VITE_REACT_APP_SERVER_URL;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    axios.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
}

axios.interceptors.response.use(res=>res, err=>{
    return err.response;
});

export interface contactUsProps {
    email: string
    firstName: string
    lastName: string
    description: string
}


export const sendContactEmail = async (values: contactUsProps):Promise<AxiosResponse> => {
    return axios.post(`/api/public/v1/contactEmail`, values);
}