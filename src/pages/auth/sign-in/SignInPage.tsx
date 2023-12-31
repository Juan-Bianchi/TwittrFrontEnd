import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useHttpRequestService } from "../../../service/HttpRequestService";
import AuthWrapper from "../AuthWrapper";
import LabeledInput from "../../../components/labeled-input/LabeledInput";
import Button from "../../../components/button/Button";
import { ButtonType } from "../../../components/button/StyledButton";
import { StyledH3 } from "../../../components/common/text";
import { useFormik } from 'formik';
import * as Yup from 'yup';

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
            <LabeledInput
              {...formik.getFieldProps('email')}
              placeholder={"Enter email..."}
              autocomplete="email"
              title={t("input-params.email")}
              error={error}
            />
            <LabeledInput
              type="password"
              {...formik.getFieldProps('password')}
              placeholder={"Enter password..."}
              autocomplete="current-password"
              title={t("input-params.password")}
              error={error}
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
            <Button
              text={t("buttons.login")}
              buttonType={ButtonType.FOLLOW}
              size={"MEDIUM"}
              onClick={(e)=> {
                e.preventDefault(); 
                formik.handleSubmit()
              }}
            />
            <Button
              text={t("buttons.register")}
              buttonType={ButtonType.OUTLINED}
              size={"MEDIUM"}
              onClick={() => navigate("/sign-up")}
            />
          </div>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default SignInPage;
