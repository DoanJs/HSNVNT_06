import { Link } from "react-router-dom";
import { handleSort } from "../../utils/functions";

export default function InputButton({
  cap,
  array,
}: {
  cap: number;
  array: any[];
}) {
  return (
    <div className="ip-ls-item">
      <h6>* Cấp {cap}</h6>
      <div>
        {handleSort(array).map(
          (obj: any, ind: number) =>
            obj.cap === cap && (
              <Link
                key={ind}
                to={obj.to}
                target="_blank"
                type="button"
                className="btn btn-success"
              >
                {obj.label}
              </Link>
            )
        )}
      </div>
      <br />
    </div>
  );
}
