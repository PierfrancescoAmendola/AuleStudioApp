// Core TypeScript interfaces for UniStudy Italia

export interface StudyRoom {
  id: string;
  nome: string;
  edificio: string;
  piano: number;
  postiTotali: number;
  orarioApertura: string;
  orarioChiusura: string;
  servizi: string[];
  latitude: number;
  longitude: number;
  indirizzo: string;
  // Optional fields for extended data
  university?: string;
  postiDisponibili?: number;
  occupancy_rate?: string;
  notes?: string;
  // Optional UI/UX metadata
  tags?: string[]; // e.g., ["Social Hub", "Deep Work", "Panoramica / Focus"]
  vibe?: string; // short label summarizing the room's vibe
  extendedHours?: boolean; // true if the venue frequently estende l'orario in sessione
}

export interface DirectionsFromLocation {
  luogo: string;
  descrizione: string;
  mezziPubblici?: string[];
  tempoStimato: string;
  note?: string;
}

export interface CoordinateRegion {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export interface University {
  id: string;
  name: string; // Short acronym (e.g., "UniNa")
  fullName: string; // Full name (e.g., "Università degli Studi di Napoli Federico II")
  city: string;
  regionName: string; // e.g. "Campania", "Lazio"
  region: CoordinateRegion;
  studyRooms: StudyRoom[];
  availableFilters: string[]; // List of filter tabs (e.g., "Centro Storico", "Via Claudio")
  color: string; // Primary brand color
  darkColor: string; // Darker shade for gradients
}

export interface FilterOptions {
  hasPrese: boolean;
  hasSilenzio: boolean;
  hasWiFi: boolean;
  openNow: boolean;
}

export type RootStackParamList = {
  Onboarding: undefined;
  Home: undefined;
  StudyRooms: undefined;
  RoomDetail: { room: StudyRoom; universityName: string };
  Settings: undefined;
  Donation: undefined;
};
