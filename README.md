# HuskyGaming.club

Public homepage for Husky Gaming Club, a volunteer-run esports and gaming club for Saint Clair Shores students, their friends, and families. Independently operated, without school or school-district affiliation.

## Status

This is a static draft adapted from the text of the preserved `homepage-preview.png` and Jesse's updated club description. It is not the recovered original application source. The original husky/key artwork was unavailable; the draft includes a new lightweight SVG illustration that can be replaced when the source is recovered.

The recovery handoff reports an existing private Nextcloud deployment, parent requests, Jesse approval, welcome email and child enrollment. Those are recorded results, not live verification. Locutus was offline through Desktop Commander during this continuation. The original chat-reading API also failed. Its backend source and public service URLs remain unverified.

Membership and sign-in links deliberately remain inactive. The page collects no family information and does not implement a second enrollment system.

## Preview

No install or build step is needed:

```sh
python3 -m http.server 8080 --directory site --bind 127.0.0.1
```

Open http://127.0.0.1:8080. Relative assets support both the repository subpath and a custom domain. All fonts and illustrations are local. With JavaScript disabled, the content and pending-access notices remain readable.

## Connect the existing club service

1. Recover the original homepage/backend source from Locutus and verify the private club deployment. Preserve existing accounts and services.
2. Verify a public HTTPS parent-onboarding URL and a public HTTPS member-login URL. The proposed `talk.huskygaming.club` is not yet confirmed.
3. Update `site/config.js` with those two verified public URLs. Use the existing backend's onboarding page rather than submitting forms from GitHub Pages. Never commit tokens, credentials, child details or private room links.
4. Verify external parent requests, approval, welcome email, family access boundaries and real calls before distributing invitations or a QR code.

## Publish after review

Merge the reviewed PR, then choose **Settings → Pages → Source → GitHub Actions**. Run **Publish homepage** if enabling Pages occurs after the merge. Only `site/` is uploaded. Nothing deploys from the draft branch.

The expected default URL is https://jryski.github.io/HuskyGaming.club/ once Pages is enabled and a deployment succeeds.

For `huskygaming.club`, verify domain ownership with GitHub, set the Pages custom domain first, then update DNS. Configure the apex and optional `www` for Pages; keep the existing club-service subdomain routing separate. If using Cloudflare DNS, first verify its zone and registrar nameserver delegation. Do not overwrite existing service records blindly. Enforce HTTPS once the certificate is ready.

GitHub's current instructions:

- https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

No live DNS, Pages setting, container or account changes were made as part of preparing this draft.
