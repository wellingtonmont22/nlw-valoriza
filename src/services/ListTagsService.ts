import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class ListTagsService{
    async execute(){
        const tagRepositories = getCustomRepository(TagsRepositories)

        const tags = await tagRepositories.find()

        return tags
    }
}