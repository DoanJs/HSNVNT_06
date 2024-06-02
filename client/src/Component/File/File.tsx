import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_cbcss } from "../../graphql/documentNode";
import { showNotification } from "../../utils/functions";

const FileStyled = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
  .card {
    text-decoration: none;
    box-shadow: 1px 1px 10px 3px gray;
    width: 300px;
    img {
      height: 200px;
      width: 300px;
      object-fit: cover;
    }
    .card-body {
      .card-title {
        color: black;
        text-align: center;
      }
    }
  }
`;
export default function File() {
  const navigate = useNavigate();
  const { data: Data_cbcss, error } = useQuery(QUERY_cbcss, {
    variables: { utilsParams: {} },
  });

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

  if (!Data_cbcss) return <Spinner />;
  return (
    <FileStyled>
      <Link to="anqg" className="card">
        <img src="anqg.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            Hồ sơ theo dõi các đối tượng xâm phạm ANQG
          </h5>
        </div>
      </Link>
      <Link to="khac" className="card">
        <img src="khac.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Hồ sơ theo dõi các đối tượng khác</h5>
        </div>
      </Link>
    </FileStyled>
  );
}