import axios from "./../api/axios";


export const postContact = (contactData) => axios.post("/contact", contactData);

