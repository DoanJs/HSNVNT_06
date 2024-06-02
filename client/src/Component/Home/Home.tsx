import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Spinner } from "..";
import { QUERY_cbcss } from "../../graphql/documentNode";
import { showNotification } from "../../utils/functions";

export const HomeStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url("/home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 690px;
  padding: 20px;
  .home-left,
  .home-right {
    margin-top: 50px;
    color: #ffffff;
    padding: 8px;
  }
  .home-right {
    padding-left: 50px;
  }
  h1 {
    text-align: center;
    margin: 20px;
    color: red;
  }
  h3 {
    color: yellow;
    text-align: center;
    margin-bottom: 20px;
  }
  .icon-danang {
    display: flex;
    justify-content: center;
    img {
      height: 150px;
      width: 150px;
      object-fit: cover;
    }
  }
`;

export default function Home() {
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
    <HomeStyle>
      <div>
        <h1>PHẦN MỀM QUẢN LÝ HỒ SƠ NGHIỆP VỤ NGOẠI TUYẾN</h1>
        <h3>
          Chào mừng CBCS đến tra cứu, khai thác thông tin nghiệp vụ từ hệ thống
          Cơ sở dữ liệu
          <br /> thuộc đơn vị PA06 - CATP Đà Nẵng{" "}
        </h3>
      </div>
      <div className="icon-danang">
        <img alt="" src="danang.webp" />
      </div>
      <div className="row">
        <div className="col col-6 home-left">
          <h4>CBCS CẦN CHÚ Ý:</h4>
          <p>
            1. Nghiêm cấm sử dụng USB 3G/4G, wifi, điện thoại thông minh, các
            thiết bị kết nối Internet...kết nối vào mạng nội bộ hoặc máy tính
            lưu trữ dữ liệu có độ mật
          </p>
          <p>
            2. Nghiêm cấm sử dụng USB, ổ cứng di động, thiết bị lưu trữ để
            chuyển dữ liệu giữa các máy tính nghiệp vụ và giữa máy tính nghiệp
            vụ với máy tính Internet
          </p>
          <p>
            3. Mọi hoạt động của CBCS trên phần mềm đều được theo dõi và lưu vào
            Cơ sở dữ liệu, CBCS phải chịu trách nhiệm về hành động của mình nếu
            vi phạm
          </p>
        </div>
        <div className="col col-6 home-right">
          <h4>MỌI THÔNG TIN CHI TIẾT VUI LÒNG LIÊN HỆ TỔ IT:</h4>
          <p>1. Đồng chí Trịnh Duy Tú - Quản lý chung</p>
          <p>2. Đồng chí Đoàn Viết Hùng - Admin</p>
          <p>
            3. Đồng chí Phan Đình Sơn - Phụ trách CSDL Đội Theo dõi các đối
            tượng xâm phạm ANQG
          </p>
          <p>
            4. Đồng chí Đào Minh Tuấn - Phụ trách CSDL Đội Theo dõi các đối
            tượng xâm phạm ANQG
          </p>
          <p>
            5. Đồng chí Hà Duy Trinh - Phụ trách CSDL Đội Theo dõi các đối tượng
            khác
          </p>
        </div>
      </div>
    </HomeStyle>
  );
}
