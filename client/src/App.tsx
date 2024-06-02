import { Route, Routes } from "react-router-dom";
import {
  CBCSItem,
  CBCSList,
  CrimeItem,
  CrimeList,
  DecisionList,
  File,
  FileList,
  Home,
  InputCapbac,
  InputList,
  Login,
  Navbar,
  PlaceDetail,
  PlaceList,
  Profile,
  ProjectItem,
  ProjectList,
  RecordDetail,
  RecordList,
  Register,
  RelationDetail,
  RelationList,
  SuggestList,
  VehicleDetail,
  VehicleList,
} from "./Component";

export default function App() {
  return (
    <div>
      <Navbar />
      <div style={{ margin: "70px 30px 20px 30px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dangnhap" element={<Login />} />
          <Route path="/dangky" element={<Register />} />
          <Route path="/hoso" element={<File />} />
          <Route path="/hoso/:category" element={<FileList />} />
          <Route path="/doituong" element={<CrimeList />} />
          <Route path="/doituong/:id" element={<CrimeItem />} />
          <Route path="/chuyenan" element={<ProjectList />} />
          <Route path="/chuyenan/:id" element={<ProjectItem />} />
          <Route path="/cbcs" element={<CBCSList />} />
          <Route path="/cbcs/:id" element={<CBCSItem />} />
          <Route path="/denghitsnt" element={<SuggestList />} />
          <Route
            path="/denghitsnt/:id"
            element={<p>De nghi trinh sat/:id</p>}
          />
          <Route path="/quyetdinhtsnt" element={<DecisionList />} />
          <Route
            path="/quyetdinhtsnt/:id"
            element={<p>quyet dinh tsnt/:id</p>}
          />
          <Route path="/baocaophqh" element={<RelationList />} />
          <Route path="/baocaophqh/:id" element={<RelationDetail />} />
          <Route path="/baocaokqgh" element={<RecordList />} />
          <Route path="/baocaokqgh/:id" element={<RecordDetail />} />
          <Route path="/phuongtiennv" element={<VehicleList />} />
          <Route path="/phuongtiennv/:id" element={<VehicleDetail />} />
          <Route path="/diachinv" element={<PlaceList />} />
          <Route path="/diachinv/:id" element={<PlaceDetail />} />
          <Route path="/taikhoan/:id" element={<Profile />} />

          <Route path="/nhaplieu" element={<InputList />} />
          <Route path="/nhaplieu/capbac" element={<InputCapbac />} />
          <Route
            path="/nhaplieu/chuyenan"
            element={<p>nhap lieu/chuyen an</p>}
          />
          <Route path="/chuyenan/:id/edit" element={<h1>edit chuyen an</h1>} />
        </Routes>
      </div>
    </div>
  );
}
