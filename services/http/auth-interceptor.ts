'use client';
import { http } from "./client";

http.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
})