import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_doituong } from "../../graphql/documentNode";
import { handleTime } from "../../utils/functions";
import PlanItem from "../Plan/PlanItem";

const CrimeItemStyled = styled.div`
  position: relative;
  p {
    margin: 0;
  }
  .crimeDetails-info {
    left: 25px;
    padding-bottom: 20px;
    position: fixed;
    height: 710px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      background-color: #e4e6eb;
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #007bff;
      border-radius: 10px;
    }
    .crimeDetails-name {
      text-align: center;
      h5 {
        color: #e42645;
      }
      .crimeDetails-avatar {
        height: 212px;
        object-fit: cover;
        width: 290px;
        margin-bottom: 6px;
      }
      .crimeDetails-planExtend {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        a {
          margin: 0 6px;
        }
      }
    }
    b {
      color: #007bff;
      margin-left: 10px;
    }
    p {
      color: #000000;
    }
  }
  .crimeDetails-main {
    margin-left: 400px;
    p {
      padding-left: 15px;
    }
    h6 {
      padding-left: 40px;
    }
  }
  .crimeDetails-extend {
    position: fixed;
    top: 136px;
    right: 10px;
  }
  .crimeDetails-edit {
    display: flex;
    justify-content: flex-end;
    text-decoration: none;
    .fa-edit {
      color: orange;
      cursor: pointer;
    }
    .fa-trash {
      color: red;
      cursor: pointer;
    }
  }
`;
export default function CrimeItem() {
  const { id } = useParams();
  const { data: Data_doituong } = useQuery(QUERY_doituong, {
    variables: { id: Number(id) },
  });
  const doituong = Data_doituong?.doituong;

  if (!Data_doituong) return <Spinner />;
  return (
    <CrimeItemStyled>
      <div className="row">
        <div className="col col-3 crimeDetails-info">
          <div className="crimeDetails-name">
            <a href="/" target="_blank" rel="noreferrer">
              <img src="../img.jpg" className="crimeDetails-avatar" alt="..." />
            </a>
            <h5 className="card-title">{doituong.TenDT}</h5>
            <h6>"{doituong.TenKhac}"</h6>
            <p>
              Số lần TSNT:
              <b>{doituong.QuyetDinhTSNTs.length}</b>
            </p>
            <div className="crimeDetails-planExtend">
              {doituong.QuyetDinhTSNTs?.map((obj: any, ind: number) => (
                <a
                  key={ind}
                  title={`${handleTime(obj.KetQuaTSNT.ThoiGianBD)}_${handleTime(
                    obj.KetQuaTSNT.ThoiGianKT
                  )}`}
                  href={`#plan-${obj.MaQD}`}
                >
                  {obj.BiDanh}
                </a>
              ))}
            </div>
          </div>
          <hr />
          <div className="planDetails-news">
            <p>
              Ngày sinh: <b>{handleTime(doituong.NgaySinh)}</b>
            </p>
            <p>
              Giới tính: <b>{doituong.GioiTinh === 0 ? "Nam" : "Nữ"}</b>
            </p>
            <p>
              Nơi sinh: <b>{doituong.NoiSinh}</b>
            </p>
            <p>
              Quốc tịch: <b>{doituong.QuocTich.TenQT}</b>
            </p>
            <p>
              Dân tộc: <b>{doituong.DanToc.TenDT}</b>
            </p>
            <p>
              Tôn giáo: <b>{doituong.TonGiao.TenTG}</b>
            </p>
            <p>
              Quê quán: <b>{doituong.QueQuan}</b>
            </p>
            <p>
              HKTT: <b>{doituong.HKTT}</b>
            </p>
            <p>
              CCCD/CMND/SHC:{" "}
              <b>
                {doituong.CCCD}/{doituong.CMND}/{doituong.SHC}
              </b>
            </p>
            <p>
              Nơi ở: <b>{doituong.NoiO}</b>
            </p>
            <p>
              Nghề nghiệp/Chức vụ: <b>{doituong.NgheNghiep}</b>
            </p>
            <p>
              Nơi làm việc: <b>{doituong.NoiLamViec}</b>
            </p>
            <p>
              Số điện thoại: <b>{doituong.SDT}</b>
            </p>
            <p>
              Phương tiện đi lại: <b>{doituong.PhuongTien}</b>
            </p>
            <p>
              Áp dụng biện pháp điều tra:{" "}
              <b>
                {doituong.BienPhapDTs?.map((obj: any, ind: number) => (
                    <span key={ind}>{obj.BienPhapDT}&ensp;</span>
                ))}
              </b>
            </p>
            <p>
              Tính chất đối tượng: <b>{doituong.TinhChatDT.TinhChat}</b>
            </p>
            <p>
              Loại đối tượng: <b>{doituong.LoaiDT.LoaiDT}</b>
            </p>
          </div>
          <hr />
          <p>
            Thuộc chuyên án:{" "}
            {/* {doituongCAsOpen.map((obj: any, ind: number) => (
              <Link
                key={ind}
                to={`/chuyenan/${obj.ChuyenAn?.MaCA}`}
                target="_blank"
              >
                <b title={obj.ChuyenAn?.TenCA}>{obj.ChuyenAn?.BiSo}</b>
              </Link>
            ))} */}
          </p>
          <hr />
          <div>
            <p>Hiểu biết về đối tượng:</p>
            {/* {handleEnterRow_BOTConnect(crime.GDvsXH, true)} */}
            <div className="crimeDetails-edit">
              {/* {handleAuthorization(accountLogin.role, ["admin","leader", "manager"]) && (
                <Link
                  to={`/editCrime/${crime.id}`}
                  title="Chỉnh sửa"
                  className="fas fa-edit me-4"
                ></Link>
              )}
              {handleAuthorization(accountLogin.role, ["admin"]) && (
                <span
                  onClick={() => takeData(crime)}
                  data-bs-toggle="modal"
                  data-bs-target="#modal-delete-object"
                  title="Xóa"
                  className="fas fa-trash"
                ></span>
              )} */}
            </div>
          </div>
        </div>
        <div className="col col-9 crimeDetails-main">
          {doituong.QuyetDinhTSNTs?.map((obj: any, ind: number) => (
            <PlanItem quyetdinhTSNT={obj} key={ind} numberAction={ind} />
          ))}
        </div>
      </div>
    </CrimeItemStyled>
  );
}

/* {handleAuthorization(accountLogin.role, ["admin","leader", "manager"]) && (
        <Link
          to={`/createPlan/${crime.id}`}
          title="Bổ sung thông tin"
          type="button"
          className="btn btn-primary crimeDetails-extend"
        >
          Bổ sung
        </Link>
      )} */

/* <ModalDelete /> */
