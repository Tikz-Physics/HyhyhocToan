import fs from 'fs';
import { CURRICULUM_ZONES } from '../src/data/curriculumData.js';

const illCode = fs.readFileSync('./src/components/QuestionIllustration.jsx', 'utf8');

CURRICULUM_ZONES.forEach(z => {
  console.log('\n=== Zone: ' + z.title + ' (' + z.id + ') ===');
  z.basicLevels.forEach(b => {
    const hasSpecial = illCode.includes("'" + b.id + "'") || b.type !== undefined || b.itemIcon !== undefined || b.hour !== undefined;
    console.log('  [' + (hasSpecial ? 'VISUAL' : 'GENERIC') + '] ' + b.id + ' : ' + b.title + ' | options: ' + JSON.stringify(b.options) + ' | target: ' + (b.targetNumber ?? b.correctNumber ?? b.correctAnswer));
  });
});
