import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ModalEditProfile, ModalLogout } from "..";
import { QUERY_account } from "../../graphql/documentNode";
import Spinner from "../Spinner/Spinner";

export const ProfileStyle = styled.div`
  .profile-title {
    h5 {
      font-weight: bold;
      text-align: center;
      color: red;
    }
  }
  .profile-body {
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
  }
  .profile-footer {
    display: flex;
    justify-content: space-between;
  }
`;
export default function Profile() {
  const { id } = useParams();
  const { data: Data_account } = useQuery(QUERY_account, {
    variables: { id: Number(id) },
  });
  const account = Data_account?.account;

  console.log(account)

  if (!account) return <Spinner />;
  return (
    <ProfileStyle>
      <div className="profile-title">
        <h5>THÔNG TIN CHI TIẾT HỒ SƠ CÁ NHÂN</h5>
      </div>
      <hr />
      <div className="profile-body">
        <div>
          <h5>
            Mã định danh:{" "}
            <span style={{ color: "blue" }}>{account.AccountID}</span>
          </h5>
          <h5>
            Tên tài khoản:{" "}
            <span style={{ color: "blue" }}>{account.Username}</span>
          </h5>

          <h5>Mật khẩu: ***********</h5>
        </div>
        <div>
          <h5>
            Vị trí: <span style={{ color: "blue" }}>{account.Position}</span>
          </h5>
          <h5>
            Phân quyền: <span style={{ color: "blue" }}>{account.Role}</span>
          </h5>
          <h5>
            Số lần truy cập:{" "}
            <span style={{ color: "blue" }}>{`account.histories.length`}</span>
          </h5>
        </div>
      </div>
      <hr />
      <div className="profile-footer">
        <button
          data-bs-toggle="modal"
          data-bs-target="#modal-editProfile"
          type="button"
          className="btn btn-primary"
        >
          Chỉnh sửa
        </button>
        <button
          data-bs-toggle="modal"
          data-bs-target="#modal-logout"
          type="button"
          className="btn btn-danger"
        >
          Đăng xuất
        </button>
      </div>

      <ModalEditProfile account={account} />
      <ModalLogout />
    </ProfileStyle>
  );
}
