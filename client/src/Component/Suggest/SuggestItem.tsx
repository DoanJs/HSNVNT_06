import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function SuggestItem({
  denghiTSNT,
  ind,
}: {
  denghiTSNT: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <Link to={`/denghitsnt/${denghiTSNT.MaDN}`} target="_blank">{denghiTSNT.So}</Link>
      </td>
      <td>{handleTime(denghiTSNT.Ngay)}</td>
      <td>
        {denghiTSNT.CAQHvaTD?.CAQHvaTD}-{denghiTSNT.CATTPvaTD?.CATTPvaTD}
      </td>
      <td>
        <Link to={`/doituong/${denghiTSNT.DoiTuong?.MaDoiTuong}`} target="_blank">
          {denghiTSNT.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>{handleTime(denghiTSNT.ThoiGianBD)}</td>
      <td>{handleTime(denghiTSNT.ThoiGianKT)}</td>
    </tr>
  );
}
