import { useQuery } from "@apollo/client";
import { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_phuongtienNV } from "../../graphql/documentNode";
import { handleTime } from "../../utils/functions";

export const VehicleDetailStyle = styled.div`
  margin-bottom: 20px;
  h5 {
    text-align: center;
    color: red;
    font-weight: bold;
  }
  .vehicle-dt-body {
    display: flex;
    .vehicle-dt-header {
      width: 30%;
      margin-right: 8px;
      border-right: 1px solid;
      .vehicle-dt-img {
        img {
          height: 150px;
          margin-bottom: 8px;
        }
      };
      .vehicle-dt-tsth {
        margin-left: 30px
      }
    }
    .vehicle-dt-result {
      width: 70%;
      h6 {
        text-decoration: underline;
      }
      .vehicle-dt-result-header {
        display: flex;
        justify-content: space-between;
      }
    }
  }
`;

export default function VehicleDetail() {
  const { id } = useParams();
  const { data: Data_phuongtienNV } = useQuery(QUERY_phuongtienNV, {
    variables: { id: Number(id) },
  });
  const phuongtienNV = Data_phuongtienNV?.phuongtienNV;

  if (!Data_phuongtienNV) return <Spinner />;
  return (
    <VehicleDetailStyle>
      <h5>THÔNG TIN CHI TIẾT VỀ PHƯƠNG TIỆN NGHI VẤN</h5>
      <hr />
      <div className="vehicle-dt-body">
        <div className="vehicle-dt-header">
          <p>
            Ngày báo cáo:&emsp;<b></b>
          </p>
          <p>
            Biển kiểm soát:&emsp;<b>{phuongtienNV.BKS}</b>
          </p>
          <p>
            Địa điểm phát hiện:&emsp;<b>{phuongtienNV.DiaDiemPH}</b>
          </p>
          <p>
            Thời gian phát hiện:&emsp;
            <b>{handleTime(phuongtienNV.ThoiGianPH)}</b>
          </p>
          <p>
            Liên quan đến đối tượng:&emsp;
            <Link
              to={`/doituong/${phuongtienNV.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
            >
              <b>{phuongtienNV.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.TenDT}</b>
            </Link>
          </p>
          <p>Hình ảnh:</p>
          <Link
            to={phuongtienNV.HinhAnh}
            className="vehicle-dt-img"
            target="_blank"
          >
            <img alt="" src="/anqg.jpg" />
          </Link>
          <p>Trinh sát phát hiện:</p>
          <div className="vehicle-dt-tsth">
            {phuongtienNV.TSThucHiens?.map((cbcs: any, ind: number) => (
              <Fragment key={ind}>
                <Link to={`/cbcs/${cbcs.MaCBCS}`}>{cbcs.HoTen};</Link>
                <br/>
              </Fragment>
            ))}
          </div>
          <p>
            Trinh sát xác minh:&emsp;{" "}
            <Link
              to={`/cbcs/${phuongtienNV.BaoCaoKQXMDiaChi?.TSXacMinh?.MaCBCS}`}
            >
              {phuongtienNV.BaoCaoKQXMDiaChi?.TSXacMinh?.HoTen}
            </Link>
          </p>
        </div>

        <div className="vehicle-dt-result">
          <h6>KẾT QUẢ XÁC MINH:</h6>
          {/* <div className="vehicle-dt-result-header">
            <div>
              <p>
                Họ tên chủ hộ:&emsp;{" "}
                <b>{phuongtienNV.BaoCaoKQXMDiaChi?.HoTenChuHo}</b>
              </p>
              <p>
                Nơi ở:&emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.NoiO}</b>
              </p>
              <p>
                Quê quán:&emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.QueQuan}</b>
              </p>
            </div>
            <div>
              <p>
                Tên khác: &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.TenKhac}</b>
              </p>
              <p>
                Giới tính: &emsp;{" "}
                <b>
                  {phuongtienNV.BaoCaoKQXMDiaChi?.GioiTinh === 0 ? "Nam" : "Nữ"}
                </b>
              </p>
              <p>
                HKTT: &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.HKTT}</b>
              </p>
            </div>
            <div>
              <p>
                Năm sinh: &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.NamSinh}</b>
              </p>
              <p>
                Nghề nghiệp:&emsp;{" "}
                <b>{phuongtienNV.BaoCaoKQXMDiaChi?.NgheNghiep}</b>
              </p>
              <p>
                Chức vụ: &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.ChucVu}</b>
              </p>
            </div>
          </div>
          <div>
            <p>
              Nơi làm việc: &emsp;{" "}
              <b>{phuongtienNV.BaoCaoKQXMDiaChi?.NoiLamViec}</b>
            </p>
          </div>
          <h6>QUAN HỆ GIA ĐÌNH CỦA CHỦ HỘ:</h6>
          <p>
            &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.QuanHeGiaDinh}</b>
          </p>
          <h6>NHỮNG HỘ KHÁC CÙNG ĐỊA CHỈ (nếu có):</h6>
          <p>
            &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.HoKhacCungDC}</b>
          </p>
          <h6>BIỆN PHÁP XÁC MINH, NGUỒN TÀI LIỆU, NGƯỜI CUNG CẤP:</h6>
          <p>
            &emsp; <b>{phuongtienNV.BaoCaoKQXMDiaChi?.BienPhapXM}</b>
          </p> */}
        </div>
      </div>
    </VehicleDetailStyle>
  );
}
