import { Link } from "react-router-dom";
import styled from "styled-components";
import { handleTime } from "../../utils/functions";

const CaStyled = styled.div`
  width: 20%;
  cursor: pointer;
  position: relative;
  margin: 8px 0;
  p {
    margin: 0;
  }
  .ca-addmore {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
  .ca-card {
    height: 100%;
    text-decoration: none;
    color: #000000;
    margin: 8px;
    padding-bottom: 30px;
    box-shadow: 1px 0px 3px gray;
    .ca-body {
      text-align: center;
      h5,
      h6 {
        text-align: center;
      }
      p {
        text-align: left;
      }
      h5 {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
      }
    }
  }
  .caItem-avatar {
    height: 212px;
    width: 100%; //290px
    object-fit: cover;
  }
`;
export default function Project({ ca, ind }: { ca: any; ind: number }) {
  return (
    <CaStyled key={ind}>
      <Link
        to={`/chuyenan/${ca.MaCA}`}
        target="_blank"
        className="card ca-card"
      >
        <img
          src="../img.jpg"
          className="card-img-top caItem-avatar"
          alt="..."
        />
        <div className="card-body ca-body">
          <h5 title={ca.TenCA} className="card-title">
            {ca.TenCA}
          </h5>
          <p className="card-text">
            Bí danh: <b>{ca.BiSo}</b>
          </p>
          <p className="card-text">
            Tính chất: <b>{ca.TinhChat.TinhChat}</b>
          </p>
          <p className="card-text">
            Thời gian: <b>{handleTime(ca.ThoiGianBD)}</b>
          </p>
        </div>
      </Link>
      {/* {handleAuthorization(accountLogin?.role, ["admin", "manager"]) && (
      <Link
        to={`/editCa/${ca.id}`}
        type="button"
        className="btn btn-success ca-addmore"
      >
        Chỉnh sửa
      </Link>
    )} */}
      <Link
        to={`/chuyenan/${ca.MaCA}/edit`}
        type="button"
        className="btn btn-success ca-addmore"
      >
        Chỉnh sửa
      </Link>
    </CaStyled>
  );
}
