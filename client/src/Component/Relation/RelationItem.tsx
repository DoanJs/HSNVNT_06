import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function RelationItem({
  baocaoPHQH,
  ind,
}: {
  baocaoPHQH: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <Link to={`/baocaophqh/${baocaoPHQH.MaBCPHQH}`} target="_blank">
          {handleTime(baocaoPHQH.ThoiGianPH)}
        </Link>
      </td>
      <td>{baocaoPHQH.DiaDiemPH}</td>
      <td>{baocaoPHQH.HinhAnh}</td>
      <td>{baocaoPHQH.DiaChiCC}</td>
      <td>
        <Link to={`/doituong/${baocaoPHQH.DoiTuong?.MaDoiTuong}`}>
          {baocaoPHQH.KetQuaTSNT?.QuyetDinhTSNT?.BiDanh}
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${baocaoPHQH.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {baocaoPHQH.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>
        {baocaoPHQH.TSThucHiens.map((cbcs: any, ind: number) => (
          <Link key={ind} to={`/cbcs/${cbcs?.MaCBCS}`} target="_blank">
            <p>{cbcs?.HoTen}</p>
          </Link>
        ))}
      </td>
    </tr>
  );
}
