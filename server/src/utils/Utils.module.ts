import { Module } from "@nestjs/common";
import { UtilsService } from "./Utils.service";

@Module({
    providers:[UtilsService],
    exports: [UtilsService]
})
export class UtilsModule {}