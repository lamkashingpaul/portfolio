import { socialLinks } from "@/lib/site-config";
import { FileText } from "lucide-react";
import Link from "next/link";

export const OpenToWorkIndicator = () => {
  return (
    <Link
      href={socialLinks.resume}
      target="_blank"
      rel="noopener noreferrer"
      className="group mb-4 mt-2 flex items-center justify-between rounded-md border border-green-200 bg-green-50 p-3 transition-colors hover:bg-green-100 dark:border-green-800 dark:bg-green-950/30 dark:hover:bg-green-900/30"
    >
      <div className="flex items-center gap-3">
        <div className="relative flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 rounded-full bg-green-500"></span>
        </div>
        <span className="text-sm font-medium text-green-700 dark:text-green-400">
          Open to Work
        </span>
      </div>
      <div className="flex items-center gap-1 text-xs text-green-600 dark:text-green-500">
        <span className="group-hover:underline">View Resume</span>
        <FileText className="h-3.5 w-3.5" />
      </div>
    </Link>
  );
};
