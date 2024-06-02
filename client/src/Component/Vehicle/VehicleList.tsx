import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner, VehicleItem } from "..";
import { QUERY_phuongtienNVs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const VehicleListStyled = styled.div`
  .vehicle-ls-title {
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
    .vehicle-ls-tt-search {
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 700px;
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
  }
`;
export default function VehicleList() {
  const navigate = useNavigate();
  const { data: Data_phuongtienNVs, error } = useQuery(QUERY_phuongtienNVs, {
    variables: { utilsParams: {} },
  });
  const [phuongtienNVs, setPhuongtienNVs] = useState([]);


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
    if (Data_phuongtienNVs) {
      setPhuongtienNVs(Data_phuongtienNVs.phuongtienNVs);
    }
  }, [Data_phuongtienNVs]);

  const onFilterVehicle = (e: ChangeEvent<HTMLInputElement>) => {
    setPhuongtienNVs(
      handleSearch(
        "phuongtienNVs",
        Data_phuongtienNVs.phuongtienNVs,
        e.target.value
      )
    );
  };

  if (!Data_phuongtienNVs) return <Spinner />;
  return (
    <VehicleListStyled>
      <div className="vehicle-ls-title">
        <h5>DANH SÁCH CÁC PHƯƠNG TIỆN LIÊN QUAN TRONG CSDL</h5>
        <span>Số lượng: {phuongtienNVs.length} phương tiện liên quan</span>
        <div className="vehicle-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterVehicle}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo thời gian, địa điểm phát hiện, yêu cầu cụ thể, đối tượng liên quan, TS thực hiện"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="vehicle-ls-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Thời gian PH</th>
              <th scope="col">BKS</th>
              <th scope="col">Địa điểm PH</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Yêu cầu cụ thể</th>
              <th scope="col">Đối tượng liên quan</th>
              <th scope="col">TS thực hiện</th>
            </tr>
          </thead>
          <tbody>
            {phuongtienNVs.map((phuongtiennv: any, ind: number) => (
              <VehicleItem phuongtiennv={phuongtiennv} ind={ind} key={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </VehicleListStyled>
  );
}
