export type CreditcardType = {
    creditcard: string;
}
export type UserType = {
    id: number;
    name: string;
    email: string;
    income: number;
    creaditcard: [CreditcardType];
}

export type LoginInputType = {
    password: string;
    email: string;
}

export type TokenType = {
    token: string;
}
