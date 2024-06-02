import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RelationItem, Spinner } from "..";
import { QUERY_baocaoPHQHs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const RelationListStyled = styled.div`
  .rela-ls-title {
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
    .rela-ls-tt-search {
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
export default function RelationList() {
  const navigate = useNavigate();
  const { data: Data_baocaoPHQHs, error } = useQuery(QUERY_baocaoPHQHs, {
    variables: { utilsParams: {} },
  });
  const [baocaoPHQHs, setBaocaoPHQHs] = useState([]);

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
    if (Data_baocaoPHQHs) {
      setBaocaoPHQHs(Data_baocaoPHQHs.baocaoPHQHs);
    }
  }, [Data_baocaoPHQHs]);

  const onFilterRelation = (e: ChangeEvent<HTMLInputElement>) => {
    setBaocaoPHQHs(
      handleSearch("baocaoPHQHs", Data_baocaoPHQHs.baocaoPHQHs, e.target.value)
    );
  };

  if (!Data_baocaoPHQHs) return <Spinner />;
  return (
    <RelationListStyled>
      <div className="rela-ls-title">
        <h5>DANH SÁCH CÁC QUAN HỆ NGHI VẤN TRONG CSDL</h5>
        <span>Số lượng: {baocaoPHQHs.length} quan hệ nghi vấn</span>
        <div className="rela-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterRelation}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo thời gian, địa điểm phát hiện, địa chỉ, yêu cầu, đối tượng liên quan, TS thực hiện"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="rela-ls-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Thời gian PH</th>
              <th scope="col">Địa Điểm PH</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Địa chỉ cuối cùng</th>
              <th scope="col">Yêu cầu cụ thể</th>
              <th scope="col">Đối tượng liên quan</th>
              <th scope="col">TS thực hiện</th>
            </tr>
          </thead>
          <tbody>
            {baocaoPHQHs.map((baocaoPHQH: any, ind: number) => (
              <RelationItem key={ind} baocaoPHQH={baocaoPHQH} ind={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </RelationListStyled>
  );
}
