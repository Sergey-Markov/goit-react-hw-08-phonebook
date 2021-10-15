import React, { useCallback } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import s from "./Registration.module.css";

// import { Button } from "@material-ui/core/Button";

const initialValues = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
};

const Registration = () => {
  const validate = useCallback((values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (values.name.length < 3) {
      errors.name = "Invalid name. Name must have min 3 simbols";
    }
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Invalid password. password must have min 8 simbols";
    }
    if (!values.passwordRepeat) {
      errors.passwordRepeat = "Required";
    } else if (values.passwordRepeat.length < 8) {
      errors.passwordRepeat =
        "Invalid password. password must have min 8 simbols";
    } else if (values.passwordRepeat !== values.password) {
      errors.passwordRepeat = "Invalid password. Try again.";
      values.passwordRepeat = "";
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
    <div className={s.registrationField}>
      <h1 className={s.title}>Registration form</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={onSubmit}
      >
        {({ isSubmitting, touched, errors }) => (
          <Form>
            <label htmlFor="name">name</label>
            <br />
            <Field type="text" name="name" placeholder="name" />
            <ErrorMessage name="name" component="div" />
            <br />
            <br />
            <label htmlFor="email">email</label>
            <br />
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" />
            <br />
            <br />
            <label htmlFor="password">password</label>
            <br />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <br />
            <label htmlFor="passwordRepeat">repeat password</label>
            <br />
            <Field
              type="password"
              name="passwordRepeat"
              placeholder="Repeat password"
            />
            <ErrorMessage name="passwordRepeat" component="div" />
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
            >
              Submit
            </Button>
            {/* <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button> */}
          </Form>
        )}
      </Formik>
      <p>
        If yuo have an acaunt, please enter
        <Link to="/"> Login</Link>
      </p>
    </div>
  );
};

export { Registration };
