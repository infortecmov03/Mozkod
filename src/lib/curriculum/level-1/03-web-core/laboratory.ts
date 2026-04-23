import { exerciseHTML1 } from './laboratory/html/01-estrutura-basica';
import { exercise as exerciseCSS1 } from './laboratory/css/01-seletores';
import { exercise as exerciseCSS2 } from './laboratory/css/02-box-model-lab';
import { exercise as exerciseFlex } from './laboratory/css/04-flexbox-lab';
import { exercise as exerciseGrid } from './laboratory/css/05-grid-lab';
import { exercise as exerciseResp } from './laboratory/css/06-media-queries-lab';
import { exercise as exerciseForms } from './laboratory/html/02-formularios-lab';
import { exercise as exerciseDeploy } from './laboratory/03-deployment-lab';
import { exercise as exerciseSem } from './laboratory/04-semantica-lab';
import { exercise as exerciseSVG } from './laboratory/05-svg-lab';
import { exercise as exerciseARIA } from './laboratory/11-aria-lab';
import { exercise as exerciseAnim } from './laboratory/06-animacoes-lab';
import { exercise as exerciseBEM } from './laboratory/13-bem-refactoring-lab';
import { exercise as exerciseHTTP } from './laboratory/14-http-analysis-lab';
import { exercise as exercisePerf } from './laboratory/15-perf-optimization-lab';

export const practice = {
  html: [exerciseHTML1, exerciseForms, exerciseDeploy, exerciseSem, exerciseSVG, exerciseARIA, exerciseAnim, exerciseHTTP, exercisePerf],
  css: [exerciseCSS1, exerciseCSS2, exerciseFlex, exerciseGrid, exerciseResp, exerciseBEM]
};
