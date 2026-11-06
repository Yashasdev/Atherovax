# AtheroVax Website Editing Guide

You can update the website text, team, publications and images without touching code, using **Pages CMS** (free, open source). Every save is stored in GitHub, so every change can be reviewed and undone.

## For editors

### Sign in
1. Go to **https://app.pagescms.org** and choose **Sign in with GitHub**.
2. Use your own GitHub account. It must have been given access to the AtheroVax website repository (ask your site admin).
3. Select the AtheroVax project.

### Edit content
Pick a section from the left menu, change the text in the form, and press **Save**.

| Menu item | What you can change |
|---|---|
| Homepage | Headline, subtitle, buttons, mission statement, overview text, featured images, lead program card |
| Our Science | Mechanism steps, "Explore the science" answers, preclinical notice, "where this fits" cards |
| Development & Early Research | Stages, current stage, Early Research text, research figure, research updates |
| Publications & Sources | Add/edit publications (title, authors, date, DOI, description, image) |
| Team | Add, edit, remove members; drag to change display order; upload headshots |
| Company Information | About, partnership info, announcements, public contact details, footer notice |
| Contact Form Wording | Inquiry type choices and the thank-you / error messages |

Tips:
- **Add a team member:** Team → *Add an entry* under "Team members" → fill in name, title, bio → upload a headshot → Save. Drag entries to reorder.
- **Upload an image:** use the image field's upload button. Use JPG or PNG under about 1 MB. Always fill in the image description.
- **Hidden until filled:** Mission statement, Featured images, About, Partnership, Announcements and Research updates do not appear on the site until you add content.
- **Scientific wording:** results are **preclinical**. Do not add efficacy numbers, human-benefit claims, partnerships or regulatory statements without leadership sign-off.

### When do changes appear?
Saving creates a commit in GitHub. Vercel then rebuilds the site automatically. Allow **1-3 minutes**, then refresh the page.

### Troubleshooting
- **Can't sign in / can't see the project:** your GitHub account hasn't been added to the repository. Ask the admin.
- **Saved but the site hasn't changed:** wait a few minutes and hard-refresh (Cmd/Ctrl+Shift+R). If still unchanged, ask the admin to check the Vercel *Deployments* tab; a failed build keeps the old site live.
- **A change looks wrong:** tell the admin. Any change can be rolled back from GitHub history (below).
- **Contact form messages:** the form's destination email is not in the CMS (see "Contact form").

---

## For the site admin

### One-time setup (needs human account access)
1. **GitHub ownership.** The repo is currently `Yashasdev/Atherovax` (a personal account). Move it to an AtheroVax-controlled GitHub organization (*Settings → Transfer*), with at least two owners. Add each editor as a collaborator with **Write** access. Pages CMS access equals repo write access.
2. **Pages CMS.** Sign in at app.pagescms.org, authorize/install the Pages CMS GitHub app on the repository, then open the project. It reads `.pages.yml` from the repo root. If the sign-in flow or labels differ from this guide, follow the Pages CMS docs: https://pagescms.org/docs
3. **Vercel.** The site is hosted on Vercel. In the Vercel project, open *Settings → Git* and confirm it is connected to the repo above (reconnect it if you transferred the repo), with production branch `main`. Build settings should be auto-detected as Vite: build command `npm run build`, output directory `dist`. Every commit to `main`, including CMS saves, deploys to production. Make sure the Vercel project is owned by an AtheroVax-controlled account.
   - **Check your plan:** Vercel's free Hobby plan is limited to non-commercial use, and on private repositories it may refuse to deploy commits made by anyone other than the account owner, which would block your editors' saves. If either applies, use Vercel Pro, make the repo public, or host elsewhere. I could not test this without account access.
4. **Contact form.** The form posts to Formspree (and a Google Sheet). Endpoints are in `src/formConfig.ts` and are deliberately not editable in the CMS. **The destination email is set in the Formspree account** (Form → Settings), so no email credentials are stored in GitHub or the CMS. To change who receives messages, change it there.

### Review before publishing (staging workflow)
Pages CMS commits to whichever branch the editor has selected, and Vercel builds a separate **preview URL** for every non-production branch. Suggested flow:
1. Create a branch `content-review` in GitHub.
2. Editors switch to that branch in Pages CMS (branch selector at the top) and save there.
3. Vercel publishes a preview for that branch (find the link in the Vercel *Deployments* tab, or on the GitHub commit).
4. A reviewer (e.g. Dr. Ley) approves, then an admin opens a Pull Request `content-review → main` and merges. Production deploys on merge.

This is a convention, not enforcement. Editors who choose `main` publish immediately. I could not test the Pages CMS branch selector or the Vercel preview URLs without account access, so verify them once. Vercel Hobby limits (above) apply to previews too. GitHub Free private repositories cannot enforce "required reviews" via branch protection; to enforce it, use a paid GitHub plan or an organization plan that supports it, or make the repo public.

### Limitations
- Pages CMS has **no granular roles or approval workflow**. Anyone with repo write access can edit every section.
- The CMS validates structure, not scientific accuracy. Treat the review step as the safeguard.
- Layout, animations, diagrams and the navigation are code, not content, and are not editable in the CMS.
- Images are stored in the repo (`public/images`). Keep them small, and never upload confidential or unapproved research figures.

### Roll back a change
GitHub → repository → *Commits* → open the unwanted commit → **Revert**. Merge the revert and Vercel redeploys. (Vercel also lets you promote a previous deployment in *Deployments* for an instant rollback.)

### Where content lives
`src/content/*.json` (one file per CMS menu item), images in `public/images/`, CMS configuration in `.pages.yml`. If you rename a field, update both the JSON and `.pages.yml`.
