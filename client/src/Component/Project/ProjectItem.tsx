import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ProjectCrime, Spinner } from "..";
import { QUERY_chuyenan } from "../../graphql/documentNode";
import { handleDoiTuongCA, handleTime } from "../../utils/functions";

const ProjectItemStyled = styled.div`
  .caDetails-header {
    p,
    h5,
    h4 {
      text-align: center;
      font-weight: bold;
    }
    h5 {
      color: red;
    }
  }
  h6 {
    font-weight: bold;
  }
  .fa-money-bill-transfer {
    color: green;
    cursor: pointer;
  }
  .fa-trash {
    color: red;
    cursor: pointer;
  }
  .caDetails-handle {
    text-align: right;
  }
`;
export default function ProjectItem() {
  const { id } = useParams();
  const { data: Data_chuyenan } = useQuery(QUERY_chuyenan, {
    variables: { id: Number(id) },
  });
  const chuyenan = Data_chuyenan?.chuyenan;

  if (!Data_chuyenan) return <Spinner />;
  return (
    <ProjectItemStyled>
      <div className="caDetails-header">
        <h5>"{chuyenan.TenCA}"</h5>
        <h4>Bí số: {chuyenan.BiSo}</h4>
        <p>
          <i>Thời gian bắt đầu: {handleTime(chuyenan.ThoiGianBD)}</i>
        </p>
      </div>
      <hr />

      <div className="caDetails-crime">
        <div className="d-flex align-items-start justify-content-between">
          <h5>I. CÁC ĐỐI TƯỢNG TRONG CHUYÊN ÁN</h5>
          {/* <button
            type="button"
            className="btn btn-success"
            style={{ marginLeft: "8px" }}
            data-bs-toggle="modal"
            data-bs-target="#modal-select-caCrime"
          >
            Thêm đối tượng
          </button> */}
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Họ và tên</th>
              <th scope="col">Bí số</th>
              <th scope="col">Năm sinh</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">CMND/CCCD/DDCN</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th style={{ textAlign: "center", color: "red" }} colSpan={6}>
                ĐỐI TƯỢNG CHÍNH (
                <span style={{ color: "blue" }}>
                  {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTChinh.length} đối
                  tượng
                </span>
                )
              </th>
            </tr>
            {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTChinh.map(
              (doituongCA: any, ind: number) => (
                <ProjectCrime key={ind} doituongCA={doituongCA} />
              )
            )}

            <tr>
              <th style={{ textAlign: "center", color: "red" }} colSpan={6}>
                ĐỐI TƯỢNG PHỤ (
                <span style={{ color: "blue" }}>
                  {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTPhu.length} đối
                  tượng
                </span>
                )
              </th>
            </tr>
            {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTPhu.map(
              (doituongCA: any, ind: number) => (
                <ProjectCrime key={ind} doituongCA={doituongCA} />
              )
            )}
            <tr>
              <th style={{ textAlign: "center", color: "red" }} colSpan={6}>
                ĐỐI TƯỢNG LIÊN QUAN (
                <span style={{ color: "blue" }}>
                  {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTKhac.length} đối
                  tượng
                </span>
                )
              </th>
            </tr>
            {handleDoiTuongCA(chuyenan.DoiTuongCAs).DTKhac.map(
              (doituongCA: any, ind: number) => (
                <ProjectCrime key={ind} doituongCA={doituongCA} />
              )
            )}
          </tbody>
        </table>
      </div>

      <hr />
      <h5>II. THÔNG TIN CHUYÊN ÁN</h5>
      <p>
        <b>1. Thành viên ban chuyên án</b>
      </p>
      {/* {ca.members.map((member: string, ind: number) => {
          if (ind === 0) {
            return <p key={ind}>- {member} - Trưởng ban chuyên án</p>;
          } else if (ind === 1) {
            return <p key={ind}>- {member} - Phó ban chuyên án</p>;
          }
          return <p key={ind}>- {member} - Thành viên ban chuyên án</p>;
        })} */}
      <p>
        <b>2. Nội dung chuyên án</b>
      </p>
      <p>{chuyenan.NoiDung}</p>
      <hr />

      <div className="caDetails-handle">
        <Link
          to={`/chuyenan/${chuyenan.MaCA}/edit`}
          title="Chỉnh sửa"
          className="fa fa-edit me-4"
        ></Link>
        <i
          data-bs-toggle="modal"
          data-bs-target="#modal-delete-object"
          title="Xóa"
          className="fas fa-trash"
        ></i>
      </div>
    </ProjectItemStyled>
  );
}
