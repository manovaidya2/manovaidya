import 'dotenv/config';
import fs from 'node:fs/promises';
import mongoose from 'mongoose';
import { crawlWebsite } from '../services/aiKnowledgeCrawler.js';
import { chunkPage } from '../services/aiKnowledgeContent.js';
import { createKnowledgeIndexes, syncWebsiteKnowledge, knowledgeStatus, retrieveKnowledge } from '../services/aiKnowledgeService.js';

const args = process.argv.slice(2);
try {
  if (args.includes('--crawl-only')) {
    const crawl = await crawlWebsite();
    await fs.mkdir('.cache', { recursive: true });
    await fs.writeFile('.cache/knowledge-crawl.json', JSON.stringify(crawl, null, 2));
    console.log(JSON.stringify({ pages: crawl.pages.length, chunks: crawl.pages.reduce((total, page) => total + chunkPage(page).length, 0), failures: crawl.failures, excluded: crawl.excluded.length, truncated: crawl.truncated }, null, 2));
  } else {
    if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is required');
    await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 10000 });
    if (args.includes('--status')) console.log(JSON.stringify(await knowledgeStatus(), null, 2));
    else if (args.includes('--query')) {
      const query = args[args.indexOf('--query') + 1];
      if (!query) throw new Error('Provide a query after --query');
      console.log(JSON.stringify(await retrieveKnowledge(query), null, 2));
    } else if (args.includes('--vector-index')) {
      await createKnowledgeIndexes({ vector: true }); console.log('Vector index requested. Check Atlas until queryable.');
    } else {
      await createKnowledgeIndexes();
      await syncWebsiteKnowledge({ noEmbeddings: args.includes('--no-embeddings') });
    }
  }
} catch (error) {
  console.error('Knowledge command failed:', error.code || error.name); process.exitCode = 1;
} finally { await mongoose.disconnect(); }
