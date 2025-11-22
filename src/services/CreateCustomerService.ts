import prismaClient from "../prisma";

export interface CreateCustomerProps{
    name: string
    email: string
}




export class CreateCustomerService {
    async execute({name,email}: CreateCustomerProps){

        if(!name || !email){
            throw new Error("Preencha todos os campos!");
        }

        const customer = await prismaClient.customer.create({   // Inserindo novo registro na tabela do banco de dados
            data:{
                name,
                email,
                status: true
            }

        })

        return customer;   
    
    }

}

