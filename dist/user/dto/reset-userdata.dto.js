"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetDataDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class ResetDataDto {
}
__decorate([
    swagger_1.ApiModelProperty({
        example: 'pejman@gmail.com',
        description: 'The email of the User',
        format: 'email',
        uniqueItems: true,
        minLength: 5,
        maxLength: 255,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(255),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], ResetDataDto.prototype, "email", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        example: 'pejman hadavi',
        description: 'The name of the User',
        format: 'string',
        minLength: 6,
        maxLength: 255,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(255),
    __metadata("design:type", String)
], ResetDataDto.prototype, "fullName", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        example: '0x33dCEc9b25f0480c1ed85D3EAf6Fe5EcEcc5c455',
        description: 'The account address of the user',
        format: 'string',
        minLength: 5,
        maxLength: 1024,
    }),
    swagger_1.ApiModelProperty(),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(1024),
    __metadata("design:type", String)
], ResetDataDto.prototype, "accountAddress", void 0);
__decorate([
    swagger_1.ApiModelProperty({
        example: 'super star of rock band in Tronto',
        description: 'social media handles',
        format: 'string',
        minLength: 5,
        maxLength: 1024,
    }),
    class_validator_1.IsNotEmpty(),
    class_validator_1.IsString(),
    class_validator_1.MinLength(5),
    class_validator_1.MaxLength(1024),
    __metadata("design:type", String)
], ResetDataDto.prototype, "socialMedia", void 0);
exports.ResetDataDto = ResetDataDto;
//# sourceMappingURL=reset-userdata.dto.js.map