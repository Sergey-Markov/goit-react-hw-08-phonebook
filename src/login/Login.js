import React, { useCallback, useState } from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import s from "./Login.module.css";

const initialValues = {
  email: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = useCallback(() => {
    setShowPassword((prev) => !prev);
  }, []);
  const validate = useCallback((values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    return errors;
  }, []);

  const onSubmit = useCallback((values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  }, []);

  return (
    <div className={s.loginField}>
      <h1 className={s.title}>Login form</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          isSubmitting,
          touched,
          errors,
          handleChange,
          handleSubmit,
          handleBlur,
        }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email}
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
              />
              <Button
                color="primary"
                type="button"
                onClick={togglePassword}
                // startIcon={<VisibilityOff />}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </Button>
              {/* <button type="button" onClick={togglePassword}>
                {showPassword ? "Hide password" : "Show password"}
              </button> */}
              <br />
              <br />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
                disabled={
                  isSubmitting ||
                  !(
                    Object.keys(touched).length ===
                      Object.keys(initialValues).length &&
                    Object.keys(errors).length === 0
                  )
                }
                startIcon={<VpnKeyIcon />}
              >
                LogIn
              </Button>
            </form>
          </div>
        )}
      </Formik>

      <p>
        If yuo don't have an acaunt, please go throught
        <Link to="/registration"> registration</Link>
      </p>
    </div>
  );
};

export { Login };
