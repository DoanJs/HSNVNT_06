import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function RecordItem({
  baocaoKQGH,
  ind,
}: {
  baocaoKQGH: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <Link to={`/baocaoKQGH/${baocaoKQGH.MaBCKQGH}`} target="_blank">
          {handleTime(baocaoKQGH.ThoiGian)}
        </Link>
      </td>
      <td>{baocaoKQGH.DiaDiem}</td>
      <td>
        <Link to={baocaoKQGH.HinhAnh} target="_blank">
          link
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${baocaoKQGH.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {baocaoKQGH.KetQuaTSNT?.QuyetDinhTSNT?.BiDanh}
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${baocaoKQGH.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {baocaoKQGH.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>
        {baocaoKQGH.TSThucHiens.map((cbcs: any, ind: number) => (
          <Link key={ind} to={`/cbcs/${cbcs?.MaCBCS}`} target="_blank">
            <p>{cbcs?.HoTen}</p>
          </Link>
        ))}
      </td>
    </tr>
  );
}
