import { FastifyRequest, FastifyReply } from "fastify";
import { DeleteCustomerService } from "../services/DeleteCustomerService"; 

export class DeleteCustomerController{
    async handle(request:FastifyRequest,reply:FastifyReply){

        const {id} = request.query as {id:string}
        
        const CustomerService = new DeleteCustomerService();

        const customer = await CustomerService.execute({id});

        reply.send(customer);
    }

}