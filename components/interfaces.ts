export interface LeftSideNormalInterface {
  collapse: boolean;
}

export interface CallbackInterface {
  callback: (v: any) => void;
}

export interface CategoryItem {
  id: number;
  altitude: number;
  document_id: number;
  intro: string;
  code: string;
  title: string;
  type: string;
  type_text: string;
  pid?: number;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface Language {
  id: number;
  name: string;
  name_en: string;
  name_zh: string;
  iso_code: string;
  direction: string;
}

export interface DocumentItem {
  id: number;
  pid?: number;
  code: string;
  title: string;
  intro?: string;
  origin_url?: string;
  finished?: boolean;
  is_published?: boolean;
  readme?: string;
  language_id?: number;
  language?: Language;
  property?: "PRIVATE" | "PUBLIC";
  open_edit?: "Y" | "N";
  github?: string;
  finished_at?: string;
  published_at?: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface DocumentVersion {
  id: number;
  document_id: number;
  code: string;
  version_name: string;
  version_number: number;
  changelong?: string;
}

export interface DocumentLanguage {
  name: string;
  iso_code: string;
  progress: number;
}

export interface Country {
  id: number;
  zh_ch: string;
  en_us?: string;
  iso_code_2?: string;
  iso_code_3?: string;
  flag?: string;
}

export interface User {
  id: number;
  nickname: string;
  avatar: string;
  email: string;
  country_id?: number;
  country?: Country;
  language_id?: number;
  language?: Language;
}

export interface KCard {
  id: number;
  code: string;
  title: string;
  language?: Language;
  language_id?: number;
  user_id?: number;
  user?: User;
  content?: string;
  property?: "PRIVATE" | "PUBLIC";
  published_at?: string;
  version?: number;
  created_at?: string;
  updated_at?: string;
}
