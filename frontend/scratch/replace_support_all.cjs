const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\users\\mrm-hani\\Desktop\\manovaidya\\frontend\\src';

function getAllFiles(dirPath, arrayOfFiles) {
  let dirFiles = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  dirFiles.forEach(function (file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.jsx')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });

  return arrayOfFiles;
}

const files = getAllFiles(srcDir);

const exceptions = [
  "Caregiver",
  "Family",
  "Parent-Teen",
  "Wellbeing",
  "Healthy Ageing",
  "Emotional",
  "Growth",
  "Communication",
  "Behaviour",
  "Relationship",
  "Pregnancy, Postpartum & Motherhood",
  "Life Transitions",
  "Women Relationship & Emotional",
  "Self-Esteem",
  "Body Image",
  "Exam",
  "Child Development",
  "Teen Mental Wellness",
  "Learning",
  "Neuro-Ayurveda"
];

const specificConditions = [
  "Child Health Care & Development",
  "Autism",
  "Autism Spectrum Disorder",
  "ADHD",
  "ADHD & Hyperactivity",
  "Speech Delay",
  "Learning Difficulties",
  "Behavioural Concerns",
  "Teen Stress & Anxiety",
  "Teen Depression & Low Mood",
  "Teen Depression",
  "Teen Stress",
  "Teen Anxiety",
  "Teen Confidence",
  "Teen Screen Addiction",
  "Exam & Academic Pressure",
  "Low Confidence & Self-Esteem",
  "Screen Addiction & Digital Wellbeing",
  "Adult Mental Health Care",
  "Adult Stress & Anxiety",
  "Adult Depression",
  "Stress & Burnout",
  "Addiction & Unhealthy Habits",
  "Women Stress Management",
  "Women Depression & Low Mood",
  "Women Hormonal Changes, PMS & PMDD",
  "Women Life Transitions & Career Pressure",
  "Mind & Body Wellbeing",
  "Stress & High Blood Pressure",
  "Stress & IBS",
  "Stress & Fatigue",
  "Stress & Digestive Health",
  "Stress & Acidity",
  "Stress & Migraine",
  "Stress & Headaches",
  "Stress & Thyroid",
  "Sleep Disorders in Seniors",
  "Sleep Disorder",
  "Senior Mental Health Care",
  "Memory Loss & Forgetfulness",
  "Memory Loss",
  "Mild Cognitive Impairment \\(MCI\\)",
  "Mild Cognitive Impairment",
  "Confusion & Disorientation",
  "Dementia & Alzheimer's Care",
  "Dementia",
  "Alzheimer's",
  "Senior Depression",
  "Senior Anxiety",
  "Sleep Disorders"
];

let totalChanges = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf-8');
  let originalContent = content;

  const isException = (str) => {
    return exceptions.some(ex => str.includes(ex));
  };

  // General "Support in India"
  content = content.replace(/([A-Za-z\s&'(),-]+) Support in India/g, (match, prefix) => {
    if (isException(prefix)) {
        return match;
    }
    return `${prefix} Treatment in India`;
  });

  // Support Focuses On
  content = content.replace(/([A-Za-z\s&'(),-]+) Support Focuses On/g, (match, prefix) => {
    if (isException(prefix)) return match;
    return `${prefix} Treatment Focuses On`;
  });

  // Support for ...
  content = content.replace(/([A-Za-z\s&'(),-]+) Support for (Teens|Seniors|Women|Children|Adults|Kids)/g, (match, prefix, target) => {
    if (isException(prefix)) return match;
    return `${prefix} Treatment for ${target}`;
  });

  // Specific condition support replacements
  specificConditions.forEach(condition => {
    const regex1 = new RegExp(`${condition} Support([^a-zA-Z])`, 'g');
    content = content.replace(regex1, (match, suffix) => {
        // avoid replacing in URLs
        if (suffix === '-') return match;
        return `${condition} Treatment${suffix}`;
    });
  });

  if (originalContent !== content) {
    fs.writeFileSync(f, content, 'utf-8');
    console.log(`Updated ${path.basename(f)}`);
    totalChanges++;
  }
});

console.log(`Total files updated: ${totalChanges}`);
