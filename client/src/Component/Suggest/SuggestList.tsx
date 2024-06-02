import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner, SuggestItem } from "..";
import { QUERY_denghiTSNTs } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";

const SuggestListStyled = styled.div`
  .suggest-ls-title {
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
    .sg-ls-tt-search {
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
  //   h6 {
  //     text-align: center;
  //     color: blue;
  //   }
  //   .list-person-type {
  //     margin-bottom: 10px;
  //     display: flex;
  //     justify-content: space-around;
  //     align-items: center;
  //     .list-person-dropdow {
  //       p {
  //         cursor: pointer;
  //       }
  //     }
  //     form {
  //       display: flex;
  //       align-items: center;
  //       justify-content: center;
  //       input {
  //         width: 400px;
  //       }
  //       border: 1px solid #ced4da;
  //       border-radius: 0.25rem;
  //       padding-left: 16px;
  //       input {
  //         border: 1px solid #ffffff;
  //         box-shadow: none;
  //       }
  //       i {
  //         color: blue;
  //       }
  //     }
  //   }
  //   .users-handle {
  //     justify-content: center;
  //     margin: 20px 0;
  //   }
  //   tr {
  //     border: 1px solid black;
  //     text-align: center;
  //     th {
  //       border: 1px solid black;
  //     }
  //     td {
  //       text-align: left;
  //       border: 1px solid black;
  //     }
  //   }
  //   .list-file-btn {
  //     font-size: 20px;
  //     text-decoration: none;
  //     cursor: pointer;
  //   }
  //   .list-file-btn-details {
  //     color: #00cc00;
  //   }
  //   .list-file-btn-edit {
  //     color: #0069d9;
  //     margin: 0 10px;
  //   }
  //   .list-file-btn-delete {
  //     color: #dc3545;
  //   }
`;
export default function SuggestList() {
  const navigate = useNavigate();
  const { data: Data_denghiTSNTs, error } = useQuery(QUERY_denghiTSNTs, {
    variables: { utilsParams: {} },
  });
  const [denghiTSNTs, setDenghiTSNTs] = useState([]);

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
    if (Data_denghiTSNTs) {
      setDenghiTSNTs(Data_denghiTSNTs.denghiTSNTs);
    }
  }, [Data_denghiTSNTs]);

  const onFilterSuggest = (e: ChangeEvent<HTMLInputElement>) => {
    setDenghiTSNTs(
      handleSearch("denghiTSNTs", Data_denghiTSNTs.denghiTSNTs, e.target.value)
    );
  };

  if (!Data_denghiTSNTs) return <Spinner />;
  return (
    <SuggestListStyled>
      <div className="suggest-ls-title">
        <h5>DANH SÁCH CÁC ĐỀ NGHỊ TSNT TRONG CSDL</h5>
        <span>Số lượng: {denghiTSNTs.length} đề nghị trinh sát</span>
        <div className="sg-ls-tt-search">
          <form className="form-inline">
            <i className="fas fa-search"></i>
            <input
              onChange={onFilterSuggest}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Tìm theo số, ngày đề nghị, đơn vị giao, đối tượng"
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
              <th scope="col">Đơn vị giao</th>
              <th scope="col">Đối tượng</th>
              <th scope="col">Bắt đầu</th>
              <th scope="col">Kết thúc</th>
            </tr>
          </thead>
          <tbody>
            {denghiTSNTs.map((denghiTSNT: any, ind: number) => (
              <SuggestItem key={ind} denghiTSNT={denghiTSNT} ind={ind} />
            ))}
          </tbody>
        </table>
      </div>
    </SuggestListStyled>
  );
}
