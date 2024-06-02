import { Link } from "react-router-dom";

export default function NavbarSearchItem({ obj }: { obj: any }) {
  return (
    <Link to={obj.LienKet} className="list-group-item list-group-item-action" target="_blank">
      <b>{obj.TieuDe}</b>
      <br/>
      <i>{obj.LienKet}</i>
    </Link>
  );
}
