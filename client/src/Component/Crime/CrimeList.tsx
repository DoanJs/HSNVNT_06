import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { QUERY_doituongs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";
import Crime from "./Crime";

const CrimeListStyled = styled.div`
  margin: 10px 0;
  .crimes-title {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  .crimes-search {
    display: flex;
    align-items: center;
    justify-content: space-around;
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      input {
        width: 450px;
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
  .crimes-list-crime {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export default function CrimeList() {
  const navigate = useNavigate()
  const { data: Data_doituongs, error } = useQuery(QUERY_doituongs, {
    variables: { utilsParams: {} },
  });
  const [doituongs, set_doituongs] = useState([]);

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
    if (Data_doituongs) {
      set_doituongs(Data_doituongs.doituongs);
    }
  }, [Data_doituongs]);

  const onFilterCrime = (e: ChangeEvent<HTMLInputElement>) => {
    set_doituongs(
      handleSearch("doituongs", Data_doituongs.doituongs, e.target.value)
    );
  };

  return (
    <CrimeListStyled>
      <div className="crimes-title">
        <h5>DANH SÁCH CÁC ĐỐI TƯỢNG TRONG CSDL</h5>
        <span>
          Số lượng: <b>{doituongs.length}</b> đối tượng
        </span>
      </div>
      <br />
      <div className="crimes-search">
        <form className="form-inline">
          <i className="fas fa-search"></i>
          <input
            onChange={onFilterCrime}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tìm theo tên, năm sinh, tính chất, địa chỉ của đối tượng"
            aria-label="Search"
          />
        </form>
      </div>

      <hr />
      <div className="crimes-list-crime">
        {doituongs.length === 0 ? (
          <span>
            CSDL đối tượng trống{" "}
            <Link style={{ marginLeft: "10px" }} to="/createCrime">
              Thêm đối tượng mới
            </Link>
          </span>
        ) : (
          doituongs?.map((crime: any, ind: number) => (
            <Crime key={ind} ind={ind} crime={crime} />
          ))
        )}
      </div>
    </CrimeListStyled>
  );
}
