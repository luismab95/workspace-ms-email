import { AES, enc } from "crypto-js";
import { config } from "../infrastructure/environment";
const crypto_data = config.server.crypto_data;

export class CryptoHelper {
  public encryptedData(data: string): string {
    const encrypt = AES.encrypt(data, crypto_data!);
    data = encrypt.toString();
    return data;
  }

  public decryptedData(data: any): string {
    data = AES.decrypt(data, crypto_data!);
    data = data.toString(enc.Utf8);
    return data;
  }
}
