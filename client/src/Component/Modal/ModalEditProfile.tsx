import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { MUTATION_editAccount } from "../../graphql/documentNode";
import { showNotification } from "../../utils/functions";

export const ModalEditProfileStyle = styled.div`
  .modal-profile-password {
    position: relative;
    input {
      padding-right: 40px;
    }
    .profile-eye {
      position: absolute;
      right: 10px;
      bottom: 5px;
      i {
        cursor: pointer;
        font-size: 20px;
      }
    }
  }
`;

export default function ModalEditProfile({ account }: { account: any }) {
  const [form, setForm] = useState({
    usernameNew: "",
    passwordNew: "",
    passwordNew_Re: "",
    passwordOld: "",
  });
  const [editAccount] = useMutation(MUTATION_editAccount);
  const [typePasswordNew, setTypePasswordNew] = useState(true);
  const [typePasswordNew_Re, setTypePasswordNew_Re] = useState(true);
  const [typePasswordOld, setTypePasswordOld] = useState(true);

  const changeForm = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const submitForm = async () => {
    console.log(form);
    if (
      form.usernameNew.trim() === "" ||
      form.passwordNew.trim() === "" ||
      form.passwordOld.trim() === "" ||
      form.passwordNew_Re.trim() === ""
    ) {
      showNotification(
        "Lỗi",
        "Tài khoản hoặc các mật khẩu không hợp lệ!",
        "danger"
      );
      return;
    }
    if (form.passwordNew !== form.passwordNew_Re) {
      showNotification(
        "Cảnh báo!",
        "2 mật khẩu mới không khớp nhau",
        "warning"
      );
      return;
    }

    try {
      await editAccount({
        variables: {
          id: Number(account.AccountID),
          accountExtendInput: {
            AccountInput: {
              Username: form.usernameNew,
              Password: form.passwordNew,
            },
            PasswordOld: form.passwordOld,
          },
        },
      });
      showNotification(
        "Chúc mừng",
        `Chỉnh sửa thông tin hồ sơ cá nhân tài khoản ${account.Username} thành công`,
        "success"
      );
    } catch (error: any) {
      console.log(error);
      showNotification("Lỗi", error.message, "danger");
    }
  };

  return (
    <ModalEditProfileStyle
      className="modal fade"
      id="modal-editProfile"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Chỉnh sửa thông tin hồ sơ cá nhân tài khoản "
              <span style={{ color: "red" }}>
                {account && account.Username}
              </span>
              "
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Tên người dùng mới
                </label>
                <input
                  required
                  onChange={changeForm}
                  name="usernameNew"
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3 modal-profile-password">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mật khẩu mới
                </label>
                <input
                  required
                  onChange={changeForm}
                  name="passwordNew"
                  type={typePasswordNew ? "password" : "text"}
                  className="form-control"
                />
                <div className="profile-eye">
                  {typePasswordNew ? (
                    <i
                      title="Hiện"
                      onClick={() => setTypePasswordNew(!typePasswordNew)}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      title="Ẩn"
                      onClick={() => setTypePasswordNew(!typePasswordNew)}
                      className="fa-solid fa-eye"
                    ></i>
                  )}
                </div>
              </div>
              <div className="mb-3 modal-profile-password">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Nhập lại mật khẩu mới
                </label>
                <input
                  required
                  onChange={changeForm}
                  name="passwordNew_Re"
                  type={typePasswordNew_Re ? "password" : "text"}
                  className="form-control"
                />
                <div className="profile-eye">
                  {typePasswordNew_Re ? (
                    <i
                      title="Hiện"
                      onClick={() => setTypePasswordNew_Re(!typePasswordNew_Re)}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      title="Ẩn"
                      onClick={() => setTypePasswordNew_Re(!typePasswordNew_Re)}
                      className="fa-solid fa-eye"
                    ></i>
                  )}
                </div>
              </div>
              <div className="mb-3 modal-profile-password">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Mật khẩu cũ để xác thực
                </label>
                <input
                  required
                  onChange={changeForm}
                  name="passwordOld"
                  type={typePasswordOld ? "password" : "text"}
                  className="form-control"
                />
                <div className="profile-eye">
                  {typePasswordOld ? (
                    <i
                      title="Hiện"
                      onClick={() => setTypePasswordOld(!typePasswordOld)}
                      className="fa-solid fa-eye-slash"
                    ></i>
                  ) : (
                    <i
                      title="Ẩn"
                      onClick={() => setTypePasswordOld(!typePasswordOld)}
                      className="fa-solid fa-eye"
                    ></i>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
            <button
              onClick={submitForm}
              type="button"
              className="btn btn-success"
              data-bs-dismiss="modal"
            >
              Thay đổi
            </button>
          </div>
        </div>
      </div>
    </ModalEditProfileStyle>
  );
}
