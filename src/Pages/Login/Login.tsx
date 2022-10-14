import { useState } from "react";
import Input from "../../components/Common/Input";
import logo from "../../Assets/images/logo.svg";
import loginImage from "../../Assets/images/login-image.svg";
import "../../Styles/Login.scss";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const Login = (): JSX.Element => {
  const [formData, setFormData] = useState({});
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e: any): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = (e: any) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login_container">
      <Helmet>
        <title>Lendsqr | Login</title>
      </Helmet>
      <div className="container_logo">
        <div className="container_logo--icon">
          <img src={logo} alt="logo" />
        </div>
        <div className="container_logo--image">
          <img src={loginImage} alt="image" />
        </div>
      </div>
      <div className="loginContainer">
        <div className="loginContainer_info">
          <h2 className="loginContainer_info--title">Welcome!</h2>
          <p className="loginContainer_info--text">Enter details to login.</p>
        </div>
        <div className="loginContainer_formInput">
          <form onSubmit={handleClick}>
            <Input
              placeholder={"Email"}
              type={"email"}
              name={"email"}
              onChange={handleChange}
              label={""}
              labelName={""}
              className={"loginContainer_formInput--email"}
              value={undefined}
            />
            <div className="loginContainer_formInput--passwordDiv">
              <input
                placeholder={"Password"}
                type={toggle ? "password" : "text"}
                name={"password"}
                onChange={handleChange}
                className="loginContainer_formInput--passwordDiv-password"
              />
              <p
                className="loginContainer_formInput--passwordtext"
                onClick={() => setToggle(!toggle)}
              >
                SHOW
              </p>
            </div>
            <p className="loginContainer_formInput--forgotpassword">
              FORGOT PASSWORD
            </p>
            <button type="submit" className="loginContainer_formInput--btn">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
