# Karevo - Backend waitlist (Node.js + SQLite)

## Plan steps

- [x] Create backend Node.js project files under `backend/` (package.json + server).

- [x] Add SQLite persistence and create `waitlist_entries` schema.

- [x] Implement `POST /api/waitlist` with input validation and uniqueness handling.

- [ ] Enable CORS + JSON parsing.
- [ ] Update `frontend/src/components/WaitlistModal.jsx` to POST to backend and handle errors.
- [ ] Run backend + frontend locally and test waitlist submissions.
- [ ] (Optional) Remove localStorage fallback or keep during transition.
