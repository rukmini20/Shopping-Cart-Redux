import { baseURL, } from "../urls";
import axios from "axios";

const api = axios.create({ baseURL });

export default api;
