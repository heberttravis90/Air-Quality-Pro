# Air Quality Pro — Alpha 0.1

Offline-first phone/PWA platform for air quality field operations. EPA Method 325 field operations is the first module.

## Included
- Facilities
- Permanent monitoring locations
- Monitoring periods
- Automatic Method 325-style sample IDs
- Ambient / duplicate / field-blank sample types
- Deployment workflow
- Recovery workflow
- GPS capture
- Tube ID scan/entry and mismatch prevention
- Media conditioning age warning
- Exception tracking
- Deployment / recovery reconciliation
- Exact timestamps
- Sample status lifecycle
- Local JSON backup/import
- Audit log foundation
- Fictional Bayou Refining demo job

## Deliberately not in Alpha 0.1
- Cloud sync
- Lab CSV import
- 325B concentration calculations
- COC PDF generation
- Advanced mapping/GIS
- Meteorological analytics
- Delta-C / rolling annual compliance
- Root cause/corrective action module

## Run
Open index.html in a browser, or host the folder on GitHub Pages.
For best offline/PWA behavior, serve through HTTPS (GitHub Pages is fine).

## Important
This prototype is a field-workflow aid. Final regulatory logic must be validated against the applicable current rule, method, facility-specific monitoring plan, SOP/QAPP, and approved alternatives before production use.


## Platform Direction
Air Quality Pro is the umbrella application. Future modules can include ambient air monitoring, meteorological monitoring, CEMS field service, cooling tower monitoring, LDAR/IR surveys, QA/compliance, reporting, and other air-quality operations.
