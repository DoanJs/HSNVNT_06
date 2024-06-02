import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CBCS, Spinner } from "..";
import { QUERY_cbcss } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";
import moment from "moment";

const CBCSStyled = styled.div`
  .users-title {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    h5 {
      font-weight: bold;
      color: red;
      margin: 0 4px 0 0;
    }
    span {
      font-weight: bold;
    }
  }
  h6 {
    text-align: center;
    color: blue;
  }
  .list-person-type {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .list-person-dropdow {
      p {
        cursor: pointer;
      }
    }
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 400px;
      }
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      padding-left: 16px;
      input {
        border: 1px solid #ffffff;
        box-shadow: none;
      }
      i {
        color: blue;
      }
    }
  }
  .users-handle {
    justify-content: center;
    margin: 20px 0;
  }
  tr {
    border: 1px solid black;
    text-align: center;
    th {
      border: 1px solid black;
    }
    td {
      text-align: left;
      border: 1px solid black;
    }
  }
  .list-file-btn {
    font-size: 20px;
    text-decoration: none;
    cursor: pointer;
  }
  .list-file-btn-details {
    color: #00cc00;
  }
  .list-file-btn-edit {
    color: #0069d9;
    margin: 0 10px;
  }
  .list-file-btn-delete {
    color: #dc3545;
  }
`;

export default function CBCSList() {
  const navigate = useNavigate();
  const { data: Data_cbcss, error } = useQuery(QUERY_cbcss, {
    variables: { utilsParams: {} },
  });
  const [cbcss, setCbcss] = useState([]);
  const [formInputDetails, setFormInputDetails] = useState({
    startDate: "",
    endDate: "",
    shortNamePlan: "",
    nameCBCS: "",
  });

  useEffect(() => {
    if (error) {
      showNotification(
        "Cảnh báo",
        "Hết phiên hoạt động. Vui lòng đăng nhập lại",
        "warning"
      );
      navigate("/dangnhap");
    }
    // eslint-disable-next-line
  }, [error]);

  useEffect(() => {
    if (Data_cbcss) {
      setCbcss(Data_cbcss.cbcss);
    }
  }, [Data_cbcss]);

  const onFilterCBCS = (e: ChangeEvent<HTMLInputElement>) => {
    setCbcss(handleSearch("cbcss", Data_cbcss.cbcss, e.target.value));
  };

  const onChangeFilterDetails = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInputDetails({
      ...formInputDetails,
      [e.target.name]: e.target.value,
    });
  };

  const onFilterDetails = () => {
    let newCbcss: any = [];
    let newCbcssPlan: any = [];
    let newCbcssNameCBCS: any = [];
    const startDate = moment(formInputDetails.startDate).format();
    const endDate = moment(formInputDetails.endDate).format();

    if (formInputDetails.startDate !== "" && formInputDetails.endDate !== "") {
      newCbcss = Data_cbcss.cbcss?.map((cbcs: any) => {
        return {
          ...cbcs,
          DanhGiaTSTHs: cbcs.DanhGiaTSTHs.filter(
            (obj: any) =>
              moment(obj.KetQuaTSNT?.ThoiGianBD).format() >= startDate &&
              moment(obj.KetQuaTSNT?.ThoiGianBD).format() < endDate
          ),
        };
      });
    } else {
      newCbcss = Data_cbcss.cbcss;
    }

    if (formInputDetails.shortNamePlan !== "") {
      newCbcssPlan = newCbcss?.map((cbcs: any) => {
        return {
          ...cbcs,
          DanhGiaTSTHs: cbcs.DanhGiaTSTHs.filter((obj: any) =>
            obj.KetQuaTSNT?.KeHoachTSNT?.QuyetDinhTSNT?.BiDanh?.toLowerCase().includes(
              formInputDetails.shortNamePlan
            )
          ),
        };
      });
    } else {
      newCbcssPlan = newCbcss;
    }

    if (formInputDetails.nameCBCS !== "") {
      newCbcssNameCBCS = newCbcssPlan?.filter((cbcs: any) =>
        cbcs.HoTen?.toLowerCase().includes(formInputDetails.nameCBCS)
      );
    } else {
      newCbcssNameCBCS = newCbcssPlan;
    }

    setCbcss(newCbcssNameCBCS);
  };

  if (!Data_cbcss) return <Spinner />;
  return (
    <CBCSStyled>
      <div className="users-title">
        <h5>DANH SÁCH CÁC CBCS TRONG CSDL</h5>
        <span>Số lượng: {cbcss.length} CBCS</span>
      </div>

      <div className="list-person-type">
        <form className="form-inline my-2 my-lg-0">
          <i className="fas fa-search"></i>
          <input
            onChange={onFilterCBCS}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tìm theo tên, bí danh, năm sinh của CBCS"
            aria-label="Search"
          />
        </form>
      </div>

      <div className="row users-handle d-flex align-items-center">
        <div className="col col-2">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Từ ngày:</label>
            <input
              onChange={onChangeFilterDetails}
              name="startDate"
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Đến ngày:</label>
            <input
              onChange={onChangeFilterDetails}
              name="endDate"
              type="date"
              className="form-control"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Tên yêu cầu:</label>
            <input
              onChange={onChangeFilterDetails}
              name="shortNamePlan"
              type="text"
              className="form-control"
            />
          </div>
        </div>
        <div className="col col-2">
          <div className="form-group d-flex flex-column align-items-center">
            <label>Tên CBCS</label>
            <input
              onChange={onChangeFilterDetails}
              name="nameCBCS"
              className="form-control mr-sm-2"
              type="search"
              placeholder="Nhập tên của CBCS"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="col col-1" style={{ placeSelf: "end" }}>
          <button
            onClick={onFilterDetails}
            className="btn btn-primary"
            type="button"
          >
            Lọc
          </button>
        </div>
      </div>
      <hr />

      <table className="table">
        <thead style={{ color: "#000000" }}>
          <tr>
            <th scope="col" style={{ lineHeight: 3 }}>
              Tên CBCS
            </th>
            <th scope="col" style={{ lineHeight: 3 }}>
              Số lượng
            </th>
            <th scope="col" style={{ lineHeight: 3 }}>
              Yêu cầu thực hiện
            </th>
            <th scope="col" style={{ lineHeight: 3, color: "green" }}>
              Yêu cầu biểu dương
            </th>
            <th scope="col" style={{ lineHeight: 3, color: "red" }}>
              Yêu cầu RKN
            </th>
          </tr>
        </thead>
        <tbody>
          {cbcss.length === 0 ? (
            <tr>
              <td colSpan={5} className="text-center">
                CSDL về CBCS trống!{" "}
                <Link style={{ marginLeft: "10px" }} to="/them/cbcs">
                  Thêm CBCS mới
                </Link>
              </td>
            </tr>
          ) : (
            cbcss.map((cbcs: any, ind: number) => (
              <CBCS key={ind} ind={ind} cbcs={cbcs} />
            ))
          )}
        </tbody>
      </table>
    </CBCSStyled>
  );
}
