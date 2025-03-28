export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_EMAIL_ADDRESS: string;
      NEXT_PUBLIC_GITHUB_URL: string;
      NEXT_PUBLIC_LINKEDIN_URL: string;
      NEXT_PUBLIC_RESUME_URL: string;
      NEXT_PUBLIC_TITLE_OF_SITE: string;
    }
  }
}
