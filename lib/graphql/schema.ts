import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";

const typesArray = loadFilesSync(".", { recursive: true, extensions: ["graphql"] })

const mergedTypeDefs = mergeTypeDefs(typesArray);

export { mergedTypeDefs as typeDefs }