import { useReactiveVar } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { accountLoginVar } from "../../graphql/client/cache";
import { CALLAPI, showNotification } from "../../utils/functions";
import JWTManager from "../../utils/jwt";

export default function ModalLogout() {
  const navigate = useNavigate();
  const accountLogin = useReactiveVar(accountLoginVar);

  const logout = async () => {
    JWTManager.deleteToken();
    try {
      await CALLAPI("post", "logout", accountLogin);
      showNotification(
        "Chúc mừng",
        `Đăng xuất tài khoản ${accountLogin?.Username} thành công`,
        "success"
      );
      navigate("/dangnhap");
      window.location.reload();
    } catch (error) {
      showNotification(
        "Lỗi",
        `Đăng xuất tài khoản ${accountLogin?.Username} thất bại`,
        "danger"
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="modal-logout"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content" style={{ zIndex: "100" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Đăng xuất tài khoản
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Bạn chắc chắn muốn đăng xuất tài khoản{" "}
            <b>
              <i>{accountLogin?.Username}</i>
            </b>{" "}
            và xóa hết <b>token, refresh_token</b> khỏi hệ thống ?
          </div>
          <div className="modal-footer">
            <button
              onClick={logout}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Đăng xuất
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
