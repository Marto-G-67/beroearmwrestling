import { useEffect, useRef, useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "ok"; displayName: string; avatar: string; userId: number }
  | { kind: "notfound" }
  | { kind: "error" };

type Props = {
  value: string;
  onChange: (v: string) => void;
  onValidated?: (ok: boolean) => void;
};

const RobloxUsernameField = ({ value, onChange, onValidated }: Props) => {
  const [state, setState] = useState<State>({ kind: "idle" });
  const debounceRef = useRef<number | null>(null);
  const reqRef = useRef(0);

  useEffect(() => {
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    if (!value || value.trim().length < 3) {
      setState({ kind: "idle" });
      onValidated?.(false);
      return;
    }

    debounceRef.current = window.setTimeout(async () => {
      const username = value.trim();
      const reqId = ++reqRef.current;
      setState({ kind: "loading" });
      try {
        // Roblox public APIs (no auth)
        const lookup = await fetch("https://users.roblox.com/v1/usernames/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usernames: [username], excludeBannedUsers: false }),
        });
        if (!lookup.ok) throw new Error("lookup failed");
        const data = await lookup.json();
        if (reqId !== reqRef.current) return;
        const user = data?.data?.[0];
        if (!user) {
          setState({ kind: "notfound" });
          onValidated?.(false);
          return;
        }

        // Avatar
        let avatar = "";
        try {
          const avRes = await fetch(
            `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${user.id}&size=150x150&format=Png&isCircular=true`
          );
          if (avRes.ok) {
            const av = await avRes.json();
            avatar = av?.data?.[0]?.imageUrl ?? "";
          }
        } catch { /* ignore */ }

        if (reqId !== reqRef.current) return;
        setState({ kind: "ok", displayName: user.displayName ?? user.name, avatar, userId: user.id });
        onValidated?.(true);
      } catch {
        if (reqId !== reqRef.current) return;
        setState({ kind: "error" });
        onValidated?.(false);
      }
    }, 500);

    return () => {
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <div>
      <div className="relative">
        <input
          id="rblx"
          required
          value={value}
          maxLength={20}
          onChange={(e) => onChange(e.target.value)}
          placeholder="YourRobloxName"
          className="w-full h-11 rounded-md border border-input bg-background/50 px-3 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          {state.kind === "loading" && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
          {state.kind === "ok" && <CheckCircle2 className="h-4 w-4 text-success" />}
          {(state.kind === "notfound" || state.kind === "error") && <AlertCircle className="h-4 w-4 text-destructive" />}
        </div>
      </div>

      {state.kind === "ok" && (
        <div className="mt-2 glass rounded-xl p-3 flex items-center gap-3 animate-fade-up">
          {state.avatar ? (
            <img src={state.avatar} alt="" className="h-10 w-10 rounded-full bg-muted/40" />
          ) : (
            <div className="h-10 w-10 rounded-full bg-muted/40" />
          )}
          <div className="text-sm">
            <div className="font-semibold flex items-center gap-1.5">
              {state.displayName}
              <CheckCircle2 className="h-3.5 w-3.5 text-success" />
            </div>
            <div className="text-xs text-muted-foreground">Account verified · we'll deliver here</div>
          </div>
        </div>
      )}
      {state.kind === "notfound" && (
        <p className="text-xs text-destructive mt-1.5">No Roblox account found with that username.</p>
      )}
      {state.kind === "error" && (
        <p className="text-xs text-muted-foreground mt-1.5">Couldn't verify right now — you can still continue.</p>
      )}
      {state.kind === "idle" && (
        <p className="text-xs text-muted-foreground mt-1.5">We'll meet this account in Sailor Piece to deliver your order.</p>
      )}
    </div>
  );
};

export default RobloxUsernameField;
