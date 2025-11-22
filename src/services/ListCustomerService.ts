import prismaClient from "../prisma";

export class ListCustomerService{
    async execute(){
        //FindMany serve para buscar (listar) vários registros de uma tabela no banco de dados.
        const costumers = await prismaClient.customer.findMany();

        return costumers;
    }
} 
