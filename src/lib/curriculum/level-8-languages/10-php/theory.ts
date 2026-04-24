
import type { TheoryLesson } from '../../types';
import { lesson as l1 } from './theory/01-php8-attributes';
import { lesson as l2 } from './theory/02-strong-typing-union-types';
import { lesson as l3 } from './theory/03-constructor-promotion';
import { lesson as l4 } from './theory/04-oop-advanced';
import { lesson as l5 } from './theory/05-zend-engine-internals';
import { lesson as l6 } from './theory/06-memory-management';
import { lesson as l7 } from './theory/07-pdo-security';
import { lesson as l8 } from './theory/08-swoole-concurrency';
import { lesson as l9 } from './theory/09-reflection-api';
import { lesson as l10 } from './theory/10-fibers-concurrency';
import { lesson as l11 } from './theory/11-roadrunner-swoole';
import { lesson as l12 } from './theory/12-sockets-streams';
import { lesson as l13 } from './theory/13-ffi-native';
import { lesson as l14 } from './theory/14-generators-memory';
import { lesson as l15 } from './theory/15-hexagonal-architecture';
import { lesson as l16 } from './theory/16-dependency-injection';
import { lesson as l17 } from './theory/17-static-analysis';
import { lesson as l18 } from './theory/18-jit-performance';
import { lesson as l19 } from './theory/19-rce-security';
import { lesson as l20 } from './theory/20-grpc-microservices';
import { lesson as l21 } from './theory/21-capstone-deploy';

export const lessons: TheoryLesson[] = [
  l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
  l11, l12, l13, l14, l15, l16, l17, l18, l19, l20, l21
];
