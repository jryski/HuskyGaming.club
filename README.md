# Husky Gaming Club

Public homepage for a volunteer-run esports and gaming club for Saint Clair Shores students, their friends and families. Independently operated; not affiliated with or sponsored by any school or school district.

## Live services

- Public homepage: https://huskygaming.club/ on GitHub Pages. `www` redirects to the main address. GitHub custom-domain DNS check passed; HTTPS enforcement is enabled.
- Parent membership requests: https://talk.huskygaming.club/index.php/apps/huskyclub/
- Member sign-in and family dashboard: https://talk.huskygaming.club/index.php/apps/huskyclub/family
- Talk app server address: https://talk.huskygaming.club

The existing dedicated Nextcloud application handles owner-approved parents, welcome emails, child enrollment and parent-owned password resets. The static homepage collects no family information. Private infrastructure, backups and exact rollback instructions are recorded in Jesse's Supabase wiki at `homelab/husky-club`; no credentials, private room links or family records belong in this repository.

## Verification — October 7, 2026

Recovery preserved the existing application. All 32 application/operations files matched the deployed source. Historical evidence contains 23 permission checks and 17 form checks; those checks were preserved rather than represented as newly rerun.

Sixteen targeted checks passed through the public Talk hostname, covering enrollment rendering, missing-CSRF rejection, invalid-form handling, anonymous dashboard protection, native login, canonical recovery URLs and token-form access, temporary-parent login/dashboard access, and the complete browser approval / Talk login-v2 poll flow. Polling produced credentials only after approval and only once. The temporary test account was removed; no real email was sent.

New-address handset login, cellular/Wi-Fi calls, voice while Minecraft runs, owner phone notification delivery and one genuine owner-approved welcome email remain acceptance tests. Historical family-server calls do not establish these results. Welcome emails follow owner-approved requests; do not send unsolicited invitations.

## Preview and publication

No build step is required. Serve `site/` with any static web server. Relative assets support both the repository subpath and custom domain.

The `Publish homepage` workflow validates page assets, anchors, school-independence wording and access-link behavior before deploying `site/` on main-branch pushes. Pull requests validate without deployment.

Pages uses GitHub Actions with custom domain `huskygaming.club`. Cloudflare has four DNS-only apex A records pointing to 185.199.108.153, 185.199.109.153, 185.199.110.153 and 185.199.111.153. `www` is a DNS-only CNAME to `jryski.github.io`. Talk uses the existing tunnel separately. Preserve unrelated DNS and household services.

## Rollback

To return the homepage access links to “opening soon,” revert activation commit `5e221f891538d28ec2955021f46a3aa731fc316d` on current main, review and push. Reverting this README update is separate and does not disable access. If deliberately restoring the prior HTTP redirect setting, uncheck Enforce HTTPS in Settings → Pages; normal operation should keep HTTPS enforced.

Repository changes do not undo DNS or backend settings. The private wiki contains the dedicated backend rollback and shutdown procedure. Keep club data and backups, and preserve the separate household Nextcloud and Minecraft services.
