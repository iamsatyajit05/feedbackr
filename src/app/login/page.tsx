'use client';
import { createGoogleAuthorizeUrl } from "@/actions/auth";
import { useEffect } from "react";

export default function LoginRedirect() {
    const handleGoogelLogin = async () => {
        const res = await createGoogleAuthorizeUrl();
        if (res.error) {
            return <p>Oops! something went wrong!</p>
        } else if (res.success) {
            window.location.href = res.data;
        }
    }

    useEffect(() => {
        handleGoogelLogin()
    }, [])

    return <p>Wait a bit buddy :)</p>
}