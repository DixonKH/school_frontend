'use client';
import axios from "axios";

console.log(".env NEXT_PUBLIC_API_URL: ", process.env.NEXT_PUBLIC_API_URL);

export const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true
})