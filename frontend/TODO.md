# TODO

- [ ] Add explicit close/cancel control (icon + button) to the WaitlistModal success state (“You&apos;re on the list!”) so the card doesn&apos;t appear to stay.
- [ ] Centralize success dismissal logic in `WaitlistModal` (clear `submitted` and call `onClose`).
- [ ] Keep existing auto-close behavior, but allow immediate manual close.
- [ ] Verify `App.jsx` passes a working `onClose` (it does: `setIsWaitlistOpen(false)`).
- [ ] Run frontend build/dev checks (`npm run build` or `npm run dev`) to ensure no lint/runtime errors.
