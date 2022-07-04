import { useRef, useState, useEffect } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import {
  EMAIL_REGEX,
  NAME_LASTNAME_REGEX,
  PHONE_REGEX,
  PWD_REGEX,
} from "../../constants/regex";
import Input from "./Input";

const ErrorMsg = ({ name, err }) => (
  <ErrorMessage
    name={name}
    component={() => <p className="text-xs text-red-500">{err}</p>}
  />
);

export default function Register() {
  return (
    <section className="space-y-4 mt-10 mb-10 h-screen">
      <h1 className="mb-3 text-2xl font-bold">Create your profile</h1>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          password: "",
          address: "",
          age: "",
          phone: "",
        }}
        validate={({
          name,
          lastname,
          email,
          password,
          address,
          age,
          phone,
        }) => {
          let errors = {};

          if (!email) errors.email = "Please write your email";
          else if (!EMAIL_REGEX.test(email))
            errors.email = `Your email only can contain letter, numbers, ., _, -`;

          if (!name) errors.name = "Please write your name";
          else if (!NAME_LASTNAME_REGEX.test(name))
            errors.name = "Your name only can contain letters";

          if (!lastname) errors.lastname = "Please write your lastname";
          else if (!NAME_LASTNAME_REGEX.test(lastname))
            errors.lastname = "Your lastname only can contain letters";

          if (!password) errors.password = "Please write your password";
          else if (!PWD_REGEX.test(password))
            errors.password =
              "La contraseña debe contener al menos un numero, una mayuscula, y un caracter especial";

          if (!address) errors.address = "Please write your address";

          if (!age) errors.age = "Please write your age";

          if (!phone) errors.phone = "Please write your phone";
          else if (!PHONE_REGEX.test(phone))
            erros.phone = "Please write a valid number phone";

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          resetForm();
          console.log("form send");
        }}
      >
        {({ errors }) => (
          <Form>
            <Input placeholder="Your Name" name="name" />
            <ErrorMsg name="name" err={errors.name} />

            <Input placeholder="Your Lastname" name="lastname" />
            <ErrorMsg name="lastname" err={errors.lastname} />

            <Input type="email" placeholder="Your Email" name="email" />
            <ErrorMsg name="email" err={errors.email} />

            <Input
              type="password"
              placeholder="Your Password"
              name="password"
            />
            <ErrorMsg name="password" err={errors.password} />

            <Input placeholder="Your Address" name="address" />
            <ErrorMsg name="address" err={errors.address} />

            <Input placeholder="Your Age" name="age" />
            <ErrorMsg name="age" err={errors.age} />

            <Input placeholder="Your Phone" name="phone" />
            <ErrorMsg name="phone" err={errors.phone} />

            <button
              type="submit"
              className="w-full my-2 rounded-2xl border-b-4 border-b-green-600 bg-green-500 py-3 font-bold text-white hover:bg-green-400 active:translate-y-[0.125rem] active:border-b-green-400"
            >
              CREATE ACCOUNT
            </button>
          </Form>
        )}
      </Formik>

      <div className="flex items-center space-x-4">
        <hr className="w-full border border-gray-300" />
      </div>

      <footer>
        <div className="mt-8 text-sm text-gray-400">
          By signing in to Frozt you agree to our{" "}
          <a href="#" className="font-medium text-gray-500">
            Terms
          </a>{" "}
          and{" "}
          <a href="#" className="font-medium text-gray-500">
            Privacy Policy
          </a>
          .
        </div>
      </footer>
    </section>
  );
}
