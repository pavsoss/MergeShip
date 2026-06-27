import { RefreshCw } from 'lucide-react';
import { SyncButton } from './sync-button';

type Props = {
  lastSyncedAt: string | null;
};

export function SyncMatcherCard({ lastSyncedAt }: Props) {
  return (
    <section className="flex flex-col border border-zinc-800 bg-[#161b22] p-5">
      <div className="mb-4 flex items-center gap-2 border-b border-zinc-800 pb-3">
        <RefreshCw className="h-3.5 w-3.5 text-zinc-600" />
        <h2 className="text-[11px] uppercase tracking-widest text-zinc-500">SYNC MATCHER</h2>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="text-[12px] text-zinc-400">
          Next Matcher
          <br />
          Session
        </div>
        <SyncButton lastSyncedAt={lastSyncedAt} />
      </div>
    </section>
  );
}

export function SyncMatcherSkeleton() {
  return (
    <section className="flex flex-col border border-zinc-800 bg-[#161b22] p-5">
      <div className="mb-4 h-4 w-32 animate-pulse bg-zinc-800" />
      <div className="flex items-center justify-between pt-2">
        <div className="h-8 w-24 animate-pulse bg-zinc-800" />
        <div className="h-8 w-24 animate-pulse bg-zinc-800" />
      </div>
    </section>
  );
}
