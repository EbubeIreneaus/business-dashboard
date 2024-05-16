"use client";
import { useParams, useSearchParams } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { AppBackendUrl } from "@/app/provider";
import { useRouter } from "next/navigation";

function VerifyMe() {
  const [msg, setMsg] = useState("verifying! please wait....");
  let { id } = useParams();
  let query = useSearchParams();
  let backendUrl = useContext(AppBackendUrl);
  const router = useRouter();

  const verifyUser = async () => {
    try {
      let req = await fetch(`${backendUrl}/auth/verify_user/`, {
        method: "post",
        body: JSON.stringify({ profileId: id, key: query.get("key")?.trim() }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      let res = await req.json();
      if (!res.status) {
        return router.push("/auth/signin");
      }

      if (res.status == "failed") {
        if (res.code === "time_exceeded") {
          setMsg("Your time have expired!! Redirecting......");
        } else {
          setMsg("Could not verify you at the moment!! Redirecting......");
        }
        return router.push("/auth/signin");
      }

      if (res.status == "success") {
        setMsg("Your account is now verified.");
      }
    } catch (error) {
      throw new Error("Error occured");
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div className="min-h-screen ">
      <h2 className="p-10 text-center text-2xl font-semibold">{msg}</h2>
    </div>
  );
}

export default VerifyMe;
