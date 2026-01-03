export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  tags: string[];
  primaryTag: string;
  links?: {
    github?: string;
    demo?: string;
    article?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'webrtc-demo',
    title: 'WebRTC Video Demo',
    tagline: 'Peer-to-peer video calling with custom signaling',
    description:
      'A fully functional video calling application demonstrating WebRTC fundamentals. Built a custom signaling server to handle peer discovery and connection negotiation, with clean UI for call controls.',
    highlights: [
      'Implemented ICE candidate exchange and SDP offer/answer flow',
      'Built WebSocket-based signaling server for peer discovery',
      'Added graceful handling for network interruptions and reconnection',
      'Responsive UI with camera/mic toggle controls',
    ],
    tags: ['WebRTC', 'TypeScript', 'React', 'WebSockets', 'Node.js'],
    primaryTag: 'WebRTC',
    links: {
      github: 'https://github.com/benvolatic/webrtc-demo',
    },
  },
  {
    id: 'rails-admin',
    title: 'Rails Admin Dashboard',
    tagline: 'Full-featured admin panel with role-based access',
    description:
      'A production-grade admin dashboard built with Ruby on Rails. Features comprehensive CRUD operations, data visualization, and fine-grained permission controls for multi-tenant environments.',
    highlights: [
      'Role-based access control with Pundit policies',
      'Real-time data updates with Hotwire/Turbo',
      'Comprehensive audit logging for compliance',
      'Responsive design with mobile-first approach',
    ],
    tags: ['Ruby on Rails', 'PostgreSQL', 'Hotwire', 'Tailwind CSS', 'Pundit'],
    primaryTag: 'Ruby on Rails',
    links: {
      github: 'https://github.com/benvolatic/rails-admin',
    },
  },
  {
    id: 'homelab',
    title: 'Homelab Infrastructure',
    tagline: 'Production-grade self-hosted services on Proxmox',
    description:
      'Complete homelab setup running on Proxmox VE with proper network segmentation, secure external access via Cloudflare Tunnels, and self-hosted services including Nextcloud, Plex, and more.',
    highlights: [
      'Proxmox VE cluster with HA-ready VM configuration',
      'pfSense firewall with VLAN segmentation and VPN',
      'Cloudflare Tunnels for secure, zero-trust external access',
      'Automated backups with redundant NAS storage',
      'Nextcloud for file sync, Plex for media, Sunshine/Moonlight for game streaming',
    ],
    tags: ['Proxmox VE', 'pfSense', 'Cloudflare', 'Nextcloud', 'Docker', 'Networking'],
    primaryTag: 'Infrastructure',
    links: {
      article: '/projects/homelab',
    },
  },
  {
    id: 'production-site',
    title: 'Production Website Deployment',
    tagline: 'End-to-end deployment with CI/CD and monitoring',
    description:
      'Full deployment pipeline for a client website including automated builds, preview deployments, and production releases. Configured CDN caching, SSL, and monitoring dashboards.',
    highlights: [
      'GitHub Actions CI/CD with automated testing',
      'Cloudflare Pages with custom domain and SSL',
      'Performance optimization achieving 95+ Lighthouse scores',
      'Error tracking and uptime monitoring integration',
    ],
    tags: ['Cloudflare Pages', 'GitHub Actions', 'CI/CD', 'Performance', 'DevOps'],
    primaryTag: 'DevOps',
    links: {
      demo: 'https://example.com',
    },
  },
  {
    id: 'react-native-app',
    title: 'React Native Mobile App',
    tagline: 'Cross-platform mobile app with Expo',
    description:
      'A cross-platform mobile application built with React Native and Expo. Features offline-first architecture, push notifications, and native device integrations.',
    highlights: [
      'Expo managed workflow with EAS Build',
      'Offline-first with local SQLite storage',
      'Push notifications via Expo Push API',
      'Native camera and location integrations',
    ],
    tags: ['React Native', 'Expo', 'TypeScript', 'SQLite', 'Mobile'],
    primaryTag: 'React Native',
    links: {
      github: 'https://github.com/benvolatic/mobile-app',
    },
  },
  {
    id: 'supabase-saas',
    title: 'Supabase SaaS Starter',
    tagline: 'Full-stack SaaS boilerplate with auth and billing',
    description:
      'A complete SaaS starter kit using Supabase for backend, including authentication, database, real-time subscriptions, and Stripe integration for billing.',
    highlights: [
      'Supabase Auth with OAuth providers and magic links',
      'Row-level security policies for multi-tenancy',
      'Real-time subscriptions for live updates',
      'Stripe integration with webhook handling',
    ],
    tags: ['Supabase', 'React', 'TypeScript', 'Stripe', 'PostgreSQL'],
    primaryTag: 'Supabase',
    links: {
      github: 'https://github.com/benvolatic/supabase-saas',
    },
  },
];
