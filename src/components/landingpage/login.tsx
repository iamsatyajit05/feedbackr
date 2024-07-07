'use client';
import { createGoogleAuthorizeUrl } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import toast from "react-hot-toast";

export default function LoginButton() {
  const handleGoogelLogin = async () => {
    const res = await createGoogleAuthorizeUrl();
    if (res.error) {
      toast.error('Oops! something went wrong!')
    } else if (res.success) {
      window.location.href = res.data;
    }
  }

  return <Button onClick={handleGoogelLogin}>Sign in with Google</Button>;
}