import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_baocaoKQGH } from "../../graphql/documentNode";
import { handleTime } from "../../utils/functions";

export const RecordDetailStyle = styled.div`
  margin-bottom: 20px;
  h5 {
    text-align: center;
    color: red;
    font-weight: bold;
  }
  .record-dt-body {
    display: flex;
    .record-dt-header {
      width: 30%;
      margin-right: 8px;
      border-right: 1px solid;
      .record-dt-img {
        img {
          height: 150px;
          margin-bottom: 8px;
        }
      }
    }
    .record-dt-result {
      width: 70%;
      h6 {
        text-decoration: underline;
      }
      .record-dt-result-header {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default function RecordDetail() {
  const { id } = useParams();
  const { data: Data_baocaoKQGH } = useQuery(QUERY_baocaoKQGH, {
    variables: { id: Number(id) },
  });
  const baocaoKQGH = Data_baocaoKQGH?.baocaoKQGH;

  if (!Data_baocaoKQGH) return <Spinner />;
  return (
    <RecordDetailStyle>
      <h5>THÔNG TIN CHI TIẾT VỀ HÌNH ẢNH GHI NHẬN ĐƯỢC</h5>
      <hr />
      <div className="record-dt-body">
        <div className="record-dt-header">
          <p>
            Ngày báo cáo:&emsp;<b>{handleTime(baocaoKQGH.Ngay)}</b>
          </p>
          <p>
            Thời gian ghi hình:&emsp;<b>{handleTime(baocaoKQGH.ThoiGian)}</b>
          </p>
          <p>
            Địa điểm ghi hình:&emsp;<b>{baocaoKQGH.DiaDiem}</b>
          </p>
          <p>
            Phương tiện sử dụng:&emsp;<b>{baocaoKQGH.PhuongTienSD}</b>
          </p>
          <p>
            Vai ngụy trang:&emsp;<b>{baocaoKQGH.VaiNguyTrang}</b>
          </p>
          <p>
            MucDich:&emsp;<b>{baocaoKQGH.MucDich}</b>
          </p>
          <p>
            Nội dung:&emsp;<b>{baocaoKQGH.NoiDung}</b>
          </p>
          <p>
            Liên quan đến đối tượng:&emsp;
            <Link to={`/doituong/${baocaoKQGH.DoiTuong?.MaDoiTuong}`} target="_blank">
              <b>{baocaoKQGH.DoiTuong?.TenDT}</b>
            </Link>
          </p>
          <p>Hình ảnh:</p>
          <Link to={baocaoKQGH.HinhAnh} className="record-dt-img" target="_blank">
            <img alt="" src={baocaoKQGH.HinhAnh || "/anqg.jpg"} />
          </Link>
          <div>
            <p>
              Trinh sát phát hiện:
              {baocaoKQGH.TSThucHiens?.map((cbcs: any, ind: number) => (
                <Fragment key={ind}>
                  <span>&emsp;</span>
                  <Link to={`/cbcs/${cbcs.MaCBCS}`}>{cbcs.HoTen};</Link>
                  <span>&emsp;</span>
                </Fragment>
              ))}
            </p>
          </div>
        </div>

        <div className="record-dt-result">
          <h6>KẾT QUẢ XÁC MINH:</h6>
          {/* <div className="record-dt-result-header">
            <div>
              <p>
                Họ tên:&emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.HoTen}</b>
              </p>
              <p>
                Nơi ở:&emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.NoiO}</b>
              </p>
              <p>
                Quê quán:&emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.QueQuan}</b>
              </p>
            </div>
            <div>
              <p>
                Tên khác: &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.TenKhac}</b>
              </p>
              <p>
                Giới tính: &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.GioiTinh}</b>
              </p>
              <p>
                HKTT: &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.HKTT}</b>
              </p>
            </div>
            <div>
              <p>
                Năm sinh: &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.NamSinh}</b>
              </p>
              <p>
                Nghề nghiệp:&emsp;{" "}
                <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.NgheNghiep}</b>
              </p>
              <p>
                Chức vụ: &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.ChucVu}</b>
              </p>
            </div>
          </div>
          <div>
            <p>
              Nơi làm việc: &emsp;{" "}
              <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.NoiLamViec}</b>
            </p>
          </div>
          <h6>QUAN HỆ GIA ĐÌNH VÀ XÃ HỘI CẦN CHÚ Ý:</h6>
          <p>
            &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.QuanHeGDXH}</b>
          </p>
          <h6>BIỆN PHÁP XÁC MINH, NGUỒN TÀI LIỆU, NGƯỜI CUNG CẤP:</h6>
          <p>
            &emsp; <b>{baocaoKQGH.BaoCaoKQXMQuanHe?.BienPhapXM}</b>
          </p> */}
        </div>
      </div>
    </RecordDetailStyle>
  );
}
