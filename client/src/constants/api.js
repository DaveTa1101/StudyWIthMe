import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:8000",
    });

export const loginApi = async (user) => await API.post("/login", { email: user.email, password: user.password });
export const signupApi = async (user) => await API.post("/signup", { email: user.email, password: user.password, username: user.username });
export const getProjects = async () => await API.get("/projects");

export const getCourses = async () => await API.get("/courses");
export const getNews = async () => await API.get("/news");
export const getLectures = async () => await API.get("/lectures");


