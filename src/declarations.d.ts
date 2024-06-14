// src/declarations.d.ts
declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "../assets/icons" {
  export const soundoff: string;
  export const soundon: string;
}
