import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_quyetdinhTSNTs } from "../../graphql/documentNode";
import {
  Filter_Data,
  handleSearch,
  showNotification,
} from "../../utils/functions";
import FileItem from "./FileItem";

const FileListStyled = styled.div`
  .fl-header {
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .fl-header-top {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .fl-header-bottom {
      display: flex;
      justify-content: space-between;
      width: 100%;
      form {
        input {
          width: 300px;
        }
      }
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      span {
        color: black;
        margin-left: 8px;
      }
    }
    .fl-title {
      color: red;
    }
  }
  .list-group-item {
    :hover {
      cursor: pointer;
    }
    h6 {
      margin: 0 4px;
    }
    input {
      display: none;
    }
    .fl-gr-title {
      display: flex;
      justify-content: space-between;
      .fl-gr-header {
        display: flex;
        align-items: center;
      }
    }
    .fl-gr-content {
      a {
        text-decoration: none;
        li:hover {
          background: #0d6efd;
          color: white;
        }
      }
    }
    .fl-gr-content,
    .fl-gr-header-down {
      display: none;
    }
    input:checked ~ .fl-gr-content {
      display: block;
    }
    input:checked ~ .fl-gr-title {
      .fl-gr-header-right {
        display: none;
      }
      .fl-gr-header-down {
        display: block;
      }
    }
  }
`;
export default function FileList() {
  const { category } = useParams();
  const navigate = useNavigate();
  const { data: Data_quyetdinhTSNTs, error } = useQuery(QUERY_quyetdinhTSNTs, {
    variables: {
      utilsParams: {},
    },
  });
  const [quyetdinhTSNTs, set_quyetdinhTSNTs] = useState([]);

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
    if (Data_quyetdinhTSNTs) {
      set_quyetdinhTSNTs(
        Filter_Data(category, Data_quyetdinhTSNTs.quyetdinhTSNTs)
      );
    }
  }, [Data_quyetdinhTSNTs, category]);

  const onFilterFile = (e: ChangeEvent<HTMLInputElement>) => {
    set_quyetdinhTSNTs(
      handleSearch(
        "files",
        Filter_Data(category, Data_quyetdinhTSNTs.quyetdinhTSNTs),
        e.target.value
      )
    );
  };

  if (!Data_quyetdinhTSNTs) return <Spinner />;
  return (
    <FileListStyled>
      <div className="fl-header">
        <div className="fl-header-top">
          <h4 className="fl-title">
            {category === "anqg"
              ? "HỒ SƠ THEO DÕI CÁC ĐỐI TƯỢNG XÂM PHẠM AN NINH QUỐC GIA"
              : "HỒ SƠ THEO DÕI CÁC ĐỐI TƯỢNG KHÁC"}
          </h4>
          <i>
            Số lượng: <b>{Filter_Data(category, quyetdinhTSNTs).length} </b>
            Hồ sơ
          </i>
        </div>
        <br />
        <div className="fl-header-bottom">
          <form>
            <input
              onChange={onFilterFile}
              className="form-control me-2"
              type="search"
              placeholder="Tìm kiếm nhanh theo bí danh..."
              aria-label="Search"
            />
          </form>
          <Link to={`/hoso/${category === "anqg" ? "khac" : "anqg"}`}>
            <i>
              &#8594;
              {category !== "anqg"
                ? "Hồ sơ theo dõi các đối tượng xâm phạm ANQG"
                : "Hồ sơ theo dõi các đối tượng khác"}
            </i>
          </Link>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        {quyetdinhTSNTs.map((obj: any, ind: number) => (
          <FileItem key={ind} obj={obj} ind={ind} />
        ))}
      </ul>
    </FileListStyled>
  );
}
