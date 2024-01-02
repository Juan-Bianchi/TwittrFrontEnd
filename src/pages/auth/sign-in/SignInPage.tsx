import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import AuthWrapper from "../AuthWrapper";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import MyButton from "../../../components/my-button/MyButton";
import { MyButtonSize, MyButtonVariant } from "../../../components/my-button/StyledMyButton";
import MyInput from "../../../components/my-input/MyInput";
import { MyInputSize, MyInputVariant } from "../../../components/my-input/StyledMyInputContainer";

interface FormValues {
  email: string,
  password: string
}

const SignInPage = () => {
  const [error, setError] = useState(false);

  const httpRequestService = useHttpRequestService();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {email: '', password: ''},
    validationSchema: 
      Yup.object({
        email: Yup.string().email(t('error.email')).required(t('error.required-email')),
        password: Yup.string().required(t('error.required-password'))
      }),
    onSubmit: values => handleSubmit(values)
  })

  const handleSubmit = (values: FormValues) => {
    const email: string = values.email
    const password: string = values.password
    httpRequestService
      .signIn({ email, password })
      .then(() => navigate("/"))
      .catch(() => setError(true));
  };


  return (
    <AuthWrapper>
      <div className={"border"}>
        <div className={"container"}>
          <div className={"header"}>
            <img src={logo} alt={"Twitter Logo"} />
            <StyledH3>{t("title.login")}</StyledH3>
          </div>
          <div className={"input-container"}>
            <MyInput
              {...formik.getFieldProps('email')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter email..."}
              autocomplete="email"
              title={t("input-params.email")}
              error={error || (formik.errors.email && formik.touched.email)? true: false}
            />
            <MyInput
              type="password"
              {...formik.getFieldProps('password')}
              variant={MyInputVariant.FULFILLED}
              size={MyInputSize.SMALL}
              placeholder={"Enter password..."}
              autocomplete="current-password"
              title={t("input-params.password")}
              error={error || (formik.errors.password && formik.touched.password)? true: false}
            />
            { formik.errors.password && formik.touched.password ? 
              <p className={"error-message"}>{formik.errors.password}</p>: null
            }
            { formik.errors.email && formik.touched.email ? 
              <p className={"error-message"}>{formik.errors.email}</p>: null
            }
            <p className={"error-message"}>{error && t("error.login")}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MyButton
              text={t("buttons.login")}
              buttonVariant={MyButtonVariant.BLACK}
              buttonSize={MyButtonSize.MEDIUM}
              onClick={(e)=> {
                e.preventDefault(); 
                formik.handleSubmit()
              }}
            />
            <MyButton
              text={t("buttons.register")}
              buttonVariant={MyButtonVariant.WHITE}
              buttonSize={MyButtonSize.MEDIUM}
              onClick={() => navigate("/sign-up")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignInPage;
