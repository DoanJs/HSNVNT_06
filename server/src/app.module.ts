import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './accounts/Account.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthPassportModule } from './authPassport/AuthPassport.module';
import { BaoCaoKQGHsModule } from './baocaoKQGHs/BaoCaoKQGHs.module';
import { BaoCaoKQXMDiaChisModule } from './baocaoKQXMDiaChis/BaoCaoKQXMDiaChis.module';
import { BaoCaoKQXMQuanHesModule } from './baocaoKQXMQuanHes/BaoCaoKQXMQuanHes.module';
import { BaoCaoKTDNsModule } from './baocaoKTDNs/BaoCaoKTDNs.module';
import { BaoCaoPHQHsModule } from './baocaoPHQHs/BaoCaoPHQHs.module';
import { BienPhapDTsModule } from './bienPhapDTs/BienPhapDTs.module';
import { BienBanRKNsModule } from './bienbanRKNs/BienBanRKNs.module';
import { CAQHvaTDsModule } from './caQHvaTD/CAQHvaTDs.module';
import { CATTPvaTDsModule } from './caTTPvaTD/CATTPvaTDs.module';
import { CapCAsModule } from './capCAs/CapCAs.module';
import { CapBacsModule } from './capbacs/CapBacs.module';
import { CBCSsModule } from './cbcss/CBCSs.module';
import { ChucVusModule } from './chucvus/ChucVus.module';
import { ChuyenAnsModule } from './chuyenans/ChuyenAns.module';
import { DanhGiaTSTHsModule } from './danhgiaTSTHs/DanhGiaTSTHs.module';
import { DanTocsModule } from './dantocs/DanTocs.module';
import { DataLoaderModule } from './dataloader/Dataloader.module';
import { DauMoiPH_DNModule } from './dauMoiPH_DNs/DauMoiPH_DNs.module';
import { DDNBsModule } from './ddnbs/DDNBs.module';
import { DeNghiTSNTsModule } from './denghiTSNTs/DeNghiTSNTs.module';
import { DiaChiNVsModule } from './diachiNVs/DiaChiNVs.module';
import { DoisModule } from './dois/Dois.module';
import { DoiTuongCAsModule } from './doituongCAs/DoiTuongCAs.module';
import { DoiTuongsModule } from './doituongs/DoiTuongs.module';
import { HinhThucHDsModule } from './hinhthucHDs/HinhThucHDs.module';
import { KeHoachTSNTsModule } from './kehoachTSNTs/KeHoachTSNTs.module';
import { KetQuaXMDiaChisModule } from './ketQuaXMDiaChis/KetQuaXMDiaChis.module';
import { KetQuaXMQuanHesModule } from './ketQuaXMQuanHes/KetQuaXMQuanHes.module';
import { KetQuaTSNTsModule } from './ketquaTSNTs/KetQuaTSNTs.module';
import { KyDuyet_DNsModule } from './kyDuyet_DNs/KyDuyet_DNs.module';
import { LLDBsModule } from './lldbs/LLDBs.module';
import { LucLuongThamGiaKHsModule } from './lltgKeHoachs/LucLuongThamGiaKHs.module';
import { LoaiDTsModule } from './loaiDTs/LoaiDTs.module';
import { LoaiLLDBsModule } from './loaiLLDBs/LoaiLLDBs.module';
import { PhuongTienNVsModule } from './phuongtienNVs/PhuongTienNVs.module';
import { QuocTichsModule } from './quoctichs/QuocTichs.module';
import { QuyetDinhTSNTsModule } from './quyetdinhTSNTs/QuyetDinhTSNTs.module';
import { TinhTPsModule } from './tinhTPs/TinhTPs.module';
import { TinhChatDTsModule } from './tinhchatDTs/TinhChatDTs.module';
import { TonGiaosModule } from './tongiaos/TonGiaos.module';
import { TramCTsModule } from './tramCTs/TramCTs.module';
import { TKNhanhsModule } from './timkiemnhanhs/TKNhanhs.module';
require('dotenv').config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'localhost',
      port: 1433,
      username: process.env.USERNAME_MSSQL,
      password: process.env.PASSWORD_MSSQL,
      database: 'HSNVNT_06',
      // autoLoadEntities: true,
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logging: true,
      // synchronize: true, ///not use production env
      options: {
        trustServerCertificate: true,
      },
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
    DauMoiPH_DNModule,
    QuocTichsModule,
    DanTocsModule,
    TonGiaosModule,
    TinhChatDTsModule,
    LoaiDTsModule,
    TinhTPsModule,
    CapCAsModule,
    CATTPvaTDsModule,
    CAQHvaTDsModule,
    DoisModule,
    CapBacsModule,
    ChucVusModule,
    KyDuyet_DNsModule,
    KetQuaXMQuanHesModule,
    KetQuaXMDiaChisModule,
    TramCTsModule,
    LLDBsModule,
    LoaiLLDBsModule,
    HinhThucHDsModule,
    BienPhapDTsModule,
    DoiTuongsModule,
    DeNghiTSNTsModule,
    QuyetDinhTSNTsModule,
    KeHoachTSNTsModule,
    LucLuongThamGiaKHsModule,
    KetQuaTSNTsModule,
    BaoCaoKTDNsModule,
    BienBanRKNsModule,
    DanhGiaTSTHsModule,
    DDNBsModule,
    CBCSsModule,
    ChuyenAnsModule,
    DoiTuongCAsModule,
    BaoCaoKQGHsModule,
    BaoCaoPHQHsModule,
    BaoCaoKQXMQuanHesModule,
    DiaChiNVsModule,
    BaoCaoKQXMDiaChisModule,
    PhuongTienNVsModule,
    TKNhanhsModule,
    AccountModule,
    AuthPassportModule,
    DataLoaderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
