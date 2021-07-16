import { BaseResource } from './BaseResource';
import { PixQRCodeResponse, PixRefundChargeResponse } from '../responses';
import { PixChargeInput } from '../inputs';
import { PixChargeResponse } from '../responses/PixChargeResponse';

export class PixResource extends BaseResource {
    protected readonly baseUri = '/pix-api';
  
    getCharge(txId: string) {
      return this.httpGet<PixChargeResponse>(`/v2/cob/${txId}`);
    }

    createCharge(charge: PixChargeInput) {
        return this.httpPost<PixChargeResponse>(`/v2/cob`, charge);
    }
    
    refundCharge(e2eId: string, id: string, value?: number) {
        return this.httpPut<PixRefundChargeResponse>(`/v2/pix/${e2eId}/devolucao/${id}`, { valor: value });
    }

    getRefundCharge(e2eId: string, id: string) {
        return this.httpGet<PixRefundChargeResponse>(`/v2/pix/${e2eId}/devolucao/${id}`);
    }
    
    QRCode(txId: string) {
        return this.httpGet<PixQRCodeResponse>(`/qrcode/v2/${txId}/imagem`);
    }
    
  }