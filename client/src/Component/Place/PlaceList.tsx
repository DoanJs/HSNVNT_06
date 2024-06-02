import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PlaceItem, Spinner } from "..";
import { QUERY_diachiNVs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const PlaceListStyled = styled.div`
  .place-ls-title {
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
    .place-ls-tt-search {
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
export default function PlaceList() {
  const navigate = useNavigate();
  const { data: Data_diachiNVs, error } = useQuery(QUERY_diachiNVs, {
    variables: { utilsParams: {} },
  });
  const [diachiNVs, setDiachiNVs] = useState([]);

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
    if (Data_diachiNVs) {
      setDiachiNVs(Data_diachiNVs.diachiNVs);
    }
  }, [Data_diachiNVs]);

  const onFilterPlace = (e: ChangeEvent<HTMLInputElement>) => {
    setDiachiNVs(
      handleSearch("diachiNVs", Data_diachiNVs.diachiNVs, e.target.value)
    );
  };

  if (!Data_diachiNVs) return <Spinner />;
  return (
    <PlaceListStyled>
      <div className="place-ls-title">
        <h5>DANH SÁCH CÁC ĐỊA CHỈ NGHI VẤN TRONG CSDL</h5>
        <span>Số lượng: {diachiNVs.length} địa chỉ nghi vấn</span>
        <div className="place-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterPlace}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo thời gian, địa điểm phát hiện, yêu cầu cụ thể, đối tượng liên quan, TS thực hiện"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="place-ls-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Thời gian PH</th>
              <th scope="col">Địa chỉ</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Yêu cầu cụ thể</th>
              <th scope="col">Đối tượng liên quan</th>
              <th scope="col">TS thực hiện</th>
            </tr>
          </thead>
          <tbody>
            {diachiNVs.map((diachinv: any, ind: number) => (
              <PlaceItem diachinv={diachinv} ind={ind} key={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </PlaceListStyled>
  );
}
