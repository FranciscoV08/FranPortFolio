'use client'
// import Image from "next/image";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {

  
  const router = useRouter()

  useEffect(() => {
    router.push('/dashboard')
    
  }, [])
  

  return null
}
