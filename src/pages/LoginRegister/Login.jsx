import { Formik, Form, ErrorMessage } from "formik";
import { Link, useNavigate, useLocation } from "react-router-dom"
import useAuth from '../../hooks/useAuth'
import Input from "./Input";
import { EMAIL_REGEX } from "../../constants/regex";
import axios from '../../api/axios'

const LOGIN_URL = '/login'

const ErrorMsg = ({ name, err }) => (
  <ErrorMessage
    name={name}
    component={() => <p className="text-xs text-red-500">{err}</p>}
  />
);

export default function Login() {
  const { setAuth } = useAuth();

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  return (
    <div className="space-y-4">
      <h1 className="mb-3 text-2xl font-bold">Log in</h1>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validate={({ email, password }) => {
          let errors = {};

          if (!email) errors.email = "Please write your email";
          else if (!EMAIL_REGEX.test(email))
            errors.email = "Please write a valid email";

          if (!password) errors.password = "Please write a password";
          else if (password.length < 7)
            errors.password = "Min length for password is 6";

          return errors;
        }}
        onSubmit={async ({ resetForm, email, password }) => {
          try {
            const res = await axios.post(LOGIN_URL, JSON.stringify({email, password}), {
              headers: {'Context-Type': 'application/json'},
              withCredentials: true
            })

            console.log(data)
            const accessToken = res?.data?.accessToken
            const roles = res?.data?.roles

            setAuth({ email, password, roles, accessToken })
            resetForm();
            navigate(from, { replace: true })
          console.log("form send");

          } catch (e) {
            if (!err?.res) console.log('No server response')
            if (err.res?.status === 400) console.log('Missing email or password')
            if (err.res?.status === 401) console.log('Unauthorized')
            console.log(e)
          }
        }}
      >
        {({ errors }) => (
          <Form>
            <Input type="text" placeholder="Email" name="email" />
            <ErrorMsg name="email" err={errors.email} />

            <Input type="password" placeholder="Password" name="password" />
            <ErrorMsg name="password" err={errors.password} />

            <button
              type="submit"
              className="w-full rounded-2xl border-b-4 border-b-green-600 bg-green-500 py-3 font-bold text-white hover:bg-green-400 active:translate-y-[0.125rem] active:border-b-green-400"
            >
              LOG IN
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
