import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_baocaoPHQH } from "../../graphql/documentNode";
import { handleTime } from "../../utils/functions";

export const RelationDetailStyle = styled.div`
  margin-bottom: 20px;
  h5 {
    text-align: center;
    color: red;
    font-weight: bold;
  }
  .rela-dt-body {
    display: flex;
    .rela-dt-header {
      width: 30%;
      margin-right: 8px;
      border-right: 1px solid;
      .rela-dt-img {
        img {
          height: 150px;
          margin-bottom: 8px;
        }
      }
    }
    .rela-dt-result {
      width: 70%;
      h6 {
        text-decoration: underline;
      }
      .rela-dt-result-header {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default function RelationDetail() {
  const { id } = useParams();
  const { data: Data_baocaoPHQH } = useQuery(QUERY_baocaoPHQH, {
    variables: { id: Number(id) },
  });
  const baocaoPHQH = Data_baocaoPHQH?.baocaoPHQH;

  if (!Data_baocaoPHQH) return <Spinner />;
  return (
    <RelationDetailStyle>
      <h5>THÔNG TIN CHI TIẾT VỀ QUAN HỆ LIÊN QUAN</h5>
      <hr />
      <div className="rela-dt-body">
        <div className="rela-dt-header">
          <p>
            Ngày báo cáo:&emsp;<b>{handleTime(baocaoPHQH.Ngay)}</b>
          </p>
          <p>
            Tên/Bí danh:&emsp;<b>{baocaoPHQH.BiDanh}</b>
          </p>
          <p>
            Thời gian phát hiện:&emsp;<b>{handleTime(baocaoPHQH.ThoiGianPH)}</b>
          </p>
          <p>
            Địa điểm phát hiện:&emsp;<b>{baocaoPHQH.DiaDiemPH}</b>
          </p>
          <p>
            Liên quan đến đối tượng:&emsp;
            <Link to={`/doituong/${baocaoPHQH.DoiTuong?.MaDoiTuong}`}>
              <b>{baocaoPHQH.DoiTuong?.TenDT}</b>
            </Link>
          </p>
          <p>Hình ảnh:</p>
          <Link to={baocaoPHQH.HinhAnh} className="rela-dt-img">
            <img alt="" src="/anqg.jpg" />
          </Link>
          <p>
            Đặc điểm nhận dạng:&emsp; <b>{baocaoPHQH.DDNhanDang}</b>
          </p>
          <p>
            Địa chỉ cuối cùng:&emsp;<b>{baocaoPHQH.DiaChiCC}</b>
          </p>
          <p>
            Trinh sát nhận xét:&emsp;<b>{baocaoPHQH.TSNhanXet}</b>
          </p>
          <div>
            <p>
              Trinh sát phát hiện:
              {baocaoPHQH.TSThucHiens?.map((cbcs: any, ind: number) => (
                <Fragment key={ind}>
                  <span>&emsp;</span>
                  <Link to={`/cbcs/${cbcs.MaCBCS}`}>{cbcs.HoTen};</Link>
                  <span>&emsp;</span>
                </Fragment>
              ))}
            </p>
            <p>
              Trinh sát xác minh:&emsp;{" "}
              <Link
                to={`/cbcs/${baocaoPHQH.BaoCaoKQXMQuanHe?.TSXacMinh?.MaCBCS}`}
              >
                {baocaoPHQH.BaoCaoKQXMQuanHe?.TSXacMinh?.HoTen}
              </Link>
            </p>
          </div>
        </div>
        <div className="rela-dt-result">
          <h6>KẾT QUẢ XÁC MINH:</h6>
          <div className="rela-dt-result-header">
            <div>
              <p>
                Họ tên:&emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.HoTen}</b>
              </p>
              <p>
                Nơi ở:&emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.NoiO}</b>
              </p>
              <p>
                Quê quán:&emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.QueQuan}</b>
              </p>
            </div>
            <div>
              <p>
                Tên khác: &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.TenKhac}</b>
              </p>
              <p>
                Giới tính: &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.GioiTinh}</b>
              </p>
              <p>
                HKTT: &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.HKTT}</b>
              </p>
            </div>
            <div>
              <p>
                Năm sinh: &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.NamSinh}</b>
              </p>
              <p>
                Nghề nghiệp:&emsp;{" "}
                <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.NgheNghiep}</b>
              </p>
              <p>
                Chức vụ: &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.ChucVu}</b>
              </p>
            </div>
          </div>
          <div>
            <p>
              Nơi làm việc: &emsp;{" "}
              <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.NoiLamViec}</b>
            </p>
          </div>
          <h6>QUAN HỆ GIA ĐÌNH VÀ XÃ HỘI CẦN CHÚ Ý:</h6>
          <p>
            &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.QuanHeGDXH}</b>
          </p>
          <h6>BIỆN PHÁP XÁC MINH, NGUỒN TÀI LIỆU, NGƯỜI CUNG CẤP:</h6>
          <p>
            &emsp; <b>{baocaoPHQH.BaoCaoKQXMQuanHe?.BienPhapXM}</b>
          </p>
        </div>
      </div>
    </RelationDetailStyle>
  );
}
