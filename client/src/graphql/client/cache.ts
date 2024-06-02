import { InMemoryCache, ReactiveVar, makeVar } from "@apollo/client";


export const accountLoginVar: ReactiveVar<any> = makeVar<any>(null)

const cache = new InMemoryCache();
export default cache