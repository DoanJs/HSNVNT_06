import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function ProjectCrime({ doituongCA }: { doituongCA: any }) {
  return (
    <tr>
      <td>
        <Link
          to={`/doituong/${doituongCA.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {doituongCA.DoiTuong.TenDT}
        </Link>
      </td>
      <td>{doituongCA.BiSo}</td>
      <td>{handleTime(doituongCA.DoiTuong?.NgaySinh)}</td>
      <td>{doituongCA.DoiTuong?.NoiO}</td>
      <td>{`${doituongCA.DoiTuong?.CMND}/${doituongCA.DoiTuong?.CCCD}/${doituongCA.DoiTuong?.SHC}`}</td>
      <td>
        <i
          data-bs-toggle="modal"
          data-bs-target="#modal-change-drop"
          title="Đổi vai trò"
          className="fa-sharp fa-solid fa-money-bill-transfer me-4"
        ></i>
        <i
          data-bs-toggle="modal"
          data-bs-target="#modal-change-drop" //modal-delete-object
          title="Gỡ bỏ"
          className="fas fa-trash"
        ></i>
      </td>
    </tr>
  );
}
