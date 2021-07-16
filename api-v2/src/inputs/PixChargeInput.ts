interface PixInfoAdicionaisInput {
    nome: string;
    valor: string;
}

interface PixValorInput {
    original: number;
    modalidadeAlteracao?: number;  
}

interface PixDevedorInput {
    cpf?: string;
    cnpj?: string;
    nome: string;
}

interface PixCalendarioInput {
    expiracao: number;
}

export interface PixChargeInput {
    calendario: PixCalendarioInput;
    devedor: PixDevedorInput;
    valor: PixValorInput;
    chave: string;
    solicitacaoPagador: string;
    infoAdicionais: Array<PixInfoAdicionaisInput>;
}