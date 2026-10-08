create index if not exists project_import_candidates_imported_project_idx
  on public.project_import_candidates(imported_project_id);

create index if not exists project_import_candidates_reviewed_by_idx
  on public.project_import_candidates(reviewed_by);

create index if not exists project_source_sync_runs_created_by_idx
  on public.project_source_sync_runs(created_by);
