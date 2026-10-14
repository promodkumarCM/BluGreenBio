import { useAuth } from "../state/AuthContext";

export function DashboardPage() {
  const { user } = useAuth();
  const firstName = user?.name.trim().split(/\s+/)[0] ?? "there";
  const today = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <section className="dashboard-content">
      <span className="eyebrow">{today.toUpperCase()}</span>
      <h1>Good morning, {firstName}<span className="wave" aria-hidden="true">✳</span></h1>
      <p className="dashboard-intro">A new day is a new chance to grow something good.</p>
      <div className="dashboard-card">
        <div className="dashboard-card-icon" aria-hidden="true">✳</div>
        <div>
          <span className="eyebrow">YOUR SPACE</span>
          <h2>You're right where you need to be.</h2>
          <p>Your account is ready. Connect your own product experience to this protected space.</p>
        </div>
        <span className="card-sprout" aria-hidden="true">↗</span>
      </div>
      <p className="dashboard-footnote"><span className="status-dot" /> Signed in as {user?.email}</p>
    </section>
  );
}
