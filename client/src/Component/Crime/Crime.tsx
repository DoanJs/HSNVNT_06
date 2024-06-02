import { Link } from "react-router-dom";
import styled from "styled-components";
import { handleTime } from "../../utils/functions";

const CrimeStyled = styled.div`
  width: 20%;
  cursor: pointer;
  position: relative;
  margin: 8px 0;
  p {
    margin: 0;
  }
  .crime-addmore {
    position: absolute;
    bottom: 0px;
    right: 20px;
  }
  .crime-card {
    height: 100%;
    text-decoration: none;
    color: #000000;
    margin: 8px;
    padding-bottom: 10px;
    box-shadow: 1px 0px 3px gray;
    .crime-body {
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
  .crimeItem-avatar {
    height: 212px;
    width: 100%; //290px
    object-fit: cover;
  }
`;
export default function Crime({ crime, ind }: { crime: any; ind: number }) {
  return (
    <CrimeStyled key={ind}>
      <Link to={`/doituong/${crime.MaDoiTuong}`} className="card crime-card">
        <img
          src="img.jpg"
          className="card-img-top crimeItem-avatar"
          alt="..."
        />
        <div className="card-body crime-body">
          <h5 className="card-title">{crime.TenDT}</h5>
          <p className="card-text">
            Năm sinh: <b>{handleTime(crime.NgaySinh)}</b>
          </p>
          <p className="card-text">
            Nơi ở: <b>{crime.NoiO}</b>
          </p>
          <p className="card-text">
            Tính chất: <b>{crime.TinhChatDT?.TinhChat}</b>
          </p>
          <p className="card-text">
            Số lần trinh sát: <b>{crime.QuyetDinhTSNTs.length}</b>
          </p>
        </div>
      </Link>
      {/* {handleAuthorization(accountLogin.role, [
        "admin",
        "leader",
        "manager",
      ]) && (
        <Link
          to={`/createPlan/${crime.id}`}
          type="button"
          className="btn btn-success crime-addmore"
        >
          Bổ sung
        </Link>
      )} */}
    </CrimeStyled>
  );
}
