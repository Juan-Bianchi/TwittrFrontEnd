import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthWrapper from "../../../pages/auth/AuthWrapper";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import LabeledInput from "../../../components/labeled-input/LabeledInput";
import Button from "../../../components/button/Button";
import { ButtonType } from "../../../components/button/StyledButton";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from "formik";
import * as Yup from 'yup';

interface SignUpData {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
const SignUpPage = () => {
  const [error, setError] = useState(false);
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const httpRequestService = useHttpRequestService();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {name: '', username: '', email: '', password: '', confirmPassword: ''},
    validationSchema: 
      Yup.object({
        name: Yup.string(),
        username: Yup.string().required(t('error.required-username')),
        email: Yup.string().email(t('error.email')).required(t('error.required-email')),
        password: Yup.string().required(t('error.required-password')),
        confirmPassword: Yup.string().required(t('error.required-password')).oneOf([Yup.ref('password'), ''],t('error.confirm-password'))
      }),
    onSubmit: values => handleSubmit(values)
  })

  const handleSubmit = async (data: SignUpData) => {
    const { confirmPassword, ...requestData } = data;
    const emailAvailable = await httpRequestService.checkUser(requestData.email, undefined)
            .catch(() => {
              setEmailError(true)
            });
    const usernameAvailable = await httpRequestService.checkUser(undefined, requestData.username)
            .catch(() => {
              setUsernameError(true)
            })
    if (emailAvailable && usernameAvailable) {
      httpRequestService.signUp(requestData)
            .then(() => navigate("/"))
            .catch(() => setError(true));
    }
  };

  return (
    <AuthWrapper>
      <div onSubmit={e => e.preventDefault()}  className={"border"}>
        <div className={"container"}>
          <div className={"header"}>
            <img src={logo} alt="Twitter Logo" />
            <StyledH3>{t("title.register")}</StyledH3>
          </div>
          <div className={"input-container"}>
            <LabeledInput
              {...formik.getFieldProps('name')}
              placeholder={"Enter name..."}
              title={t("input-params.name")}
              error={error}
            />
            <LabeledInput
              {...formik.getFieldProps('username')}
              placeholder={"Enter username..."}
              title={t("input-params.username")}
              error={usernameError || error}
            />
            <LabeledInput
              {...formik.getFieldProps('email')}
              placeholder={"Enter email..."}
              autocomplete="email"
              title={t("input-params.email")}
              error={emailError || error}
            />
            <LabeledInput
              type="password"
              {...formik.getFieldProps('password')}
              placeholder={"Enter password..."}
              autocomplete="current-password"
              title={t("input-params.password")}
              error={error}
            />
            <LabeledInput
              type="password"
              {...formik.getFieldProps('confirmPassword')}
              placeholder={"Confirm password..."}
              title={t("input-params.confirm-password")}
              error={error}
            />
            { formik.errors.name && formik.touched.name ? 
              <p className={"error-message"}>{formik.errors.name}</p>: null
            }
            { formik.errors.username && formik.touched.username ? 
              <p className={"error-message"}>{formik.errors.username}</p>: null
            }
            { formik.errors.password && formik.touched.password ? 
              <p className={"error-message"}>{formik.errors.password}</p>: null
            }
            { formik.errors.email && formik.touched.email ? 
              <p className={"error-message"}>{formik.errors.email}</p>: null
            }
            { formik.errors.confirmPassword && formik.touched.confirmPassword ? 
              <p className={"error-message"}>{formik.errors.confirmPassword}</p>: null
            }
            <p className={"error-message"}>{usernameError && t("error.username-signup")}</p>
            <p className={"error-message"}>{emailError && t("error.email-signup")}</p>
            <p className={"error-message"}>{error && t("error.signup")}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Button
              text={t("buttons.register")}
              buttonType={ButtonType.FOLLOW}
              size={"MEDIUM"}
              onClick={e => {
                e.preventDefault(); 
                formik.handleSubmit()
              }}
            />
            <Button
              text={t("buttons.login")}
              buttonType={ButtonType.OUTLINED}
              size={"MEDIUM"}
              onClick={() => navigate("/sign-in")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignUpPage;
