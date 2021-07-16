interface PixCalendarioResponse {
    criacao: string | Date;
    expiracao: string | Date;
}

interface PixDevedorResponse {
    cpf?: string;
    cnpj?: string;
    nome: string;
}

interface PixLocResponse {
    id: number;
    location: string;
    tipoCob: string;
    criacao: string | Date;
}

interface PixValorResponse {
    original: number;
    modalidadeAlteracao?: number;  
}

interface PixInfoAdicionaisResponse {
    nome: string;
    valor: string;
}

export interface PixChargeResponse {
    calendario: PixCalendarioResponse;
    txid: string;
    revisao: number;
    devedor: PixDevedorResponse;
    loc: PixLocResponse;
    location: string;
    status: string;
    valor: PixValorResponse;
    chave: string;
    solicitacaoPagador: string;
    infoAdicionais: Array<PixInfoAdicionaisResponse>;
}