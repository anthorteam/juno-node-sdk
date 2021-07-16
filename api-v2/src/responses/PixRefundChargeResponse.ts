
interface PixRefundChargeHorarioResponse {
    solicitacao: string | Date;
    liquidacao?: string | Date;
}

export interface PixRefundChargeResponse {
  id: string;
  rtrId: string;
  valor: number;
  horario: PixRefundChargeHorarioResponse;
  status: string
}
