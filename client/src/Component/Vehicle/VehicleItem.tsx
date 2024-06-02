import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function VehicleItem({
  phuongtiennv,
  ind,
}: {
  phuongtiennv: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <th>{handleTime(phuongtiennv.ThoiGianPH)}</th>
      <td>
        <Link to={`/phuongtiennv/${phuongtiennv.MaPT}`} target="_blank">
          {phuongtiennv.BKS}
        </Link>
      </td>
      <td>{phuongtiennv.DiaDiemPH}</td>
      <td>
        <Link to={phuongtiennv.HinhAnh} target="_blank">
          link
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${phuongtiennv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {phuongtiennv.KetQuaTSNT?.QuyetDinhTSNT?.BiDanh}
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${phuongtiennv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {phuongtiennv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>
        {phuongtiennv.TSThucHiens?.map((cbcs: any, ind: number) => (
          <Link key={ind} to={`/cbcs/${cbcs?.MaCBCS}`} target="_blank">
            <p>{cbcs?.HoTen}</p>
          </Link>
        ))}
      </td>
    </tr>
  );
}
