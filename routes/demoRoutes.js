/**
 * 模拟数据
 */
const express = require('express');
const router = express.Router();
const path = require('path');
const asyncReadFile = require('../utils/asyncReadFile');

const DEMO_DATA_FILE = path.join(__dirname, '../data/server-demo-data.json'); // 测试json

// 路由
router.get('/demo', async (req, res) => {
  const demoData = await asyncReadFile(DEMO_DATA_FILE);
  const result = res.setUnifyResFormat(demoData, 200);
  res.json(200, result);
});

module.exports = router;
