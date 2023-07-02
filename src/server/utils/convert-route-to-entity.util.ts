const mapping: Record<string, string> = {
  hospitals: 'hospital',
  patients: 'patient',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
