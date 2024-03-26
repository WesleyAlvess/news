// Zod
import { z } from 'zod'

export const signupSchema = z.object({
    name: z.string().min(3, { message: "Nome deve ter no miníno 3 caracteres" }).transform(
        (name) => name.trim().split(" ").map((word) => word[0].toLowerCase() + word.slice(1)).join(" ")
    ),
    email: z.string().email({ message: "E-mail inválido"}).toLowerCase(),
    password: z.string().min(6, { message: "Senha deve ter no mínimo 6 caracteres" }),
    confirmPassword: z.string().min(6, { message: "Senha deve ter no miníno 6 caracteres" }),
    
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas devem ser iguais",
    path: ['confirmPassword'],
})