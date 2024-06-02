import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_chuyenans } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";
import Project from "./Project";

const CasStyled = styled.div`
  margin: 10px 0;
  .cas-title {
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
  .cas-search {
    display: flex;
    align-items: center;
    justify-content: space-around;
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
  .cas-list-crime {
    margin: 10px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`;
export default function ProjectList() {
  const navigate = useNavigate();
  const { data: Data_chuyenans, error } = useQuery(QUERY_chuyenans, {
    variables: {
      utilsParams: {},
    },
  });
  const [chuyenans, setChuyenans] = useState([]);

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
    if (Data_chuyenans) {
      setChuyenans(Data_chuyenans.chuyenans);
    }
  }, [Data_chuyenans]);

  const onFilterProject = (e: ChangeEvent<HTMLInputElement>) => {
    setChuyenans(
      handleSearch("chuyenans", Data_chuyenans.chuyenans, e.target.value)
    );
  };

  if (!chuyenans) return <Spinner />;
  return (
    <CasStyled>
      <div className="cas-title">
        <h5>DANH SÁCH CÁC CHUYÊN ÁN TRONG CSDL</h5>
        <span>Số lượng: {chuyenans.length} chuyên án</span>
      </div>
      <hr />
      <div className="cas-search">
        <form className="form-inline">
          <i className="fas fa-search"></i>
          <input
            onChange={onFilterProject}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Tìm theo bí số, tên, tính chất, năm của chuyên án ..."
            aria-label="Search"
          />
        </form>
      </div>

      <hr />
      <div className="cas-list-crime">
        {chuyenans.length === 0 ? (
          <span>
            CSDL về chuyên án trống{" "}
            <Link
              style={{ marginLeft: "10px" }}
              to="/nhaplieu/chuyenan"
              target="_blank"
            >
              Thêm chuyên án mới
            </Link>
          </span>
        ) : (
          chuyenans.map((ca: any, ind: number) => (
            <Project key={ind} ca={ca} ind={ind} />
          ))
        )}
      </div>
    </CasStyled>
  );
}
