import { Link } from "react-router-dom";
import { handleTime } from "../../utils/functions";

export default function FileItem({ obj, ind }: { obj: any; ind: number }) {
  return (
    <li className="list-group-item" aria-current="true" key={ind}>
      <input
        type="checkbox"
        name="checkbox"
        id={`checkbox_FileItem_id_${ind}`}
      />

      <label htmlFor={`checkbox_FileItem_id_${ind}`} className="fl-gr-title">
        <div className="fl-gr-header">
          <i className="fa-solid fa-caret-right fl-gr-header-right"></i>
          <i className="fa-solid fa-caret-down fl-gr-header-down"></i>
          <h6>{obj.BiDanh}</h6>
        </div>
        <span>{handleTime(obj.ThoiGianBD)}</span>
      </label>

      <ul className="list-group fl-gr-content">
        <Link to={`/doituong/${obj.DoiTuong.MaDoiTuong}`} target="_blank">
          <li className="list-group-item">Thông tin chi tiết</li>
        </Link>
        <Link to="/" target="_blank">
          <li className="list-group-item">Đề nghị TSNT</li>
        </Link>
        <Link to="/" target="_blank">
          <li className="list-group-item">Quyết định TSNT</li>
        </Link>
        <Link to="/" target="_blank">
          <li className="list-group-item">Kế hoạch TSNT</li>
        </Link>
      </ul>
    </li>
  );
}
