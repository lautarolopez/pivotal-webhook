export type PrimaryResource = {
  story_type?: string;
  name?: string;
  url?: string;
  id?: number;
  kind?: string;
};

export type PivotalTrackerActivity = {
  occurred_at?: number;
  highlight?: string;
  primary_resources?: [PrimaryResource];
  changes?: [
    {
      story_type?: string;
      name?: string;
      new_values?: {
        accepted_at?: number;
        before_id?: number;
        after_id?: number;
        current_state?: string;
        updated_at?: number;
      };
      original_values?: {
        accepted_at?: number;
        before_id?: number;
        after_id?: number;
        current_state?: string;
        updated_at?: number;
      };
      id?: number;
      change_type?: string;
      kind?: string;
    }
  ];
  message?: string;
  project_version?: number;
  performed_by?: {
    name?: string;
    initials?: string;
    id?: number;
    kind?: string;
  };
  guid?: string;
  project?: {
    name?: string;
    id?: number;
    kind?: string;
  };
  kind?: string;
};
