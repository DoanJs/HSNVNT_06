import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CALLAPI, showNotification } from "../../utils/functions";
import { CODESECRET_REGISTER } from "../../utils/variable";

export const RegisterStyle = styled.div`
  margin: 100px auto;
  .register {
    h3,
    label {
      text-align: center;
    }
    padding: 10px;
    border-radius: 5px;
    box-shadow: 1px 1px 25px grey;
    .register-form {
      padding: 0px 30px;
      .register-password {
        position: relative;
        input {
          padding-right: 40px;
        }
        .register-eye,
        .register-code {
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
    .register-background {
      background-image: url("/dangky.jpg");
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
`;
export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    re_password: "",
    code_secret: "",
  });
  const [typePassword, setTypePassword] = useState(true);
  const [typeRePassword, setTypeRePassword] = useState(true);
  const [typeCode, setTypeCode] = useState(true);

  const toggleTypePassword = () => setTypePassword(!typePassword);
  const toggleTypeRePassword = () => setTypeRePassword(!typeRePassword);
  const toggleTypeCode = () => setTypeCode(!typeCode);

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      form.username.trim() === "" ||
      form.password.trim() === "" ||
      form.code_secret.trim() === ""
    ) {
      showNotification(
        "Cảnh báo!",
        "Tài khoản hoặc mật khẩu không hợp lệ!",
        "warning"
      );
      return;
    }
    if (form.password !== form.re_password) {
      showNotification(
        "Cảnh báo!",
        "Xác thực lại mật khẩu không khớp!",
        "warning"
      );
      return;
    }
    if (form.code_secret !== CODESECRET_REGISTER) {
      showNotification(
        "Cảnh báo!",
        "Mã bí mật không đúng. Liên hệ Admin",
        "warning"
      );
      return;
    }
    CALLAPI("post", "register", {
      username: form.username,
      password: form.password,
    })
      .then((result: any) => {
        navigate("/dangnhap");
        showNotification(
          "Chúc mừng",
          "Tài khoản " + result.data?.Username + " đăng ký thành công",
          "success"
        );
      })
      .catch((err: any) => {
        showNotification("Lỗi", err.response.data.message, "danger");
      });
  };

  return (
    <RegisterStyle className="container">
      <div className="row register">
        <div className="col col-6 register-background"></div>
        <div className="col col-6 register-form">
          <h3>Đăng ký</h3>
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
            <div className="mb-3 register-password">
              <label>Mật khẩu</label>
              <span style={{ color: "red" }}> (*)</span>
              <input
                required
                onChange={changeForm}
                type={typePassword ? "password" : "text"}
                className="form-control"
                name="password"
              />
              <div className="register-eye">
                {typePassword ? (
                  <i
                    title="Hiện"
                    onClick={toggleTypePassword}
                    className="fa-solid fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    title="Ẩn"
                    onClick={toggleTypePassword}
                    className="fa-solid fa-eye"
                  ></i>
                )}
              </div>
            </div>
            <div className="mb-3 register-password">
              <label>Nhập lại mật khẩu</label>
              <span style={{ color: "red" }}> (*)</span>
              <input
                required
                onChange={changeForm}
                type={typeRePassword ? "password" : "text"}
                className="form-control"
                name="re_password"
              />
              <div className="register-eye">
                {typeRePassword ? (
                  <i
                    title="Hiện"
                    onClick={toggleTypeRePassword}
                    className="fa-solid fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    title="Ẩn"
                    onClick={toggleTypeRePassword}
                    className="fa-solid fa-eye"
                  ></i>
                )}
              </div>
            </div>
            <div className="mb-3 register-password">
              <label>Mã bí mật</label>
              <span style={{ color: "red" }}> (*)</span>
              <input
                required
                onChange={changeForm}
                type={typeCode ? "password" : "text"}
                className="form-control"
                name="code_secret"
              />
              <div className="register-code">
                {typeCode ? (
                  <i
                    title="Hiện"
                    onClick={toggleTypeCode}
                    className="fa-solid fa-eye-slash"
                  ></i>
                ) : (
                  <i
                    title="Ẩn"
                    onClick={toggleTypeCode}
                    className="fa-solid fa-eye"
                  ></i>
                )}
              </div>
            </div>
            <button type="submit" className="btn btn-success">
              Đăng ký
            </button>
            <button type="button" className="btn btn-link">
              <Link to={`/dangnhap`}>Đăng nhập</Link>
            </button>
          </form>
        </div>
      </div>
    </RegisterStyle>
  );
}
