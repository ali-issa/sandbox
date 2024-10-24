/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly TEST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
