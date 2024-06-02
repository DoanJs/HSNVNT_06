import { useQuery } from "@apollo/client";
import moment from "moment";
import { ChangeEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CBCSItemPlan, CBCSItemRecord, CBCSItemRelation, Spinner } from "..";
import { QUERY_cbcs } from "../../graphql/documentNode";
import {
  handleDanhGiaTSTH,
  handleTime,
  handleValueSame,
} from "../../utils/functions";
import CBCSItemPlace from "./CBCSItemPlace";
import CBCSItemVehicle from "./CBCSItemVehicle";

const CBCSItemStyled = styled.div`
  h5,
  h6 {
    text-align: center;
    color: red;
    font-weight: bold;
  }
  .userDetails-info {
    label {
      color: #007bff;
      font-weight: bold;
      margin-right: 20px;
    }
    .flag {
      height: 30px;
      width: 50px;
      display: flex;
      justify-content: center;
      position: relative;
      ::before {
        content: "";
        height: 20px;
        width: 20px;
        border-radius: 100%;
        top: 4px;
        left: 15px;
        position: absolute;
      }
    }
    .flag-red-yellow {
      background: red;
      ::before {
        background: yellow;
      }
    }
    .flag-red-red {
      background: red;
      ::before {
        background: red;
      }
    }
    .flag-red-blue {
      background: red;
      ::before {
        background: blue;
      }
    }
    .flag-blue-blue {
      background: blue;
      ::before {
        background: blue;
      }
    }
    .head-flag {
      th {
        text-align: -webkit-center;
      }
    }
    .body-flag {
      td {
        text-align: center;
      }
    }
  }
  .userDetails-handle {
    justify-content: center;
    margin: 20px 0;
  }
  .userDetails-note {
    height: 250px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      background-color: #e4e6eb;
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #007bff;
      border-radius: 10px;
    }
  }
  .userDetails-edit {
    position: fixed;
    top: 136px;
    right: 6px;
  }
  .fa-trash {
    position: fixed;
    top: 180px;
    right: 45px;
    color: red;
    cursor: pointer;
  }
`;
export default function CBCSItem() {
  const { id } = useParams();
  const { data: Data_cbcs } = useQuery(QUERY_cbcs, {
    variables: { id: Number(id) },
  });
  const [cbcs, setCBCS]: [cbcs: any, setCBCS: any] = useState(null);

  useEffect(() => {
    if (Data_cbcs) {
      console.log(Data_cbcs.cbcs);
      setCBCS({ ...Data_cbcs.cbcs });
    }
  }, [Data_cbcs]);

  const [formInputTime, setFormInputTime] = useState({
    startDate: "",
    endDate: "",
  });

  const onChangeFilterTime = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputTime({
      ...formInputTime,
      [e.target.name]: e.target.value,
    });
  };

  const onFilterTime = () => {
    if (formInputTime.endDate !== "" && formInputTime.startDate !== "") {
      const startDate = moment(formInputTime.startDate).format();
      const endDate = moment(formInputTime.endDate).format();
      const newPlans = cbcs.DanhGiaTSTHs.filter(
        (plan: any) =>
          plan.KetQuaTSNT?.ThoiGianBD >= startDate &&
          plan.KetQuaTSNT?.ThoiGianBD <= endDate
      );
      const newRelations = cbcs.TSThucHien_BaoCaoPHQHs.filter(
        (rela: any) => rela.Ngay >= startDate && rela.Ngay <= endDate
      );
      const newPlaces = cbcs.TSThucHien_DiaChiNVs.filter(
        (place: any) =>
          place.ThoiGianPH >= startDate && place.ThoiGianPH <= endDate
      );
      const newVehicles = cbcs.TSThucHien_PhuongTienNVs.filter(
        (vehicle: any) =>
          vehicle.ThoiGianPH >= startDate && vehicle.ThoiGianPH <= endDate
      );
      const newRecords = cbcs.TSThucHien_BaoCaoKQGHs.filter(
        (record: any) => record.Ngay >= startDate && record.Ngay <= endDate
      );
      //   const NewDetails = newUser.details.filter(
      //     (text: string) =>
      //       text.indexOf(String(moment(form.startDate).year())) !== -1
      //   );
      setCBCS({
        ...cbcs,
        DanhGiaTSTHs: newPlans,
        TSThucHien_BaoCaoPHQHs: newRelations,
        TSThucHien_DiaChiNVs: newPlaces,
        TSThucHien_PhuongTienNVs: newVehicles,
        TSThucHien_BaoCaoKQGHs: newRecords,
        // details: NewDetails,
      });
    }
  };

  if (!cbcs) return <Spinner />;
  return (
    <CBCSItemStyled>
      <h5>THÔNG TIN CHI TIẾT VỀ CBCS</h5>
      <br />
      <div className="row userDetails-info">
        <div className="col col-12">
          <div className="row">
            <div className="col col-4">
              <div className="mb-3">
                <label>Họ và tên: </label>
                <b>{cbcs.HoTen}</b>
              </div>
              <div className="mb-3">
                <label>Tên khác: </label>
                <b>{cbcs.TenKhac}</b>
              </div>
            </div>
            <div className="col col-4">
              <div className="mb-3">
                <label>Ngày sinh: </label>
                <b>{handleTime(cbcs.NgaySinh)}</b>
              </div>
              <div className="mb-3">
                <label>Giới tính: </label>
                <b>{cbcs.GioiTinh === 0 ? "Nam" : "Nữ"}</b>
              </div>
            </div>
            <div className="col col-4">
              <div className="mb-3">
                <label>Đội: </label>
                <b>{cbcs.Doi?.TenDoi}</b>
              </div>
              <div className="mb-3">
                <label>Chức vụ: </label>
                <b>{cbcs.ChucVu?.ChucVu}</b>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-12">
          <div className="mb-3">
            <label>
              Điểm nổi bật:
              <b style={{ color: "red", marginLeft: "10px" }}>
                {/* {newUser?.details.length} */}
              </b>
            </label>
            <br />
            <div className="userDetails-note">
              {/* {
                newUser?.details.length > 0 && handleEnterRow_BOTConnect(newUser.details.join(";"), true)
              } */}
            </div>
          </div>
        </div>
        <hr />
      </div>
      <h6>LỌC THÔNG TIN THEO THỜI GIAN CỤ THỂ</h6>
      <div className="row userDetails-handle d-flex align-items-center">
        <div className="col col-2">
          <div className="mb-3 d-flex flex-column align-items-center">
            <label>Từ ngày:</label>
            <input
              onChange={onChangeFilterTime}
              name="startDate"
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="mb-3 d-flex flex-column align-items-center">
            <label>Đến ngày:</label>
            <input
              onChange={onChangeFilterTime}
              name="endDate"
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="col col-2">
          <button
            onClick={onFilterTime}
            className="btn btn-primary"
            type="button"
          >
            Lọc
          </button>
        </div>
      </div>
      <hr />
      <h6>
        YÊU CẦU TRINH SÁT{" "}
        <i style={{ color: "#000000" }}>({cbcs.DanhGiaTSTHs?.length} lượt)</i>
      </h6>
      <table className="table" style={{ marginBottom: "50px" }}>
        <thead>
          <tr>
            <th scope="col">Thời gian</th>
            <th scope="col">Yêu cầu</th>
            <th scope="col">Đối tượng</th>
            <th scope="col">Biểu dương</th>
            <th scope="col">RKN</th>
          </tr>
          <tr>
            <th scope="col">
              <i>Số lượng:</i>
            </th>
            <th scope="col">{cbcs.DanhGiaTSTHs?.length}</th>
            <th scope="col">
              {handleValueSame("DanhGiaTSTH", cbcs.DanhGiaTSTHs).length}
            </th>
            <th scope="col">
              {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrBD?.length}
            </th>
            <th scope="col">
              {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrRKN?.length}
            </th>
          </tr>
        </thead>
        <tbody>
          {cbcs.DanhGiaTSTHs?.length > 0 ? (
            cbcs.DanhGiaTSTHs?.map((obj: any, ind: number) => (
              <CBCSItemPlan key={ind} obj={obj} />
            ))
          ) : (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                <i>CBCS chưa thực hiện yêu cầu trinh sát nào!</i>
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <h6>
        QUAN HỆ ĐƯỢC PHÁT HIỆN{" "}
        <i style={{ color: "#000000" }}>
          ({cbcs.TSThucHien_BaoCaoPHQHs?.length} lượt)
        </i>
      </h6>
      <table className="table" style={{ marginBottom: "50px" }}>
        <thead>
          <tr>
            <th scope="col">Thời gian</th>
            <th scope="col">Tên quan hệ</th>
            <th scope="col">Tên yêu cầu</th>
            <th scope="col">Tên đối tượng</th>
            <th scope="col">TS thực hiện</th>
          </tr>
          <tr>
            <th scope="col">
              <i>Số lượng:</i>
            </th>
            <th scope="col">{cbcs.TSThucHien_BaoCaoPHQHs?.length}</th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_BaoCaoPHQHs-BiDanhYC",
                  cbcs.TSThucHien_BaoCaoPHQHs
                ).length
              }
            </th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_BaoCaoPHQHs-TenDT",
                  cbcs.TSThucHien_BaoCaoPHQHs
                ).length
              }
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cbcs.TSThucHien_BaoCaoPHQHs?.map((obj: any, ind: number) => (
            <CBCSItemRelation key={ind} obj={obj} />
          ))}
        </tbody>
      </table>

      <h6>
        HÌNH ẢNH NGHIỆP VỤ ĐƯỢC GHI NHẬN{" "}
        <i style={{ color: "#000000" }}>
          ({cbcs.TSThucHien_BaoCaoKQGHs?.length} lượt)
        </i>
      </h6>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Thời gian</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên yêu cầu</th>
            <th scope="col">Tên đối tượng</th>
            <th scope="col">TS thực hiện</th>
          </tr>
          <tr>
            <th scope="col">
              <i>Số lượng:</i>
            </th>
            <th scope="col">{cbcs.TSThucHien_BaoCaoKQGHs?.length}</th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_BaoCaoKQGHs-BiDanhYC",
                  cbcs.TSThucHien_BaoCaoKQGHs
                ).length
              }
            </th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_BaoCaoKQGHs-TenDT",
                  cbcs.TSThucHien_BaoCaoKQGHs
                ).length
              }
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cbcs.TSThucHien_BaoCaoKQGHs?.map((obj: any, ind: number) => (
            <CBCSItemRecord key={ind} obj={obj} />
          ))}
        </tbody>
      </table>

      <h6>
        PHƯƠNG TIỆN ĐƯỢC PHÁT HIỆN{" "}
        <i style={{ color: "#000000" }}>
          ({cbcs.TSThucHien_PhuongTienNVs?.length} lượt)
        </i>
      </h6>
      <table className="table" style={{ marginBottom: "50px" }}>
        <thead>
          <tr>
            <th scope="col">Thời gian</th>
            <th scope="col">BKS</th>
            <th scope="col">Địa điểm</th>
            <th scope="col">Tên yêu cầu</th>
            <th scope="col">Tên đối tượng</th>
            <th scope="col">TS thực hiện</th>
          </tr>
          <tr>
            <th scope="col">
              <i>Số lượng:</i>
            </th>
            <th scope="col">{cbcs.TSThucHien_PhuongTienNVs.length}</th>
            <th scope="col"></th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_PhuongTienNVs-BiDanhYC",
                  cbcs.TSThucHien_PhuongTienNVs
                ).length
              }
            </th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_PhuongTienNVs-TenDT",
                  cbcs.TSThucHien_PhuongTienNVs
                ).length
              }
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cbcs.TSThucHien_PhuongTienNVs.map((obj: any, ind: number) => (
            <CBCSItemVehicle key={ind} obj={obj} />
          ))}
        </tbody>
      </table>

      <h6>
        ĐỊA CHỈ ĐƯỢC PHÁT HIỆN
        <i style={{ color: "#000000" }}>
          ({cbcs.TSThucHien_DiaChiNVs?.length} lượt)
        </i>
      </h6>
      <table className="table" style={{ marginBottom: "50px" }}>
        <thead>
          <tr>
            <th scope="col">Thời gian</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên yêu cầu</th>
            <th scope="col">Tên đối tượng</th>
            <th scope="col">TS thực hiện</th>
          </tr>
          <tr>
            <th scope="col">
              <i>Số lượng:</i>
            </th>
            <th scope="col">{cbcs.TSThucHien_DiaChiNVs?.length}</th>
            <th scope="col"> </th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_DiaChiNVs-BiDanhYC",
                  cbcs.TSThucHien_DiaChiNVs
                ).length
              }
            </th>
            <th scope="col">
              {
                handleValueSame(
                  "TSThucHien_DiaChiNVs-TenDT",
                  cbcs.TSThucHien_DiaChiNVs
                ).length
              }
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cbcs.TSThucHien_DiaChiNVs?.map((obj: any, ind: number) => (
            <CBCSItemPlace key={ind} obj={obj} />
          ))}
        </tbody>
      </table>
    </CBCSItemStyled>
  );
}
