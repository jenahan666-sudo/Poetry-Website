export const SkeletonCard = () => {
  return (
    <div className="bg-surface-card border border-border-default rounded-[14px] p-6 animate-pulse">
      <div className="h-7 bg-bg-secondary rounded w-3/4 mb-3" />
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-bg-secondary rounded w-full" />
        <div className="h-4 bg-bg-secondary rounded w-5/6" />
        <div className="h-4 bg-bg-secondary rounded w-4/6" />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="h-4 bg-bg-secondary rounded w-24" />
        <div className="h-4 bg-bg-secondary rounded w-16" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 bg-bg-secondary rounded-full w-16" />
        <div className="h-6 bg-bg-secondary rounded-full w-20" />
      </div>
    </div>
  );
};

export const SkeletonPoem = () => {
  return (
    <div className="animate-pulse">
      <div className="h-4 bg-bg-secondary rounded w-64 mb-8" />
      <div className="h-12 bg-bg-secondary rounded w-3/4 mb-6" />
      <div className="flex gap-4 mb-8">
        <div className="h-4 bg-bg-secondary rounded w-32" />
        <div className="h-4 bg-bg-secondary rounded w-24" />
      </div>
      <div className="space-y-3 max-w-2xl">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="h-5 bg-bg-secondary rounded" style={{ width: `${60 + Math.random() * 40}%` }} />
        ))}
      </div>
    </div>
  );
};
