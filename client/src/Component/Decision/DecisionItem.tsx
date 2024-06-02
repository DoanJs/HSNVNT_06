import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function DecisionItem({
  quyetdinhTSNT,
  ind,
}: {
  quyetdinhTSNT: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <Link to={`/quyetdinhtsnt/${quyetdinhTSNT.MaQD}`} target="_blank">
          {quyetdinhTSNT.So}
        </Link>
      </td>
      <td>{handleTime(quyetdinhTSNT.Ngay)}</td>
      <td>
        <Link
          to={`/doituong/${quyetdinhTSNT.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {quyetdinhTSNT.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${quyetdinhTSNT.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {quyetdinhTSNT.BiDanh}
        </Link>
      </td>
      <td>{handleTime(quyetdinhTSNT.ThoiGianBD)}</td>
      <td>{handleTime(quyetdinhTSNT.ThoiGianKT)}</td>
    </tr>
  );
}
