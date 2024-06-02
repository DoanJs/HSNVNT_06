import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_diachiNV } from "../../graphql/documentNode";
import { handleTime } from "../../utils/functions";
import { Fragment } from "react";

export const PlaceDetailStyle = styled.div`
  margin-bottom: 20px;
  h5 {
    text-align: center;
    color: red;
    font-weight: bold;
  }
  .place-dt-body {
    display: flex;
    .place-dt-header {
      width: 30%;
      margin-right: 8px;
      border-right: 1px solid;
      .place-dt-img {
        img {
          height: 150px;
          margin-bottom: 8px;
        }
      }
    }
    .place-dt-result {
      width: 70%;
      h6 {
        text-decoration: underline;
      }
      .place-dt-result-header {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default function PlaceDetail() {
  const { id } = useParams();
  const { data: Data_diachiNV } = useQuery(QUERY_diachiNV, {
    variables: { id: Number(id) },
  });
  const diachiNV = Data_diachiNV?.diachiNV;

  console.log(id)
  console.log(diachiNV)

  if (!Data_diachiNV) return <Spinner />;
  return (
    <PlaceDetailStyle>
      <h5>THÔNG TIN CHI TIẾT VỀ ĐỊA CHỈ NGHI VẤN</h5>
      <hr />
      <div className="place-dt-body">
        <div className="place-dt-header">
          <p>
            Ngày báo cáo:&emsp;<b></b>
          </p>
          <p>
            Địa chỉ:&emsp;<b>{diachiNV.DiaChi}</b>
          </p>
          <p>
            Thời gian phát hiện:&emsp;<b>{handleTime(diachiNV.ThoiGianPH)}</b>
          </p>
          <p>
            Liên quan đến đối tượng:&emsp;
            <Link
              to={`/doituong/${diachiNV.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
            >
              <b>{diachiNV.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.TenDT}</b>
            </Link>
          </p>
          <p>Hình ảnh:</p>
          <Link to={diachiNV.HinhAnh} className="place-dt-img" target="_blank">
            <img alt="" src="/anqg.jpg" />
          </Link>
          <p>
            Trinh sát phát hiện:
            {diachiNV.TSThucHiens?.map((cbcs: any, ind: number) => (
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
                to={`/cbcs/${diachiNV.BaoCaoKQXMDiaChi?.TSXacMinh?.MaCBCS}`}
              >
                {diachiNV.BaoCaoKQXMDiaChi?.TSXacMinh?.HoTen}
              </Link>
          </p>
        </div>

        <div className="place-dt-result">
          <h6>KẾT QUẢ XÁC MINH:</h6>
          <div className="place-dt-result-header">
            <div>
              <p>
                Họ tên chủ hộ:&emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.HoTenChuHo}</b>
              </p>
              <p>
                Nơi ở:&emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.NoiO}</b>
              </p>
              <p>
                Quê quán:&emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.QueQuan}</b>
              </p>
            </div>
            <div>
              <p>
                Tên khác: &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.TenKhac}</b>
              </p>
              <p>
                Giới tính: &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.GioiTinh === 0 ? 'Nam' : 'Nữ'}</b>
              </p>
              <p>
                HKTT: &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.HKTT}</b>
              </p>
            </div>
            <div>
              <p>
                Năm sinh: &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.NamSinh}</b>
              </p>
              <p>
                Nghề nghiệp:&emsp;{" "}
                <b>{diachiNV.BaoCaoKQXMDiaChi?.NgheNghiep}</b>
              </p>
              <p>
                Chức vụ: &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.ChucVu}</b>
              </p>
            </div>
          </div>
          <div>
            <p>
              Nơi làm việc: &emsp;{" "}
              <b>{diachiNV.BaoCaoKQXMDiaChi?.NoiLamViec}</b>
            </p>
          </div>
          <h6>QUAN HỆ GIA ĐÌNH CỦA CHỦ HỘ:</h6>
          <p>
            &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.QuanHeGiaDinh}</b>
          </p>
          <h6>NHỮNG HỘ KHÁC CÙNG ĐỊA CHỈ (nếu có):</h6>
          <p>
            &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.HoKhacCungDC}</b>
          </p>
          <h6>BIỆN PHÁP XÁC MINH, NGUỒN TÀI LIỆU, NGƯỜI CUNG CẤP:</h6>
          <p>
            &emsp; <b>{diachiNV.BaoCaoKQXMDiaChi?.BienPhapXM}</b>
          </p>
        </div>
      </div>
    </PlaceDetailStyle>
  );
}
