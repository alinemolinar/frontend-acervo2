import z from "zod";

export const userValidationSchema = z.object({
    nome: z
    .string({ required_error: "É necessário haver nome" })
    .min(2, { message: "Nome muito curto" })
    .max(60,{ message: "Nome muito grande" }),

     email: z
    .string({ required_error: "É necessário haver e-mail" })
    .min(2, { message: "E-mail muito curto" })
    .max(60,{ message: "E-mail muito grande" }),

     cargo: z
    .string({ required_error: "É necessário haver cargo" })
    .min(2, { message: "Nome do cargo é muito curto" })
    .max(60,{ message: "Nome do cargo é muito grande" }),

    status: z.string().optional().default("ativo"),

    senha: z
    .string({ required_error: "É necessário haver senha" }),

    confirmaSenha: z.string({ required_error: "É necessário confirmar a senha" }),


})
.refine((data) => data.senha === data.confirmaSenha, {
    message: "As senhas não coincidem.",
    path: ["confirmaSenha"], 

});
