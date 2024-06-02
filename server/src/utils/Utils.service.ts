import { Injectable } from '@nestjs/common';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class UtilsService {
    
  EncryptText(text: string): string | null {
    return text
      ? CryptoJS.AES.encrypt(text, process.env.KEY_CRYPTO_JS_TEXT).toString()
      : null;
  }

  DecryptText(ciphertext: string): string | null {
    return ciphertext
      ? CryptoJS.AES.decrypt(
          ciphertext,
          process.env.KEY_CRYPTO_JS_TEXT,
        ).toString(CryptoJS.enc.Utf8)
      : null;
  }

  EncryptObject(object: any): string | null {
    return object
      ? CryptoJS.AES.encrypt(
          JSON.stringify(object),
          process.env.KEY_CRYPTO_JS_OBJECT,
        ).toString()
      : null;
  }

  DecryptObject(ciphertext: string): string | null {
    return ciphertext
      ? JSON.parse(
          CryptoJS.AES.decrypt(
            ciphertext,
            process.env.KEY_CRYPTO_JS_OBJECT,
          ).toString(CryptoJS.enc.Utf8),
        )
      : null;
  }
}
