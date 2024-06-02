import { useMutation, useReactiveVar } from "@apollo/client";
import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { accountLoginVar } from "../../graphql/client/cache";
import { MUTATION_getData_searchFast } from "../../graphql/documentNode";
import { MenuLink, showNotification } from "../../utils/functions";
import { routeNavbar } from "../../utils/variable";
import NavbarSearchItem from "./NavbarSearchItem";

const NavbarStyle = styled.nav`
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  #navbarSupportedContent {
    display: flex;
    justify-content: space-between;
  }
  .navbar-search-fast {
    position: relative;
    form {
      input {
        width: 300px;
      }
    }
    .navbar-result-search::-webkit-scrollbar,
    .history-search-fast::-webkit-scrollbar {
      background-color: #e4e6eb;
      width: 4px;
    }
    .navbar-result-search::-webkit-scrollbar-thumb,
    .history-search-fast::-webkit-scrollbar-thumb {
      background-color: #007bff;
      border-radius: 10px;
    }
    .navbar-result-search {
      border: 1px solid green;
      border-radius: 8px;
      background: silve;
      max-height: 500px;
      overflow-y: scroll;
      h6 {
        color: green;
        text-align: center;
      }
      position: absolute;
      top: 47px;
      background: #ffffff;
      width: 100%;
      padding: 6px;
      a:hover {
        color: blue;
      }
    }
  }
  .navbar-profile {
    cursor: pointer;
    img {
      height: 38px;
      width: 38px;
      object-fit: cover;
      border: 1px solid red;
      border-radius: 100%;
    }
  }
`;
export default function Navbar() {
  const navigate = useNavigate();
  const accountLogin = useReactiveVar(accountLoginVar);
  const [getData_searchFast, { data }] = useMutation(
    MUTATION_getData_searchFast
  );
  const [keySearchFast, setKeySearchFast] = useState("");
  const [searchFasts, setSearchFasts]: [searchFasts: any, setSearchFasts: any] =
    useState([]);

  const changeSearchFast = (e: ChangeEvent<HTMLInputElement>) => {
    setKeySearchFast(e.target.value);
  };

  const submitSearchFast = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getData_searchFast({
      variables: {
        keySearch: keySearchFast,
      },
      onCompleted: (data) => {
        setSearchFasts(data.getData_searchFast);
      },
      onError: (error) => {
        showNotification("Lỗi!", error.message, "danger");
        navigate('/dangnhap');
      },
    });
  };

  return (
    <NavbarStyle className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Trang chủ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {routeNavbar.routeLeft.map((item, ind: number) => {
              return <MenuLink key={ind} to={item.to} children={item.label} />;
            })}
          </ul>
          <ul className="navbar-nav navbar-search-fast me-auto mb-2 mb-lg-0">
            <form className="d-flex" onSubmit={submitSearchFast}>
              <input
                onChange={changeSearchFast}
                className="form-control me-2"
                type="search"
                placeholder="Tìm kiếm nhanh..."
                aria-label="Search"
              />
            </form>

            {keySearchFast.trim() !== "" && (
              <div className="navbar-result-search">
                <div className="list-group">
                  {searchFasts.length === 0 && data === undefined ? (
                    <h6>
                      Bạn đang tìm kiếm "
                      <b style={{ color: "red" }}>{keySearchFast}</b>"?
                    </h6>
                  ) : (
                    <>
                      <h6>
                        Js: Có{" "}
                        <b style={{ color: "red" }}>{searchFasts.length}</b> kết
                        quả trùng khớp
                      </h6>
                      {searchFasts.map((obj: any, ind: number) => (
                        <NavbarSearchItem key={ind} obj={obj} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            )}
          </ul>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TSNT
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                {routeNavbar.routeDropdownMenu.map((item: any, ind: number) => {
                  return (
                    <li key={ind}>
                      <Link to={item.to} className="dropdown-item">
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
                <li className="dropdown-divider"></li>
                <li>
                  <a className="dropdown-item" href="/">
                    Js
                  </a>
                </li>
              </ul>
            </li>
            {routeNavbar.routeMiddle.map((item, ind: number) => {
              return <MenuLink key={ind} to={item.to} children={item.label} />;
            })}
          </ul>
          <ul className="navbar-nav">
            {" "}
            {routeNavbar.routeRight.map((item, ind: number) => {
              return <MenuLink key={ind} to={item.to} children={item.label} />;
            })}
            {accountLogin ? (
              <Link
                to={`/taikhoan/${accountLogin.AccountID}`}
                className="navbar-profile"
                title={accountLogin.Username}
              >
                <img src="/dangnhap.jpg" alt=".." />
              </Link>
            ) : (
              <Link to="/dangnhap" type="button" className="btn btn-success">
                Đăng nhập
              </Link>
            )}
          </ul>
        </div>
      </div>
    </NavbarStyle>
  );
}
