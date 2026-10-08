# Husky Gaming Club

Public homepage for a volunteer-run esports and gaming club for Saint Clair Shores students, their friends and families. Independently operated; not affiliated with or sponsored by any school or school district.

## Architecture and current status

- Public homepage: GitHub Pages at `huskygaming.club`.
- Private membership, family dashboard and Nextcloud Talk: the existing dedicated Unraid instance, intended for `talk.huskygaming.club`.
- These are intended destinations until domain settings and deployment are verified.
- The dedicated backend source was recovered and matched the deployed files during the October 7 recovery. It does not need rebuilding. Current server access is unavailable in this continuation, so new-address onboarding and calls remain unverified.
- Membership and sign-in remain marked “opening soon” until their public HTTPS destinations pass verification. The static homepage collects no family information.
- This repository contains the public homepage illustration; the original backend husky-and-key crest remains with the recovered application.

Private infrastructure, change history and rollback instructions are recorded in Jesse's Supabase wiki at `homelab/husky-club`. Do not put credentials, private room links, backups or family records in this repository.

## Preview and checks

No build step is required. Serve `site/` locally, for example:

```sh
python3 -m http.server 8080 --directory site --bind 127.0.0.1
```

Open http://127.0.0.1:8080. Relative assets work on the repository subpath and the custom domain.

The `Publish homepage` workflow checks local assets, page anchors, school-independence wording, and pending/configured/invalid access-link behavior. Pull requests run validation only. Main-branch pushes and manual runs validate before deploying only `site/`. These checks do not verify handset calls or the private backend.

## Publish the homepage

1. In repository **Settings → Pages**, set **Source: GitHub Actions**.
2. Merge the homepage change. If Pages is enabled afterward, rerun the failed workflow or manually run **Publish homepage**.
3. Verify the successful deployment at https://jryski.github.io/HuskyGaming.club/.
4. In Pages settings, save **Custom domain: huskygaming.club** before pointing DNS at Pages.
5. Once Cloudflare's zone is active, replace the apex parking records with these GitHub Pages records, initially **DNS only**:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | jryski.github.io |

Preserve unrelated records. Keep `talk` routed separately through the existing Cloudflare Tunnel. Save the previous records privately before changing them. GitHub Actions deployments use the custom domain saved in Pages settings; a `CNAME` file does not configure that setting.

6. Verify DNS and the custom-domain page, then enable **Enforce HTTPS** when GitHub's certificate is ready.

[GitHub Pages domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)

## Connect membership and Talk

1. Restore authorized access to the existing dedicated server. Confirm current health and preserve its accounts, files, isolation and backups.
2. Change the dedicated instance's trusted host and canonical URL to `https://talk.huskygaming.club`, retaining the prior values for rollback. Welcome emails, password recovery and Talk login must all use this service address.
3. Publish only the `talk.huskygaming.club` hostname through the existing tunnel. Use the verified dedicated origin from the private handoff.
4. Verify public HTTPS, the membership page, authenticated family dashboard, password recovery, and browser-to-Talk grant/poll.
5. Set `site/config.js` to the verified endpoints:

```js
window.HUSKY_LINKS = Object.freeze({
  membershipUrl: 'https://talk.huskygaming.club/index.php/apps/huskyclub/',
  signInUrl: 'https://talk.huskygaming.club/index.php/apps/huskyclub/family'
});
```

6. Verify a real parent request, owner notification, approval and welcome email. Check family permissions and cellular-to-Wi-Fi calls, including voice while Minecraft runs. Distribute invitations or a QR code only after acceptance.

## Undo

Revert the recorded homepage merge to restore the previous repository contents. Disable Pages and remove its custom-domain setting separately if unpublishing. Restore only the recorded Husky DNS changes and club tunnel hostname.

The dedicated backend has its own shutdown procedure in the private wiki. Disable its watchdog before stopping its containers. Keep data and backups until Jesse expressly chooses deletion; preserve family-cloud and Minecraft services.
