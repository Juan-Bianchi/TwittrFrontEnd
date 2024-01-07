import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AuthWrapper from "../../../pages/auth/AuthWrapper";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from "formik";
import * as Yup from 'yup';
import MyButton from "../../../components/my-button/MyButton";
import { MyButtonSize, MyButtonVariant } from "../../../components/my-button/StyledMyButton";
import MyInput from "../../../components/my-input/MyInput";
import { MyInputSize, MyInputVariant } from "../../../components/my-input/StyledMyInputContainer";

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
        password: Yup.string().required(t('error.required-password'))
          .matches( /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])/, t('error.strong-password') ),
        confirmPassword: Yup.string().required(t('error.required-password'))
        .oneOf([Yup.ref('password'), ''],t('error.confirm-password'))
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
            .catch(() => {
              setError(true);
              setEmailError(false);
              setUsernameError(false);
            });
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
            <MyInput
              {...formik.getFieldProps('name')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter name..."}
              title={t("input-params.name")}
              error={error}
            />
            <MyInput
              {...formik.getFieldProps('username')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter username..."}
              title={t("input-params.username")}
              error={usernameError || error || 
                     (formik.errors.username && formik.touched.username) ? true: false }
            />
            <MyInput
              {...formik.getFieldProps('email')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter email..."}
              autocomplete="email"
              title={t("input-params.email")}
              error={emailError || error ||
                    (formik.errors.email && formik.touched.email)? true: false}
            />
            <MyInput
              type="password"
              {...formik.getFieldProps('password')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter password..."}
              autocomplete="current-password"
              title={t("input-params.password")}
              error={error || (formik.errors.password && formik.touched.password)? true: false }
            />
            <MyInput
              type="password"
              {...formik.getFieldProps('confirmPassword')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Confirm password..."}
              title={t("input-params.confirm-password")}
              error={error || (formik.errors.confirmPassword && formik.touched.confirmPassword)? true: false}
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
            {usernameError && <p className={"error-message"}>{t("error.username-signup")}</p>}
            {emailError && <p className={"error-message"}>{t("error.email-signup")}</p>}
            {error && <p className={"error-message"}>{t("error.signup")}</p>}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MyButton
              text={t("buttons.register")}
              buttonVariant={MyButtonVariant.BLACK}
              buttonSize={MyButtonSize.MEDIUM}
              onClick={e => {
                e.preventDefault(); 
                formik.handleSubmit()
              }}
            />
            <MyButton
              text={t("buttons.login")}
              buttonVariant={MyButtonVariant.WHITE}
              buttonSize={MyButtonSize.MEDIUM}
              onClick={() => navigate("/sign-in")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignUpPage;
