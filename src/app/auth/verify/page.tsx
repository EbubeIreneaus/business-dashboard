"use client";
import { Button, Card, CardBody, CircularProgress } from "@nextui-org/react";
import React, { useContext, useState, useEffect } from "react";
import { AppBackendUrl } from "@/app/provider";
import { setCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";


function Verify() {
  const [countdown, setCountdown] = useState(0);
  const backendUrl = useContext(AppBackendUrl);
  const router = useRouter();

 
  const profileId = getCookie("profileId");

  const startCountdown = () => {
    let min = 60;
    let interval = setInterval(() => {
      setCountdown(min);
      if (min < 1) {
        clearInterval(interval);
      }
      min -= 1;
    }, 1000);
  };

  const resend_email = async () => {
    startCountdown();
    let req = await fetch(
      `${backendUrl}/auth/resend_verification_email/?id=${profileId}`,
      {
        method: "get",
        // headers: {
        //     'profileId': profileId
        // }
      },
    );
  };

  useEffect(() => {
    if (!getCookie('profileId')) {
      return router.push('/auth/verify')
    }
    resend_email();
  }, []);

  return (
    <>
      <div className="flex min-h-dvh w-full items-center justify-center">
        <Card className="w-full max-w-xl px-5 py-10" shadow="md">
          <CardBody className="flex w-full justify-center px-3">
            <h2 className="text-center text-2xl font-semibold">
              we have sent a verification link to your email address
            </h2>
            <div className="py-7">
              {countdown > 0 ? (
                <CircularProgress
                  label="try again after 60 seconds"
                  minValue={0}
                  maxValue={60}
                  size="lg"
                  value={countdown}
                  valueLabel={<h4>{countdown} sec</h4>}
                  showValueLabel={true}
                  className="mx-auto  w-fit"
                />
              ) : (
                <></>
              )}
            </div>
            <p className="text-center">
              Didn&rsquo;t recieve an email?{" "}
              <Button
                variant="light"
                color="secondary"
                onClick={() => resend_email()}
                isDisabled={countdown > 0}
              >
                resend email
              </Button>
            </p>
          </CardBody>
        </Card>
      </div>
    </>
  );
}

export default Verify;
