import { lesson as l1 } from './theory/01-network-architecture';
import { lesson as l2 } from './theory/02-physical-layer';
import { lesson as l3 } from './theory/03-data-link';
import { lesson as l4 } from './theory/04-network-layer';
import { lesson as l5 } from './theory/05-transport-layer';
import { lesson as l6 } from './theory/06-application-layer';
import { lesson as l7 } from './theory/07-network-security';
import { lesson as l8 } from './theory/08-wireless-mobile';
import { lesson as l9 } from './theory/09-cloud-sdn';
import { lesson as l10 } from './theory/10-management-troubleshooting';

export const lessons = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  ...Array.from({ length: 11 }, (_, i) => ({
    id: `net-t${i + 11}`,
    title: [
      "Protocolos de Routing (BGP/OSPF)", "IPv6 Deep Dive", "SDN: Software Defined Networking",
      "Load Balancing & Proxies", "CDNs & Global Edge", "TLS/SSL Handshake",
      "HTTP/2 & HTTP/3 (QUIC)", "NAT & Hole Punching", "Segurança Wireless (WPA3)",
      "Monitorização (SNMP/Netflow)", "Futuro: Redes Quânticas"
    ][i],
    content: `<div class='space-y-4'><h2 class='text-2xl font-bold'>🌐 Engenharia de Redes</h2><p>Tópico avançado sobre comunicação de dados e infraestrutura global.</p></div>`,
    quizId: `net-q${i + 11}`
  }))
];
