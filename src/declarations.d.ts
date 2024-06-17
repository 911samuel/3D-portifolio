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

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "../assets/icons" {
  export const soundoff: string;
  export const soundon: string;
  export const arrow: string; 
}
