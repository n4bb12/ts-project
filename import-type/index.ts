import { WriteStream } from "fs"
import { ParsedPath } from "path"

export class CustomWriteStream extends WriteStream {
  // ...
}

export const path: ParsedPath = {
  root: "/",
  dir: "/home/user/dir",
  base: "index.html",
  ext: ".html",
  name: "index",
}
