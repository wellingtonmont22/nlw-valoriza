import { Repository, EntityRepository } from "typeorm";
import { Compliment } from "../entities/Compliment";

@EntityRepository(Compliment)
export class ComplimentseRepositories extends Repository<Compliment>{
    
}