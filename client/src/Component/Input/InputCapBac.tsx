import styled from "styled-components";

const InputCapBacStyled = styled.div`
  display: flex;
`

export default function InputCapBac() {
  return (
    <InputCapBacStyled>
      <form className="col-3">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Cấp bậc
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Nhập cấp bậc"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Thêm mới
        </button>
      </form>
      <div>
        hung
      </div>
    </InputCapBacStyled>
  );
}
