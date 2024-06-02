import { Fragment } from "react";
import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function CBCSItemRecord({ obj }: { obj: any }) {
  return (
    <tr>
      <td>{handleTime(obj.Ngay)}</td>
      <td>
        <Link to={"/"} target="_blank" rel="noreferrer">
          link
        </Link>
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
      <td>
        <b>
          {obj.TSThucHiens?.map((cbcs: any, ind: number) => (
            <Fragment key={ind}>
              <Link to={`/cbcs/${cbcs.MaCBCS}`} target="_blank">
                <span>{cbcs.HoTen}</span>
              </Link>
              <br />
            </Fragment>
          ))}
        </b>
      </td>
    </tr>
  );
}
