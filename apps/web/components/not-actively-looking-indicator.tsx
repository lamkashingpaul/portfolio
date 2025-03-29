export const NotActivelyLookingIndicator = () => {
  return (
    <div className="mb-4 mt-2 flex flex-col items-center justify-center rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-gray-800 dark:bg-gray-900/30">
      <div className="relative mb-2 flex h-6 w-6">
        <span className="relative inline-flex h-6 w-6 rounded-full bg-gray-400"></span>
      </div>
      <span className="text-sm font-medium text-gray-700 dark:text-gray-400">
        Not Actively Searching
      </span>
    </div>
  );
};
