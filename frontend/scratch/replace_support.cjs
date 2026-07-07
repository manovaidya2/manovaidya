const fs = require('fs');
const path = require('path');

const dir = 'C:\\users\\mrm-hani\\Desktop\\manovaidya\\frontend\\src\\teenmental';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

const conditions = [
  "Teen Mental Wellness",
  "Teen Stress & Anxiety",
  "Teen Depression & Low Mood",
  "Exam & Academic Pressure",
  "Low Confidence & Self-Esteem",
  "Screen Addiction & Digital Wellbeing",
  "Parent-Teen Relationship",
  "Teen Depression",
  "Teen Stress",
  "Teen Anxiety",
  "Teen Confidence",
  "Teen Screen Addiction"
];

let totalChanges = 0;

files.forEach(f => {
  let content = fs.readFileSync(path.join(dir, f), 'utf-8');
  let originalContent = content;

  // General "Support in India" replacements for conditions
  content = content.replace(/([A-Za-z\s&'()-]+) Support in India/g, (match, prefix) => {
    // Exceptions where Support should remain Support
    if (prefix.includes("Caregiver") || prefix.includes("Family") || prefix.includes("Parent-Teen Relationship") || prefix.includes("Wellbeing")) {
        return match;
    }
    return `${prefix} Treatment in India`;
  });

  // Support Focuses On
  content = content.replace(/([A-Za-z\s&'()-]+) Support Focuses On/g, (match, prefix) => {
    return `${prefix} Treatment Focuses On`;
  });

  // Support for Teens
  content = content.replace(/([A-Za-z\s&'()-]+) Support for Teens/g, (match, prefix) => {
    if (prefix.includes("Caregiver") || prefix.includes("Family") || prefix.includes("Parent-Teen Relationship") || prefix.includes("Wellbeing")) {
        return match;
    }
    return `${prefix} Treatment for Teens`;
  });

  // Specific condition support replacements (where they might just say "Depression Support")
  conditions.forEach(condition => {
    const regex1 = new RegExp(`${condition} Support([^a-zA-Z])`, 'g');
    content = content.replace(regex1, (match, suffix) => {
        // avoid replacing in URLs
        if (suffix === '-') return match;
        return `${condition} Treatment${suffix}`;
    });
  });

  if (originalContent !== content) {
    fs.writeFileSync(path.join(dir, f), content, 'utf-8');
    console.log(`Updated ${f}`);
    totalChanges++;
  }
});

console.log(`Total files updated: ${totalChanges}`);
