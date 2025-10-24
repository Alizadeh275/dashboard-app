/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Base URL for API requests
   */
  readonly VITE_API_BASE_URL: string;

  /**
   * Application title
   */
  readonly VITE_APP_TITLE: string;

  /**
   * Application version
   */
  readonly VITE_APP_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
