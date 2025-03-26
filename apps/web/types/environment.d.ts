export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
      NEXT_PUBLIC_TITLE_OF_SITE: string;
    }
  }
}
