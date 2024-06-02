import { Link } from "react-router-dom";
import { handleDanhGiaTSTH } from "../../utils/functions";
import { Fragment } from "react";

export default function CBCS({ cbcs, ind }: { cbcs: any; ind: number }) {
  return (
    <tr key={ind}>
      <td>
        <Link to={`/cbcs/${cbcs.MaCBCS}`} target="_blank">
          <b title={`CBCS ${cbcs.Doi?.TenDoi}`}>{cbcs.HoTen}</b>
        </Link>
      </td>
      <td>
        {cbcs.DanhGiaTSTHs.length}/
        <span style={{ color: "green" }}>
          {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrBD.length}
        </span>
        /
        <span style={{ color: "red" }}>
          {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrRKN.length}
        </span>
      </td>
      <td>
        <b>
          {cbcs.DanhGiaTSTHs?.map((obj: any, ind: number) => (
            <Fragment key={ind}>
              <Link
                to={`/doituong/${obj.KetQuaTSNT?.KeHoachTSNT?.DoiTuong?.MaDoiTuong}`}
              >
                <span>
                  {obj.KetQuaTSNT?.KeHoachTSNT?.QuyetDinhTSNT?.BiDanh}
                </span>
              </Link>
              <span>&emsp;</span>
            </Fragment>
          ))}
        </b>
      </td>
      <td>
        <b>
          {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrBD?.map(
            (obj: any, ind: number) => (
              <Fragment key={ind}>
                <Link
                  to={`/doituong/${obj.KetQuaTSNT?.KeHoachTSNT?.DoiTuong?.MaDoiTuong}`}
                >
                  <span>
                    {obj.KetQuaTSNT?.KeHoachTSNT?.QuyetDinhTSNT?.BiDanh}
                  </span>
                </Link>
                <span>&emsp;</span>
              </Fragment>
            )
          )}
        </b>
      </td>
      <td style={{ color: "red" }}>
        <b>
          {handleDanhGiaTSTH(cbcs.DanhGiaTSTHs).arrRKN?.map(
            (obj: any, ind: number) => (
              <Fragment key={ind}>
                <Link
                  to={`/doituong/${obj.KetQuaTSNT?.KeHoachTSNT?.DoiTuong?.MaDoiTuong}`}
                >
                  <span>
                    {obj.KetQuaTSNT?.KeHoachTSNT?.QuyetDinhTSNT?.BiDanh}
                  </span>
                </Link>
                <span>&emsp;</span>
              </Fragment>
            )
          )}
        </b>
      </td>
    </tr>
  );
}
