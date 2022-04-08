import axios from "axios";
import aspida from "@aspida/axios";
import api from "../api/$api";

export const apiClient = api(aspida(axios, { baseURL: process.env.CMS_URL }));