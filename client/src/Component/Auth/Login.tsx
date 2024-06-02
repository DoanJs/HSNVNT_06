import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CALLAPI, showNotification } from "../../utils/functions";
import JWTManager from "../../utils/jwt";

export const LoginStyle = styled.div`
  margin: 100px auto;
  .login {
    h3,
    label {
      text-align: center;
    }
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 25px grey;
    .login-form {
      padding: 50px 30px;
      h2 {
        color: red;
        padding: 80px 0;
        text-align: center;
      }
    }
    .login-background {
      background-image: url("/dangnhap.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
    .login-password {
      position: relative;
      input {
        padding-right: 40px;
      }
      .login-eye {
        position: absolute;
        right: 10px;
        bottom: 5px;
        i {
          cursor: pointer;
          font-size: 20px;
        }
      }
    }
  }
`;
export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [typePassword, setTypePassword] = useState(true);
  const [numberLogin, setNumberLogin] = useState(
    Number(localStorage.getItem("numberLogin"))
  );

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const toggleType = () => setTypePassword(!typePassword);

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.username.trim() === "" || form.password.trim() === "") {
      showNotification(
        "Lỗi",
        "Tài khoản hoặc mật khẩu không hợp lệ!",
        "danger"
      );
      return;
    }
    CALLAPI("post", "login", form)
      .then((result: any) => {
        JWTManager.setToken(result.data.access_token);
        // localStorage.setItem("numberLogin", JSON.stringify(0));
        showNotification(
          "Chúc mừng",
          "Tài khoản " +
            JWTManager.getAccount()?.Username +
            " đăng nhập thành công",
          "success"
        );
        setNumberLogin(0);
        navigate("/");
      })
      .catch((err: any) => {
        console.log(err);
        // localStorage.setItem("numberLogin", JSON.stringify(numberLogin + 1));
        // setNumberLogin(Number(JSON.stringify(numberLogin + 1)));
        showNotification("Lỗi", err.response.data.message, "danger");
      });
  };

  return (
    <LoginStyle className="container">
      <div className="row login">
        <div className="col col-6 login-form">
          <h3>Đăng nhập</h3>
          {numberLogin >= 5 ? (
            <h2>
              HỆ THỐNG ĐÃ BỊ KHÓA DO NHẬP SAI QUÁ NHIỀU LẦN. LIÊN HỆ ADMIN
            </h2>
          ) : (
            <form onSubmit={submitForm}>
              <div className="mb-3">
                <label>Tên người dùng</label>
                <span style={{ color: "red" }}> (*)</span>
                <input
                  required
                  onChange={changeForm}
                  type="text"
                  className="form-control"
                  name="username"
                />
              </div>
              <div className="mb-3 login-password">
                <label>Mật khẩu</label>
                <span style={{ color: "red" }}> (*)</span>
                <input
                  required
                  onChange={changeForm}
                  type={typePassword ? "password" : "text"}
                  className="form-control"
                  name="password"
                />
                <div className="login-eye">
                  {typePassword ? (
                    <i
                      title="Hiện"
                      onClick={toggleType}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      title="Ẩn"
                      onClick={toggleType}
                      className="fa-solid fa-eye"
                    ></i>
                  )}
                </div>
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
              <button type="button" className="btn btn-link">
                <Link to={`/dangky`}>Đăng ký</Link>
              </button>
            </form>
          )}
        </div>

        <div className="col col-6 login-background"></div>
      </div>
    </LoginStyle>
  );
}
