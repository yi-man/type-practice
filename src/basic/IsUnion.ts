type case1 = IsUnion<string>  // false
type case2 = IsUnion<string|number>  // true
type case3 = IsUnion<[string|number]>  // false


// export type IsUnion<T, U=T> = T extends U
//  ? [U] extends [T] ? false : true
//  : never


 export type IsUnion<T, U=T> = [T] extends [never] 
 ? false : T extends never
   ? false : [U] extends [T]
     ? false : true
