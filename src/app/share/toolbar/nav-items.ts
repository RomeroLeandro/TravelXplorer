export interface NavItem {
  path: string;
  title: string;
  icon?: string;
}

const links: NavItem[] = [
  {
    path: 'persons',
    title: 'Personas',
    icon: 'person',
  },
  {
    path: 'collectives',
    title: 'Colectivos',
    icon: 'directions_bus',
  },
  {
    path: 'trips',
    title: 'Viajes',
    icon: 'flight',
  },
]

export default links;
