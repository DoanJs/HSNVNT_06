import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function PlaceItem({
  diachinv,
  ind,
}: {
  diachinv: any;
  ind: number;
}) {
  return (
    <tr>
      <th>{ind + 1}</th>
      <td>
        <Link to={`/diachinv/${diachinv.MaDC}`} target="_blank">
          {handleTime(diachinv.ThoiGianPH)}
        </Link>
      </td>
      <td>{diachinv.DiaChi}</td>
      <td>
        <Link to={diachinv.HinhAnh} target="_blank">
          link
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${diachinv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {diachinv.KetQuaTSNT?.QuyetDinhTSNT?.BiDanh}
        </Link>
      </td>
      <td>
        <Link
          to={`/doituong/${diachinv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.MaDoiTuong}`}
          target="_blank"
        >
          {diachinv.KetQuaTSNT?.QuyetDinhTSNT?.DoiTuong?.TenDT}
        </Link>
      </td>
      <td>
        {diachinv.TSThucHiens?.map((cbcs: any, ind: number) => (
          <Link key={ind} to={`/cbcs/${cbcs?.MaCBCS}`} target="_blank">
            <p>{cbcs?.HoTen}</p>
          </Link>
        ))}
      </td>
    </tr>
  );
}
