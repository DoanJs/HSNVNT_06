export default function Spinner() {
  return (
    <div
      style={{ height: "500px" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div
        style={{ width: "100px", height: "100px" }}
        className="spinner-border"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
