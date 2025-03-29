export const OpenToWorkIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-md border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-950/30">
      <div className="relative mb-2 flex h-6 w-6">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-6 w-6 rounded-full bg-green-500"></span>
      </div>
      <span className="text-sm font-medium text-green-700 dark:text-green-400">
        Open to Work
      </span>
    </div>
  );
};
