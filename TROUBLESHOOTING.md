# 空白页面问题解决方案

## 🔍 问题诊断

如果您的GitHub Pages显示空白页面，请按以下步骤排查：

### 1. 检查构建是否成功

```bash
# 本地测试构建
npm run build

# 检查dist文件夹
ls -la dist/
```

### 2. 检查GitHub Actions

1. 进入GitHub仓库
2. 点击 "Actions" 标签
3. 查看最新的部署日志
4. 确认构建成功

### 3. 常见问题及解决方案

#### 问题1: Terser依赖缺失
**症状**: `[vite:terser] terser not found`

**解决方案**: 
```bash
# 安装terser依赖
npm install terser --save-dev

# 或者修改vite.config.js使用esbuild
# minify: 'esbuild' 替代 minify: 'terser'
```

#### 问题2: Base路径错误
**症状**: 页面空白，控制台显示404错误

**解决方案**: 
- 确保vite.config.js中base路径正确
- 当前配置: `base: '/Personal-Website/'`

#### 问题3: JavaScript错误
**症状**: 页面加载但Vue应用未启动

**解决方案**:
```bash
# 检查控制台错误
# 确保所有依赖正确安装
npm install
npm run build
```

#### 问题4: 资源路径问题
**症状**: CSS/JS文件404错误

**解决方案**:
- 检查vite.config.js中的base配置
- 确保所有资源路径正确

### 4. 快速修复步骤

```bash
# 1. 清理并重新安装
rm -rf node_modules package-lock.json
npm install

# 2. 重新构建
npm run build

# 3. 本地预览
npm run preview

# 4. 推送到GitHub
git add .
git commit -m "Fix blank page issue"
git push origin master
```

### 5. 测试页面

访问 `test.html` 来诊断问题：
- 如果test.html正常显示，说明是Vue应用问题
- 如果test.html也空白，说明是GitHub Pages配置问题

### 6. 联系支持

如果问题仍然存在，请提供：
- GitHub Actions日志
- 浏览器控制台错误
- 本地构建结果
