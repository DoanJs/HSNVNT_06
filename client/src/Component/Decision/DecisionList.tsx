import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { DecisionItem, Spinner } from "..";
import { QUERY_quyetdinhTSNTs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const DecisionListStyled = styled.div`
  .decision-ls-title {
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
    .decision-ls-tt-search {
      margin: 20px 0;
      display: flex;
      align-items: center;
      justify-content: space-around;
      form {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          width: 600px;
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
export default function DecisionList() {
  const navigate = useNavigate();
  const { data: Data_quyetdinhTSNTs, error } = useQuery(QUERY_quyetdinhTSNTs, {
    variables: { utilsParams: {} },
  });
  const [quyetdinhTSNTs, setQuyetdinhTSNTs] = useState([]);

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
      setQuyetdinhTSNTs(Data_quyetdinhTSNTs.quyetdinhTSNTs);
    }
  }, [Data_quyetdinhTSNTs]);

  const onFilterDecision = (e: ChangeEvent<HTMLInputElement>) => {
    setQuyetdinhTSNTs(
      handleSearch(
        "quyetdinhTSNTs",
        Data_quyetdinhTSNTs.quyetdinhTSNTs,
        e.target.value
      )
    );
  };

  if (!Data_quyetdinhTSNTs) return <Spinner />;
  return (
    <DecisionListStyled>
      <div className="decision-ls-title">
        <h5>DANH SÁCH CÁC QUYẾT ĐỊNH TSNT TRONG CSDL</h5>
        <span>Số lượng: {quyetdinhTSNTs.length} quyết định trinh sát</span>
        <div className="decision-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterDecision}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo số, ngày quyết định, đối tượng, bí danh, thời gian bắt đầu, kết thúc TS"
              aria-label="Search"
            />
          </form>
        </div>
      </div>
      <hr />

      <div className="suggest-ls-body">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Số</th>
              <th scope="col">Ngày</th>
              <th scope="col">Đối tượng</th>
              <th scope="col">Bí danh</th>
              <th scope="col">Bắt đầu TS</th>
              <th scope="col">Kết thúc TS</th>
            </tr>
          </thead>
          <tbody>
            {quyetdinhTSNTs.map((quyetdinhTSNT: any, ind: number) => (
              <DecisionItem key={ind} quyetdinhTSNT={quyetdinhTSNT} ind={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </DecisionListStyled>
  );
}
