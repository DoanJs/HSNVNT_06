import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { RecordItem, Spinner } from "..";
import { QUERY_baocaoKQGHs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const RecordListStyled = styled.div`
  .record-ls-title {
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
    .record-ls-tt-search {
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
export default function RecordList() {
  const navigate = useNavigate();
  const { data: Data_baocaoKQGHs, error } = useQuery(QUERY_baocaoKQGHs, {
    variables: { utilsParams: {} },
  });
  const [baocaoKQGHs, setBaocaoKQGHs] = useState([]);

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
    if (Data_baocaoKQGHs) {
      setBaocaoKQGHs(Data_baocaoKQGHs.baocaoKQGHs);
    }
  }, [Data_baocaoKQGHs]);

  const onFilterRecord = (e: ChangeEvent<HTMLInputElement>) => {
    setBaocaoKQGHs(
      handleSearch("baocaoKQGHs", Data_baocaoKQGHs.baocaoKQGHs, e.target.value)
    );
  };

  if (!Data_baocaoKQGHs) return <Spinner />;
  return (
    <RecordListStyled>
      <div className="record-ls-title">
        <h5>DANH SÁCH CÁC HÌNH ẢNH NGHIỆP VỤ TRONG CSDL</h5>
        <span>Số lượng: {baocaoKQGHs.length} hình ảnh nghiệp vụ</span>
        <div className="record-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterRecord}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo thời gian, địa điểm ghi hình, yêu cầu, đối tượng liên quan, TS thực hiện"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="record-ls-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Thời gian GH</th>
              <th scope="col">Địa Điểm GH</th>
              <th scope="col">Hình Ảnh</th>
              <th scope="col">Yêu cầu cụ thể</th>
              <th scope="col">Đối tượng liên quan</th>
              <th scope="col">TS thực hiện</th>
            </tr>
          </thead>
          <tbody>
            {baocaoKQGHs.map((baocaoKQGH: any, ind: number) => (
              <RecordItem key={ind} baocaoKQGH={baocaoKQGH} ind={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </RecordListStyled>
  );
}
