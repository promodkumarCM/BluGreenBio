import type { TeamMember } from "./types";

export function TeamCard({ name, role, bio, photo }: TeamMember) {
  return (
    <article className="site-card site-team-card">
      <div className="site-team-photo">
        <img src={photo} alt={`Portrait of ${name}`} width="500" height="400" loading="lazy" />
      </div>
      <div className="site-team-body">
        <span className="site-card-index">{role}</span>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </article>
  );
}
