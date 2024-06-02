import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function CBCSItemPlan({ obj }: { obj: any }) {
  return (
    <tr>
      <td
        title={
          handleTime(obj.KetQuaTSNT?.ThoiGianBD) +
          "-" +
          handleTime(obj.KetQuaTSNT?.ThoiGianKT)
        }
      >
        {handleTime(obj.KetQuaTSNT?.ThoiGianBD)}
      </td>
      <td>
        <b>
          <Link
            to={`/doituong/${obj.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
            target="_blank"
          >
            {obj.KetQuaTSNT?.QuyetDinhTSNT?.BiDanh}
          </Link>
        </b>
      </td>
      <td>
        <b>
          <Link
            to={`/doituong/${obj.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
            target="_blank"
          >
            {obj.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.TenDT}
          </Link>
        </b>
      </td>
      <td style={{ color: "#00bb00" }}>
        <b>{obj.DanhGia === "Biểu dương" ? obj.DanhGia : ""}</b>
      </td>
      <td style={{ color: "#ff0000" }}>
        <b>{obj.DanhGia === "RKN" ? obj.DanhGia : ""}</b>
      </td>
    </tr>
  );
}
