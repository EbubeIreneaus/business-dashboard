"use client";
import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Input,
  Select,
  SelectSection,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  RadioGroup,
  Radio,
  Checkbox,
  Button,
} from "@nextui-org/react";
import { Countries } from "@/types/country";
import { ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { AppBackendUrl } from "@/app/provider";
import { AutoComplete } from "primereact/autocomplete";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

const yourPositionInCompany: { label: string; value: string }[] = [
  {
    label: "Chief Executive Officer",
    value: "CEO",
  },
  {
    label: "Manager",
    value: "manager",
  },
  {
    label: "Director",
    value: "director",
  },
  { label: "Accountant", value: "accountant" },
  { label: "Tressurer", value: "tressurer" },
  {
    label: "Other",
    value: "other",
  },
];

function SignUp() {
  const [cpass, setCpass] = useState("");
  const [cpassErr, setCpassErr] = useState<null | string>(null);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);

  const backendUrl = useContext(AppBackendUrl);
  const router = useRouter()

  const validate = (values: any) => {
    const errors: any = {};

    // if(values.password == cpass){
    //   setCpassErr(null)
    // }else{
    //   errors.password = 'password does not match'
    //   setCpassErr('password does not match')
    // }

    if (!values.terms) {
      errors.terms = "you must agree to our terms and policies";
    }

    return errors;
  };

  const formData = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      country: "Afghanistan",
      address: "",
      gender: "",
      password: "",
      position: "",
      terms: "",
    },
    validate,
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(100, "Firstname too long")
        .required("Required"),
      lastname: Yup.string().max(100, "Lastname too long").required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phone: Yup.string().max(100, "Lastname too long").required("Required"),
      country: Yup.string().max(100, "Lastname too long").required("Required"),
      address: Yup.string().max(100, "Lastname too long").required("Required"),
      gender: Yup.string().required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "password must be 6 characters or longer"),
      terms: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setFormIsLoading(true);

      try {
        const req = await fetch(`${backendUrl}/auth/`, {
          method: "post",
          body: JSON.stringify(values),
        });

        let res = await req.json();

        if (res.status == "success") {
          setCookie('profileId', res.profileId)
          router.push('/auth/verify')
          setFormIsLoading(false);
        }

        if (res.status == "failed") {
          if(res.status.code == "email exist"){
            formData.errors.email = "Email already taken"
          }else {
            alert("Error registering new user at the moment")
          }
        }
        if(!res.status){
          alert("could not register user");
          setFormIsLoading(false);
        }
      } catch (error) {
        throw new Error("Unkown server error, please try again later");
      }
    },
  });

  useEffect(() => {}, []);
  return (
    <>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto grid w-full gap-2 rounded-lg bg-white px-5 py-10 shadow-lg sm:px-8 lg:grid-cols-12 lg:px-12 xl:px-16">
          <Image
            src="/images/auth/bg-signup.jpg"
            alt="successful bussiness man Image by Freepik"
            width={300}
            height={500}
            className="col-span-5 mx-auto hidden h-full w-full object-cover lg:block"
          />

          <form
            className="col-span-7 px-12"
            onSubmit={formData.handleSubmit}
          >
            <h2 className="py-5 text-3xl font-semibold">Regiteration Form</h2>
            <div className="grid w-full gap-x-3 gap-y-5 md:grid-cols-2 ">
              <Input
                id="firstname"
                type="text"
                isRequired
                label="Firstname"
                variant="bordered"
                className=""
                {...formData.getFieldProps("firstname")}
                isInvalid={
                  formData.touched.firstname && formData.errors.firstname
                    ? true
                    : false
                }
                errorMessage={formData.errors.firstname}
              />
              <Input
                id="lastname"
                type="text"
                isRequired
                label="Lastname"
                variant="bordered"
                className=""
                {...formData.getFieldProps("lastname")}
                isInvalid={
                  formData.touched.lastname && formData.errors.lastname
                    ? true
                    : false
                }
                errorMessage={formData.errors.lastname}
              />
              <Input
                id="email"
                type="email"
                isRequired
                label="Email"
                variant="bordered"
                className=""
                {...formData.getFieldProps("email")}
                isInvalid={
                  formData.touched.email && formData.errors.email ? true : false
                }
                errorMessage={formData.errors.email}
              />
              <Input
                id="phone"
                type="text"
                isRequired
                label="Phone"
                variant="bordered"
                className=""
                {...formData.getFieldProps("phone")}
                isInvalid={
                  formData.touched.phone && formData.errors.phone ? true : false
                }
                errorMessage={formData.errors.phone}
              />
              <Input
                id="address"
                isRequired
                type="text"
                label="Address"
                variant="bordered"
                className="col-span-2"
                {...formData.getFieldProps("address")}
                isInvalid={
                  formData.touched.address && formData.errors.address
                    ? true
                    : false
                }
                errorMessage={formData.errors.address}
              />
              <select
                id="country"
                {...formData.getFieldProps("country")}
                className="h-full w-full appearance-none rounded-lg border-2 border-slate-200 bg-transparent px-3 py-2.5 shadow shadow-slate-200 outline-none"
              >
                {Countries.map((country) => (
                  <option key={country.code} value={country.name}>
                    {country.name}
                  </option>
                ))}
              </select>
              <Select
                label="position"
                isRequired
                variant="bordered"
                items={yourPositionInCompany}
                id="position"
                {...formData.getFieldProps("position")}
                isInvalid={
                  formData.touched.position && formData.errors.position
                    ? true
                    : false
                }
                errorMessage={formData.errors.position}
              >
                {yourPositionInCompany.map((pos) => (
                  <SelectItem key={pos.label} value={pos.value}>
                    {pos.label}
                  </SelectItem>
                ))}
              </Select>

              <RadioGroup
                id="gender"
                orientation="horizontal"
                defaultValue="male"
                label="Gender"
                className="col-span-2"
                {...formData.getFieldProps("gender")}
                isInvalid={
                  formData.touched.gender && formData.errors.gender
                    ? true
                    : false
                }
                errorMessage={formData.errors.gender}
                size="md"
              >
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
                <Radio value="other">Prefer not to say</Radio>
              </RadioGroup>

              <Input
                id="password"
                isRequired
                type="password"
                variant="bordered"
                label="password"
                className=""
                {...formData.getFieldProps("password")}
                isInvalid={
                  formData.touched.password && formData.errors.password
                    ? true
                    : false
                }
                errorMessage={formData.errors.password}
              />
              <Input
                isRequired
                type="password"
                variant="bordered"
                label="confirm password"
                className=""
                isInvalid={cpassErr ? true : false}
                errorMessage={cpassErr}
                value={cpass}
                onChange={(e) => setCpass(e.target.value)}
              />
              <Checkbox
                size="sm"
                className="col-span-2 text-sm"
                isRequired
                id="terms"
                {...formData.getFieldProps("terms")}
                isInvalid={formData.errors.terms ? true : false}
              >
                By clicking submit, you have agree to our terms and condition
              </Checkbox>
            </div>
            <div className="mt-7 w-full border-spacing-8">
              <Button
                isLoading={formIsLoading}
                variant="bordered"
                type="submit"
                color="success"
                className="px-12"
              >
                sign me up
              </Button>

              <p className=" my-5 text-center">
                Already have an account?{" "}
                <Link href="/auth/signin" className="text-orange-400">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
