import { useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_cbcss } from "../../graphql/documentNode";
import { handleSearch, showNotification } from "../../utils/functions";
import { CSDLInput } from "../../utils/variable";
import InputButton from "./InputButton";

const InputListStyled = styled.div`
  .ip-ls-title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h5 {
      font-weight: bold;
      color: red;
      margin: 0 4px 0 0;
    }
    span {
      font-weight: bold;
    }
  }
  .ip-ls-search {
    display: flex;
    justify-content: flex-start;
    i {
      font-size: 40px;
      color: red;
      margin: 0 4px;
    }
    input {
      width: 300px;
    }
    .ip-ls-search-result {
      display: flex;
      a {
        margin: 0 4px;
      }
    }
  }
  .ip-ls-body {
    a {
      margin: 4px;
    }
  }
`;
export default function InputList() {
  const navigate = useNavigate();
  const { data: Data_cbcss, error } = useQuery(QUERY_cbcss, {
    variables: { utilsParams: {} },
  });
  const [DataInput, setDataInput] = useState([]);

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
    setDataInput(CSDLInput as never[]);
  }, []);

  const onHandleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setDataInput(handleSearch("nhaplieu", CSDLInput, e.target.value));
  };

  if (!Data_cbcss) return <Spinner />;
  return (
    <InputListStyled>
      <div className="ip-ls-title">
        <h5>DANH SÁCH MỤC NHẬP LIỆU CSDL MỚI</h5>
        <span>
          Số lượng: <b>{DataInput.length}</b> mục
        </span>
        <br />
      </div>
      <div className="ip-ls-search">
        <form className="d-flex">
          <input
            onChange={onHandleSearch}
            className="form-control me-2"
            type="search"
            placeholder="Tìm nhanh CSDL cần thêm mới..."
            aria-label="Search"
          />
        </form>
      </div>
      <hr />
      <div className="ip-ls-body">
        {[1, 2, 3, 4, 5, 6, 7].map((cap: any, ind: number) => (
          <InputButton key={ind} cap={cap} array={DataInput} />
        ))}
      </div>
    </InputListStyled>
  );
}
